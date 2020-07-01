(function (window) {
  const CONF = require('./config');
  const {
    createVideoPlayer,
    createVideoBox,
    createImageBox,
    createStatusBar,
    createVideoRender,
    renderRecordingStatus,
  } = require('./build_User_Interface');
  let recordingElements = {};

  function gotDevices(deviceInfos) {
    //console.log('DEVICES INFO::', deviceInfos);
    const SELECT_CONTOLS = CONF.DOC.querySelector('#select-controls');
    const SELECT_HEADER = CONF.DOC.createElement('span');
    SELECT_HEADER.innerHTML = 'Available System Device Info: ';
    const AUDIO_SELECT = CONF.DOC.createElement('select');
    AUDIO_SELECT.id = 'audioSource';
    AUDIO_SELECT.onchange = 'getStream';
    const VIDEO_SELECT = CONF.DOC.createElement('select');
    VIDEO_SELECT.id = 'videoSource';
    VIDEO_SELECT.onchange = 'getStream';
    for (let i = 0; i !== deviceInfos.length; ++i) {
      const deviceInfo = deviceInfos[i];
      const option = CONF.DOC.createElement('option');
      option.value = deviceInfo.deviceId;
      if (deviceInfo.kind === 'audioinput') {
        option.text =
          deviceInfo.label || 'microphone ' + (audioSelect.length + 1);
        AUDIO_SELECT.appendChild(option);
      } else if (deviceInfo.kind === 'videoinput') {
        option.text = deviceInfo.label || 'camera ' + (videoSelect.length + 1);
        VIDEO_SELECT.appendChild(option);
      } else {
        //console.log('Found another kind of device: ', deviceInfo);
      }
      SELECT_CONTOLS.appendChild(SELECT_HEADER);
      SELECT_CONTOLS.appendChild(AUDIO_SELECT);
      SELECT_CONTOLS.appendChild(VIDEO_SELECT);
    }
  }

  function getStream() {
    if (window.stream) {
      const tracks = window.stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
    const AUDIO_SELECT = CONF.DOC.querySelector('#audioSource');
    const VIDEO_SELECT = CONF.DOC.querySelector('#videoSource');

    const constraints = {
      audio: {
        deviceId: { exact: AUDIO_SELECT.value },
      },
      video: {
        deviceId: { exact: VIDEO_SELECT.value },
        width: { exact: 340 },
        height: { exact: 280 },
      },
      // video: true,
      // audio: true,
    };

    CONF.Media.getUserMedia(constraints).then(gotStream).catch(handleError);
  }

  function gotStream(stream) {
    const videoCanvas = CONF.DOC.querySelector('video');
    const recordStopButton = CONF.DOC.querySelector('#recordStop');
    const options = { mimeType: CONF.videoType };
    var recordedChunks = [];
    var mediaRecorder = new MediaRecorder(stream, options);
    window.stream = stream;
    videoCanvas.srcObject = stream;
    videoCanvas.play();
    mediaRecorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) {
        recordedChunks.push(e.data);
      }
    };

    mediaRecorder.onstart = (e) => {};

    mediaRecorder.onstop = (e) => {
      // generate a new video element
      const recordingTime =
        recordingElements && recordingElements.getRecordedTime();
      createVideoRender(recordedChunks, recordingTime);
    };

    function onRecordStartStop(event) {
      event.preventDefault();
      event.stopPropagation();
      if (CONF.isVideoOn) {
        const recordStopButton = CONF.DOC.querySelector('#recordStop');
        const Child = recordStopButton.childNodes;
        if (
          !CONF.isRecording &&
          mediaRecorder &&
          mediaRecorder.state === 'inactive' &&
          mediaRecorder.stream &&
          mediaRecorder.stream.active
        ) {
          const { RECORDING_DIV, RECORDING_DATA } = renderRecordingStatus();
          recordingElements = RECORDING_DATA;
          recordedChunks = [];
          mediaRecorder.start();
          Child[0].classList.add('fa-stop');
          Child[0].classList.remove('fa-video-camera');
          CONF.isRecording = true;
          const el = CONF.DOC.querySelector('#video-player');
          el.appendChild(RECORDING_DIV);
        } else {
          Child[0].classList.add('fa-video-camera');
          Child[0].classList.remove('fa-stop');
          if (mediaRecorder.state !== 'inactive') {
            mediaRecorder.stop();
          }
          CONF.isRecording = false;
          const el = CONF.DOC.querySelector('#recording-indicator');
          el && el.remove();
        }
      }
    }
    recordStopButton.addEventListener('click', onRecordStartStop);
  }

  /** ------------------ Action Handlers -------- */
  function updateStatus() {
    const status = CONF.isVideoOn;
    const statusBar = CONF.DOC.querySelector('#status-bar');
    statusBar.className = status ? 'power_on' : 'power_off';
    statusBar.childNodes[0].innerHTML = status
      ? 'Camera is Powered On'
      : 'Camera is Powered Off';
  }

  function updateButtonStatus() {
    const videoControls = CONF.DOC.querySelector(
      '.video-canvas>.video-controls'
    );
    videoControls.childNodes.forEach((node) => {
      if (node.id !== 'videoOnOff') {
        node.disabled = !CONF.isVideoOn;
      }
    });
  }

  function handleError(error) {
    console.error('Error: ', error);
  }

  function onTurnOnOff() {
    const videoCanvas = CONF.DOC.querySelector('video');
    const POWER_BUTTON = CONF.DOC.getElementById('videoOnOff');
    if (!CONF.isVideoOn) {
      CONF.Media.enumerateDevices()
        .then(gotDevices)
        .then(getStream)
        .catch(handleError);
      CONF.isVideoOn = true;
      POWER_BUTTON.classList.add('on');
      POWER_BUTTON.classList.remove('off');
    } else {
      videoCanvas.pause();
      videoCanvas.srcObject = null;
      POWER_BUTTON.classList.add('off');
      POWER_BUTTON.classList.remove('on');
      CONF.isVideoOn = false;
      if (window.stream) {
        const tracks = window.stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
      const SELECT_CONTOLS = CONF.DOC.querySelector('#select-controls');
      const el = CONF.DOC.querySelector('#recording-indicator');
      SELECT_CONTOLS.innerHTML = null;
      el && el.remove();
    }
    updateStatus();
    updateButtonStatus();
  }

  function onPlayPause(event) {
    event.preventDefault();
    event.stopPropagation();
    if (CONF.isVideoOn) {
      const videoCanvas = CONF.DOC.querySelector('video');
      const playPauseButton = CONF.DOC.querySelector('#playPause');
      const Child = playPauseButton.childNodes;
      if (!CONF.isPlaying) {
        videoCanvas.play();
        CONF.isPlaying = true;
        Child[0].classList.add('fa-pause');
        Child[0].classList.remove('fa-play');
        recordingElements && recordingElements.start();
      } else {
        CONF.isPlaying = false;
        videoCanvas.pause();
        Child[0].classList.add('fa-play');
        Child[0].classList.remove('fa-pause');
        recordingElements && recordingElements.stop();
      }
    }
  }

  function onMuteUnmute() {
    if (CONF.isVideoOn) {
      const videoCanvas = CONF.DOC.querySelector('video');
      const muteUnmuteButton = CONF.DOC.querySelector('#muteUnmute');
      videoCanvas.muted = !videoCanvas.muted;
      const Child = muteUnmuteButton.childNodes;
      if (videoCanvas.muted) {
        Child[0].classList.add('fa-microphone-slash');
        Child[0].classList.remove('fa-microphone');
      } else {
        Child[0].classList.add('fa-microphone');
        Child[0].classList.remove('fa-microphone-slash');
      }
    }
  }

  /**-------- Create User Interface -------*/
  const BUTTON_CTRLS = [
    {
      func: onTurnOnOff,
      buttonId: 'videoOnOff',
      buttonClasses: ['off'],
      iconDefaultClass: 'fa-power-off',
    },
    {
      func: () => {
        console.log('Record button clicked..');
      },
      buttonId: 'recordStop',
      buttonClasses: [],
      iconDefaultClass: 'fa-video-camera',
    },
    {
      func: onPlayPause,
      buttonId: 'playPause',
      buttonClasses: [],
      iconDefaultClass: 'fa-pause',
    },
    {
      func: onMuteUnmute,
      buttonId: 'muteUnmute',
      buttonClasses: [],
      iconDefaultClass: 'fa-microphone',
    },
  ];

  /**----- Application Initialize ------*/

  function initializePlayer() {
    return {
      PlayerName: 'My Awesome Player',
      init: function (el, options = {}) {
        const { showStatus, statusEl, enableCaptureImage } = options;
        // Bootstrap Awesome Player::
        // Get the dom element where we have to render the video UI
        // Here will get the options object for default configurations
        const domElement = CONF.DOC.querySelector(el);
        const VideoUI = createVideoPlayer(BUTTON_CTRLS, enableCaptureImage);

        domElement.appendChild(VideoUI);
        domElement.appendChild(createVideoBox());

        if (enableCaptureImage) {
          const ImageReceiverBox = createImageBox();
          domElement.appendChild(ImageReceiverBox);
        }

        if (showStatus && statusEl) {
          const domStatusElement = CONF.DOC.querySelector(statusEl);
          //domStatusElement.prepend(renderRecordingStatus());
          domStatusElement.prepend(createStatusBar());
        }
      },
    };
  }

  window.AwesomePlayer = initializePlayer();
})(window);
