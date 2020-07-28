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
  BUTTON.title = title;
  if (buttonClasses && buttonClasses.length) {
    BUTTON.classList.add(...buttonClasses);
  }
  if (fn) {
    BUTTON.onclick = fn;
  }
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
      ({ func, buttonId, buttonClasses, iconDefaultClass, title }) => {
        const Generated_Button = createCtrlButton(
          func,
          buttonId,
          buttonClasses,
          iconDefaultClass,
          title
        );
        VIDEO_CTRLS.appendChild(Generated_Button);
      }
    );
  return VIDEO_CTRLS;
}

function createImageCanvas(videoData) {
  // Generate Dynamic file Names:::
  if (CONF.isAccessDenied) {
    return;
  }
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
  CONF.DOC.querySelector('#capture-images>#all-images').appendChild(DIV);
}

function createVideoRender(recordedChunks, recordingTime) {
  if (CONF.isAccessDenied) {
    return;
  }
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

    const displayVideo = CONF.DOC.querySelector('#capture-videos>#all-videos');
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
  VIDEO_TAG.id = 'awesome-video-canvas';
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
  const ALL_VIDEOS = CONF.DOC.createElement('div');
  VIDEO_RECEVIER_BOX.id = 'capture-videos';
  ALL_VIDEOS.id = 'all-videos';
  const VIDEO_RECEVIER_BOX_HEADER = CONF.DOC.createElement('h2');
  VIDEO_RECEVIER_BOX_HEADER.innerHTML = `Videos Captured {${totalVideosCaptured}}`;
  VIDEO_RECEVIER_BOX.appendChild(VIDEO_RECEVIER_BOX_HEADER);
  VIDEO_RECEVIER_BOX.appendChild(ALL_VIDEOS);
  return VIDEO_RECEVIER_BOX;
}

function createImageBox() {
  /// Create Image Receiver Box Ui
  const IMAGE_RECEVIER_BOX = CONF.DOC.createElement('div');
  const ALL_IMAGES = CONF.DOC.createElement('div');
  IMAGE_RECEVIER_BOX.id = 'capture-images';
  ALL_IMAGES.id = 'all-images';
  const IMAGE_RECEVIER_BOX_HEADER = CONF.DOC.createElement('h2');
  IMAGE_RECEVIER_BOX_HEADER.innerHTML = `Images Captured {${totalImagesClicked}}`;
  IMAGE_RECEVIER_BOX.appendChild(IMAGE_RECEVIER_BOX_HEADER);
  IMAGE_RECEVIER_BOX.appendChild(ALL_IMAGES);
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

  const STATUS_BAR_CLOSE = CONF.DOC.createElement('i');
  STATUS_BAR_CLOSE.classList.add('fa', 'fa-times-circle-o');
  STATUS_BAR_CLOSE.onclick = (event) => event.target.parentNode.remove();

  STATUS_BAR.appendChild(STATUS_BAR_TEXT);
  STATUS_BAR.appendChild(STATUS_BAR_CLOSE);

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
  const RECORDING_DIV_CLOSE = CONF.DOC.createElement('i');
  RECORDING_DIV_CLOSE.classList.add('fa', 'fa-times-circle-o');
  RECORDING_DIV.appendChild(RECORDING_DIV_CLOSE);
  return {
    RECORDING_DIV,
    RECORDING_DATA,
  };
}

function renderUnwantedError(msg, link) {
  const ERROR_DIV = CONF.DOC.createElement('div');
  ERROR_DIV.id = 'error-unwanted';
  ERROR_DIV.innerHTML = msg;

  if (link && link.name && link.redirect) {
    const LINK = CONF.DOC.createElement('span');
    LINK.innerHTML = link.redirect;
    ERROR_DIV.appendChild(LINK);
  }
  const ERROR_CLOSE = CONF.DOC.createElement('i');
  ERROR_CLOSE.classList.add('fa', 'fa-times-circle-o');
  ERROR_CLOSE.onclick = (event) => event.target.parentNode.remove();
  ERROR_DIV.appendChild(ERROR_CLOSE);
  return ERROR_DIV;
}

module.exports = {
  createVideoPlayer,
  createVideoBox,
  createImageBox,
  createStatusBar,
  createVideoRender,
  renderRecordingStatus,
  renderUnwantedError,
};
