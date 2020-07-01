(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const CONF = require('./config');
const DATE = new Date();

let filterIndex = 0;
let totalImagesClicked = 0;
let totalVideosCaptured = 0;
/** --- Utils --- */
function updateImageCount(totalImagesClicked) {
  const ImageBoxHeader = CONF.DOC.querySelector('#capture-images>h2');
  ImageBoxHeader.innerHTML = `Images Captured {${totalImagesClicked}}`;
}

function updateVideoCount(totalVideosCaptured) {
  const VideoBoxHeader = CONF.DOC.querySelector('#capture-videos>h2');
  VideoBoxHeader.innerHTML = `Videos Captured {${totalVideosCaptured}}`;
}

function deleteImage(event) {
  event.target.parentNode.remove();
  updateImageCount(--totalImagesClicked);
}
function deleteVideo(event) {
  event.target.parentNode.remove();
  updateVideoCount(--totalVideosCaptured);
}

function applyFilters() {
  const videoCanvas = CONF.DOC.querySelector('video');
  videoCanvas.className = CONF.filters[filterIndex++ % CONF.filters.length];
}

/** --- Utils --- */
const ArrayOfStyleSheets = [
  'http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css',
  'videoFilters.css',
  'videoPlayer.css',
];
function loadCSS() {
  // make a stylesheet link
  ArrayOfStyleSheets.forEach((styleSheetPath) => {
    const myCSS = CONF.DOC.createElement('link');
    myCSS.rel = 'stylesheet';
    myCSS.href = styleSheetPath;
    // insert it at the end of the head in a legacy-friendly manner
    CONF.DOC.head.insertBefore(
      myCSS,
      CONF.DOC.head.childNodes[CONF.DOC.head.childNodes.length - 1].nextSibling
    );
  });
}

function createCtrlButton(
  fn,
  buttonId,
  buttonClasses = [],
  iconInitialClass,
  title
) {
  /// Create Video Player Buttons
  const BUTTON = CONF.DOC.createElement('button');
  BUTTON.id = buttonId;
  BUTTON.disabled = buttonId !== 'videoOnOff';
  // BUTTON.title = title;
  if (buttonClasses && buttonClasses.length) {
    BUTTON.classList.add(...buttonClasses);
  }
  BUTTON.onclick = fn;
  const ICON = CONF.DOC.createElement('i');
  ICON.classList.add('fa', iconInitialClass);
  BUTTON.appendChild(ICON);
  return BUTTON;
}

function createVideoControls(BUTTON_CTRLS) {
  const VIDEO_CTRLS = CONF.DOC.createElement('div');
  VIDEO_CTRLS.classList.add('video-controls');

  BUTTON_CTRLS &&
    BUTTON_CTRLS.length &&
    BUTTON_CTRLS.forEach(
      ({ func, buttonId, buttonClasses, iconDefaultClass }) => {
        const Generated_Button = createCtrlButton(
          func,
          buttonId,
          buttonClasses,
          iconDefaultClass
        );
        VIDEO_CTRLS.appendChild(Generated_Button);
      }
    );
  return VIDEO_CTRLS;
}

function createImageCanvas(videoData) {
  // Generate Dynamic file Names:::
  const CURRENT_TIME = DATE.getTime();
  const DIV = CONF.DOC.createElement('div');
  DIV.classList.add('captured-image');
  const DELETE_ICON = CONF.DOC.createElement('i');
  const DOWNLOAD_ICON = CONF.DOC.createElement('i');
  const LINK = CONF.DOC.createElement('a');
  DOWNLOAD_ICON.classList.add('fa', 'fa-download');
  LINK.innerHTML = 'Download Image';
  LINK.appendChild(DOWNLOAD_ICON);
  DELETE_ICON.classList.add('fa', 'fa-trash-o');
  DELETE_ICON.title = 'Delete Image';
  DELETE_ICON.onclick = deleteImage;
  DIV.appendChild(DELETE_ICON);
  const canvas = CONF.DOC.createElement('canvas');
  canvas.style.width = '100%';
  canvas.style.height = '150px';
  const context = canvas.getContext('2d');
  context.drawImage(videoData, 0, 0, 300, 170);
  DIV.appendChild(canvas);
  LINK.download = `${CURRENT_TIME}_Awesome_Image.png`;
  LINK.href = canvas.toDataURL();
  LINK.title = 'Download Image';
  DIV.appendChild(LINK);
  CONF.DOC.getElementById('capture-images').appendChild(DIV);
}

function createVideoRender(recordedChunks, recordingTime) {
  if (recordedChunks && recordedChunks.length) {
    const CURRENT_TIME = DATE.getTime();
    const videoWrapper = CONF.DOC.createElement('div');
    const DELETE_ICON = CONF.DOC.createElement('i');
    DELETE_ICON.classList.add('fa', 'fa-trash-o');
    DELETE_ICON.onclick = deleteVideo;
    DELETE_ICON.title = 'Delete Video';
    const DOWNLOAD_ICON = CONF.DOC.createElement('i');
    DOWNLOAD_ICON.classList.add('fa', 'fa-download');
    videoWrapper.className = 'video-wrapper';
    const videoElement = CONF.DOC.createElement('video');
    const blob = new Blob(recordedChunks, { type: CONF.videoType });
    const videoURL = window.URL.createObjectURL(blob);
    videoElement.style.width = '100%';
    videoElement.style.height = '150px';
    videoElement.src = videoURL;
    videoElement.autoplay = true;
    videoElement.loop = true;
    videoElement.muted = true;

    const displayTime = CONF.DOC.createElement('span');
    displayTime.className = 'video-time';
    displayTime.innerHTML = `Duration: ${recordingTime}`;

    const downloadVideoLink = CONF.DOC.createElement('a');
    downloadVideoLink.innerHTML = 'Download Video';
    downloadVideoLink.appendChild(DOWNLOAD_ICON);
    downloadVideoLink.href = videoURL;
    downloadVideoLink.target = '_blank';
    downloadVideoLink.title = 'Download Video';
    downloadVideoLink.download = `${CURRENT_TIME}_Awesome_Video.mp4`;
    videoWrapper.appendChild(DELETE_ICON);
    videoWrapper.appendChild(videoElement);
    videoWrapper.appendChild(downloadVideoLink);
    videoWrapper.appendChild(displayTime);

    const displayVideo = CONF.DOC.querySelector('#capture-videos');
    displayVideo.appendChild(videoWrapper);
    updateVideoCount(++totalVideosCaptured);
  }
}

function clickPicture() {
  if (CONF.isVideoOn) {
    const videoCanvas = CONF.DOC.querySelector('video');
    createImageCanvas(videoCanvas);
    updateImageCount(++totalImagesClicked);
  } else {
    alert('First Turn On the Camera.');
  }
}

function createVideoPlayer(controlsData, enableCaptureImage) {
  /// Create Video Player Ui
  loadCSS();
  const VIDEO_CANVAS = CONF.DOC.createElement('div');
  VIDEO_CANVAS.classList.add('video-canvas');
  const VIDEO_TAG = CONF.DOC.createElement('video');
  VIDEO_TAG.onclick = applyFilters;
  VIDEO_TAG.innerHTML = 'Your browser does not support the video tag.';
  VIDEO_CANVAS.appendChild(VIDEO_TAG);
  const VIDEO_CONTROLS = createVideoControls(controlsData);
  VIDEO_CANVAS.appendChild(VIDEO_CONTROLS);
  if (enableCaptureImage) {
    const CAM_BUTTON = CONF.DOC.createElement('button');
    CAM_BUTTON.id = 'capture';
    CAM_BUTTON.onclick = clickPicture;
    CAM_BUTTON.title = 'Click Picture';
    const CAM_ICON = CONF.DOC.createElement('i');
    CAM_ICON.classList.add('fa', 'fa-camera');
    CAM_BUTTON.appendChild(CAM_ICON);
    VIDEO_CANVAS.appendChild(CAM_BUTTON);
  }
  return VIDEO_CANVAS;
}

function createVideoBox() {
  /// Create Image Receiver Box Ui
  const VIDEO_RECEVIER_BOX = CONF.DOC.createElement('div');
  VIDEO_RECEVIER_BOX.id = 'capture-videos';
  const VIDEO_RECEVIER_BOX_HEADER = CONF.DOC.createElement('h2');
  VIDEO_RECEVIER_BOX_HEADER.innerHTML = `Videos Captured {${totalVideosCaptured}}`;
  VIDEO_RECEVIER_BOX.appendChild(VIDEO_RECEVIER_BOX_HEADER);
  return VIDEO_RECEVIER_BOX;
}

function createImageBox() {
  /// Create Image Receiver Box Ui
  const IMAGE_RECEVIER_BOX = CONF.DOC.createElement('div');
  IMAGE_RECEVIER_BOX.id = 'capture-images';
  const IMAGE_RECEVIER_BOX_HEADER = CONF.DOC.createElement('h2');
  IMAGE_RECEVIER_BOX_HEADER.innerHTML = `Images Captured {${totalImagesClicked}}`;
  IMAGE_RECEVIER_BOX.appendChild(IMAGE_RECEVIER_BOX_HEADER);
  return IMAGE_RECEVIER_BOX;
}

function createStatusBar() {
  const STATUS_BAR = CONF.DOC.createElement('div');
  STATUS_BAR.id = 'status-bar';
  STATUS_BAR.className = CONF.isVideoOn ? 'power_on' : 'power_off';
  const STATUS_BAR_TEXT = CONF.DOC.createElement('span');
  STATUS_BAR_TEXT.className = 'status';
  STATUS_BAR_TEXT.innerHTML = CONF.isVideoOn
    ? 'Camera is Powered On'
    : 'Camera is Powered Off';
  STATUS_BAR.appendChild(STATUS_BAR_TEXT);
  return STATUS_BAR;
}

function calculateRecordingTime(RECORDING_TIMER, isInitialStart) {
  var seconds = 0,
    minutes = 0,
    hours = 0,
    t;

  function add() {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }

    RECORDING_TIMER.textContent =
      (hours ? (hours > 9 ? hours : '0' + hours) : '00') +
      ':' +
      (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') +
      ':' +
      (seconds > 9 ? seconds : '0' + seconds);
    timer();
  }
  function timer() {
    t = setTimeout(add, 1000);
  }

  if (isInitialStart) {
    timer();
  }

  return {
    start: timer,
    stop: () => {
      clearTimeout(t);
    },
    clear: () => {
      RECORDING_TIMER.textContent = '00:00:00';
      seconds = 0;
      minutes = 0;
      hours = 0;
    },
    getRecordedTime: () => RECORDING_TIMER.innerHTML,
  };
}

function renderRecordingStatus() {
  const RECORDING_DIV = CONF.DOC.createElement('div');
  RECORDING_DIV.id = 'recording-indicator';
  RECORDING_DIV.className = 'recording-status';
  RECORDING_DIV.innerHTML = 'Recording';
  const RECORDING_INDICATOR = CONF.DOC.createElement('span');
  const RECORDING_TIMER = CONF.DOC.createElement('span');
  RECORDING_TIMER.id = 'recording-time';
  RECORDING_TIMER.innerHTML = '00:00:00';
  const RECORDING_DATA = calculateRecordingTime(RECORDING_TIMER, true);
  RECORDING_INDICATOR.className = 'recordingOn';
  RECORDING_DIV.prepend(RECORDING_INDICATOR);
  RECORDING_DIV.appendChild(RECORDING_TIMER);
  return {
    RECORDING_DIV,
    RECORDING_DATA,
  };
}

module.exports = {
  createVideoPlayer,
  createVideoBox,
  createImageBox,
  createStatusBar,
  createVideoRender,
  renderRecordingStatus,
};

},{"./config":2}],2:[function(require,module,exports){
// One time DOM Access
const Media = navigator.mediaDevices;
const Window = window;
const DOC = document;

// Initial configurations:
const isRecording = false;
const isPlaying = true;
const isVideoOn = false;
const shouldStop = false;
const stopped = false;
const videoType = 'video/webm';

const filters = [
  'grayscale',
  'sepia',
  'blur',
  'brightness',
  'contrast',
  'hue-rotate',
  'hue-rotate2',
  'hue-rotate3',
  'saturate',
  'invert',
  '',
];

const types = [
  'video/webm',
  'audio/webm',
  'video/webm;codecs=vp8',
  'video/webm;codecs=daala',
  'video/webm;codecs=h264',
  'audio/webm;codecs=opus',
  'video/mpeg',
  'video/mp4',
];

function checkVideoTypeSupports() {
  for (var i in types) {
    console.log(
      'Is ' +
        types[i] +
        ' supported? ' +
        (MediaRecorder.isTypeSupported(types[i])
          ? 'Supported!'
          : 'Not Supported!')
    );
  }
}

module.exports = {
  Media,
  Window,
  DOC,
  isRecording,
  isPlaying,
  isVideoOn,
  shouldStop,
  stopped,
  videoType,
  filters,
};

},{}],3:[function(require,module,exports){
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

},{"./build_User_Interface":1,"./config":2}]},{},[3]);
