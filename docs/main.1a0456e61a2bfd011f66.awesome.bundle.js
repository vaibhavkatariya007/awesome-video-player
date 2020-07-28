/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/favicon.ico":
/*!********************************!*\
  !*** ./src/assets/favicon.ico ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"favicon.ico\");\n\n//# sourceURL=webpack:///./src/assets/favicon.ico?");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"logo.png\");\n\n//# sourceURL=webpack:///./src/assets/logo.png?");

/***/ }),

/***/ "./src/assets/styles/reset.css":
/*!*************************************!*\
  !*** ./src/assets/styles/reset.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/styles/reset.css?");

/***/ }),

/***/ "./src/assets/styles/styles.css":
/*!**************************************!*\
  !*** ./src/assets/styles/styles.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/styles/styles.css?");

/***/ }),

/***/ "./src/assets/styles/videoFilters.css":
/*!********************************************!*\
  !*** ./src/assets/styles/videoFilters.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/styles/videoFilters.css?");

/***/ }),

/***/ "./src/assets/styles/videoPlayer.css":
/*!*******************************************!*\
  !*** ./src/assets/styles/videoPlayer.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/styles/videoPlayer.css?");

/***/ }),

/***/ "./src/build_User_Interface.js":
/*!*************************************!*\
  !*** ./src/build_User_Interface.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar CONF = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\nvar DATE = new Date();\nvar filterIndex = 0;\nvar totalImagesClicked = 0;\nvar totalVideosCaptured = 0;\n/** --- Utils --- */\n\nfunction updateImageCount(totalImagesClicked) {\n  var ImageBoxHeader = CONF.DOC.querySelector('#capture-images>h2');\n  ImageBoxHeader.innerHTML = \"Images Captured {\".concat(totalImagesClicked, \"}\");\n}\n\nfunction updateVideoCount(totalVideosCaptured) {\n  var VideoBoxHeader = CONF.DOC.querySelector('#capture-videos>h2');\n  VideoBoxHeader.innerHTML = \"Videos Captured {\".concat(totalVideosCaptured, \"}\");\n}\n\nfunction deleteImage(event) {\n  event.target.parentNode.remove();\n  updateImageCount(--totalImagesClicked);\n}\n\nfunction deleteVideo(event) {\n  event.target.parentNode.remove();\n  updateVideoCount(--totalVideosCaptured);\n}\n\nfunction applyFilters() {\n  var videoCanvas = CONF.DOC.querySelector('video');\n  videoCanvas.className = CONF.filters[filterIndex++ % CONF.filters.length];\n}\n/** --- Utils --- */\n\n\nvar ArrayOfStyleSheets = ['http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css'];\n\nfunction loadCSS() {\n  // make a stylesheet link\n  ArrayOfStyleSheets.forEach(function (styleSheetPath) {\n    var myCSS = CONF.DOC.createElement('link');\n    myCSS.rel = 'stylesheet';\n    myCSS.href = styleSheetPath; // insert it at the end of the head in a legacy-friendly manner\n\n    CONF.DOC.head.insertBefore(myCSS, CONF.DOC.head.childNodes[CONF.DOC.head.childNodes.length - 1].nextSibling);\n  });\n}\n\nfunction createCtrlButton(fn, buttonId) {\n  var buttonClasses = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n  var iconInitialClass = arguments.length > 3 ? arguments[3] : undefined;\n  var title = arguments.length > 4 ? arguments[4] : undefined;\n  /// Create Video Player Buttons\n  var BUTTON = CONF.DOC.createElement('button');\n  BUTTON.id = buttonId;\n  BUTTON.disabled = buttonId !== 'videoOnOff';\n  BUTTON.title = title;\n\n  if (buttonClasses && buttonClasses.length) {\n    var _BUTTON$classList;\n\n    (_BUTTON$classList = BUTTON.classList).add.apply(_BUTTON$classList, _toConsumableArray(buttonClasses));\n  }\n\n  if (fn) {\n    BUTTON.onclick = fn;\n  }\n\n  var ICON = CONF.DOC.createElement('i');\n  ICON.classList.add('fa', iconInitialClass);\n  BUTTON.appendChild(ICON);\n  return BUTTON;\n}\n\nfunction createVideoControls(BUTTON_CTRLS) {\n  var VIDEO_CTRLS = CONF.DOC.createElement('div');\n  VIDEO_CTRLS.classList.add('video-controls');\n  BUTTON_CTRLS && BUTTON_CTRLS.length && BUTTON_CTRLS.forEach(function (_ref) {\n    var func = _ref.func,\n        buttonId = _ref.buttonId,\n        buttonClasses = _ref.buttonClasses,\n        iconDefaultClass = _ref.iconDefaultClass,\n        title = _ref.title;\n    var Generated_Button = createCtrlButton(func, buttonId, buttonClasses, iconDefaultClass, title);\n    VIDEO_CTRLS.appendChild(Generated_Button);\n  });\n  return VIDEO_CTRLS;\n}\n\nfunction createImageCanvas(videoData) {\n  // Generate Dynamic file Names:::\n  if (CONF.isAccessDenied) {\n    return;\n  }\n\n  var CURRENT_TIME = DATE.getTime();\n  var DIV = CONF.DOC.createElement('div');\n  DIV.classList.add('captured-image');\n  var DELETE_ICON = CONF.DOC.createElement('i');\n  var DOWNLOAD_ICON = CONF.DOC.createElement('i');\n  var LINK = CONF.DOC.createElement('a');\n  DOWNLOAD_ICON.classList.add('fa', 'fa-download');\n  LINK.innerHTML = 'Download Image';\n  LINK.appendChild(DOWNLOAD_ICON);\n  DELETE_ICON.classList.add('fa', 'fa-trash-o');\n  DELETE_ICON.title = 'Delete Image';\n  DELETE_ICON.onclick = deleteImage;\n  DIV.appendChild(DELETE_ICON);\n  var canvas = CONF.DOC.createElement('canvas');\n  canvas.style.width = '100%';\n  canvas.style.height = '150px';\n  var context = canvas.getContext('2d');\n  context.drawImage(videoData, 0, 0, 300, 170);\n  DIV.appendChild(canvas);\n  LINK.download = \"\".concat(CURRENT_TIME, \"_Awesome_Image.png\");\n  LINK.href = canvas.toDataURL();\n  LINK.title = 'Download Image';\n  DIV.appendChild(LINK);\n  CONF.DOC.querySelector('#capture-images>#all-images').appendChild(DIV);\n}\n\nfunction createVideoRender(recordedChunks, recordingTime) {\n  if (CONF.isAccessDenied) {\n    return;\n  }\n\n  if (recordedChunks && recordedChunks.length) {\n    var CURRENT_TIME = DATE.getTime();\n    var videoWrapper = CONF.DOC.createElement('div');\n    var DELETE_ICON = CONF.DOC.createElement('i');\n    DELETE_ICON.classList.add('fa', 'fa-trash-o');\n    DELETE_ICON.onclick = deleteVideo;\n    DELETE_ICON.title = 'Delete Video';\n    var DOWNLOAD_ICON = CONF.DOC.createElement('i');\n    DOWNLOAD_ICON.classList.add('fa', 'fa-download');\n    videoWrapper.className = 'video-wrapper';\n    var videoElement = CONF.DOC.createElement('video');\n    var blob = new Blob(recordedChunks, {\n      type: CONF.videoType\n    });\n    var videoURL = window.URL.createObjectURL(blob);\n    videoElement.style.width = '100%';\n    videoElement.style.height = '150px';\n    videoElement.src = videoURL;\n    videoElement.autoplay = true;\n    videoElement.loop = true;\n    videoElement.muted = true;\n    var displayTime = CONF.DOC.createElement('span');\n    displayTime.className = 'video-time';\n    displayTime.innerHTML = \"Duration: \".concat(recordingTime);\n    var downloadVideoLink = CONF.DOC.createElement('a');\n    downloadVideoLink.innerHTML = 'Download Video';\n    downloadVideoLink.appendChild(DOWNLOAD_ICON);\n    downloadVideoLink.href = videoURL;\n    downloadVideoLink.target = '_blank';\n    downloadVideoLink.title = 'Download Video';\n    downloadVideoLink.download = \"\".concat(CURRENT_TIME, \"_Awesome_Video.mp4\");\n    videoWrapper.appendChild(DELETE_ICON);\n    videoWrapper.appendChild(videoElement);\n    videoWrapper.appendChild(downloadVideoLink);\n    videoWrapper.appendChild(displayTime);\n    var displayVideo = CONF.DOC.querySelector('#capture-videos>#all-videos');\n    displayVideo.appendChild(videoWrapper);\n    updateVideoCount(++totalVideosCaptured);\n  }\n}\n\nfunction clickPicture() {\n  if (CONF.isVideoOn) {\n    var videoCanvas = CONF.DOC.querySelector('video');\n    createImageCanvas(videoCanvas);\n    updateImageCount(++totalImagesClicked);\n  } else {\n    alert('First Turn On the Camera.');\n  }\n}\n\nfunction createVideoPlayer(controlsData, enableCaptureImage) {\n  /// Create Video Player Ui\n  loadCSS();\n  var VIDEO_CANVAS = CONF.DOC.createElement('div');\n  VIDEO_CANVAS.classList.add('video-canvas');\n  var VIDEO_TAG = CONF.DOC.createElement('video');\n  VIDEO_TAG.id = 'awesome-video-canvas';\n  VIDEO_TAG.onclick = applyFilters;\n  VIDEO_TAG.innerHTML = 'Your browser does not support the video tag.';\n  VIDEO_CANVAS.appendChild(VIDEO_TAG);\n  var VIDEO_CONTROLS = createVideoControls(controlsData);\n  VIDEO_CANVAS.appendChild(VIDEO_CONTROLS);\n\n  if (enableCaptureImage) {\n    var CAM_BUTTON = CONF.DOC.createElement('button');\n    CAM_BUTTON.id = 'capture';\n    CAM_BUTTON.onclick = clickPicture;\n    CAM_BUTTON.title = 'Click Picture';\n    var CAM_ICON = CONF.DOC.createElement('i');\n    CAM_ICON.classList.add('fa', 'fa-camera');\n    CAM_BUTTON.appendChild(CAM_ICON);\n    VIDEO_CANVAS.appendChild(CAM_BUTTON);\n  }\n\n  return VIDEO_CANVAS;\n}\n\nfunction createVideoBox() {\n  /// Create Image Receiver Box Ui\n  var VIDEO_RECEVIER_BOX = CONF.DOC.createElement('div');\n  var ALL_VIDEOS = CONF.DOC.createElement('div');\n  VIDEO_RECEVIER_BOX.id = 'capture-videos';\n  ALL_VIDEOS.id = 'all-videos';\n  var VIDEO_RECEVIER_BOX_HEADER = CONF.DOC.createElement('h2');\n  VIDEO_RECEVIER_BOX_HEADER.innerHTML = \"Videos Captured {\".concat(totalVideosCaptured, \"}\");\n  VIDEO_RECEVIER_BOX.appendChild(VIDEO_RECEVIER_BOX_HEADER);\n  VIDEO_RECEVIER_BOX.appendChild(ALL_VIDEOS);\n  return VIDEO_RECEVIER_BOX;\n}\n\nfunction createImageBox() {\n  /// Create Image Receiver Box Ui\n  var IMAGE_RECEVIER_BOX = CONF.DOC.createElement('div');\n  var ALL_IMAGES = CONF.DOC.createElement('div');\n  IMAGE_RECEVIER_BOX.id = 'capture-images';\n  ALL_IMAGES.id = 'all-images';\n  var IMAGE_RECEVIER_BOX_HEADER = CONF.DOC.createElement('h2');\n  IMAGE_RECEVIER_BOX_HEADER.innerHTML = \"Images Captured {\".concat(totalImagesClicked, \"}\");\n  IMAGE_RECEVIER_BOX.appendChild(IMAGE_RECEVIER_BOX_HEADER);\n  IMAGE_RECEVIER_BOX.appendChild(ALL_IMAGES);\n  return IMAGE_RECEVIER_BOX;\n}\n\nfunction createStatusBar() {\n  var STATUS_BAR = CONF.DOC.createElement('div');\n  STATUS_BAR.id = 'status-bar';\n  STATUS_BAR.className = CONF.isVideoOn ? 'power_on' : 'power_off';\n  var STATUS_BAR_TEXT = CONF.DOC.createElement('span');\n  STATUS_BAR_TEXT.className = 'status';\n  STATUS_BAR_TEXT.innerHTML = CONF.isVideoOn ? 'Camera is Powered On' : 'Camera is Powered Off';\n  var STATUS_BAR_CLOSE = CONF.DOC.createElement('i');\n  STATUS_BAR_CLOSE.classList.add('fa', 'fa-times-circle-o');\n\n  STATUS_BAR_CLOSE.onclick = function (event) {\n    return event.target.parentNode.remove();\n  };\n\n  STATUS_BAR.appendChild(STATUS_BAR_TEXT);\n  STATUS_BAR.appendChild(STATUS_BAR_CLOSE);\n  return STATUS_BAR;\n}\n\nfunction calculateRecordingTime(RECORDING_TIMER, isInitialStart) {\n  var seconds = 0,\n      minutes = 0,\n      hours = 0,\n      t;\n\n  function add() {\n    seconds++;\n\n    if (seconds >= 60) {\n      seconds = 0;\n      minutes++;\n\n      if (minutes >= 60) {\n        minutes = 0;\n        hours++;\n      }\n    }\n\n    RECORDING_TIMER.textContent = (hours ? hours > 9 ? hours : '0' + hours : '00') + ':' + (minutes ? minutes > 9 ? minutes : '0' + minutes : '00') + ':' + (seconds > 9 ? seconds : '0' + seconds);\n    timer();\n  }\n\n  function timer() {\n    t = setTimeout(add, 1000);\n  }\n\n  if (isInitialStart) {\n    timer();\n  }\n\n  return {\n    start: timer,\n    stop: function stop() {\n      clearTimeout(t);\n    },\n    clear: function clear() {\n      RECORDING_TIMER.textContent = '00:00:00';\n      seconds = 0;\n      minutes = 0;\n      hours = 0;\n    },\n    getRecordedTime: function getRecordedTime() {\n      return RECORDING_TIMER.innerHTML;\n    }\n  };\n}\n\nfunction renderRecordingStatus() {\n  var RECORDING_DIV = CONF.DOC.createElement('div');\n  RECORDING_DIV.id = 'recording-indicator';\n  RECORDING_DIV.className = 'recording-status';\n  RECORDING_DIV.innerHTML = 'Recording';\n  var RECORDING_INDICATOR = CONF.DOC.createElement('span');\n  var RECORDING_TIMER = CONF.DOC.createElement('span');\n  RECORDING_TIMER.id = 'recording-time';\n  RECORDING_TIMER.innerHTML = '00:00:00';\n  var RECORDING_DATA = calculateRecordingTime(RECORDING_TIMER, true);\n  RECORDING_INDICATOR.className = 'recordingOn';\n  RECORDING_DIV.prepend(RECORDING_INDICATOR);\n  RECORDING_DIV.appendChild(RECORDING_TIMER);\n  var RECORDING_DIV_CLOSE = CONF.DOC.createElement('i');\n  RECORDING_DIV_CLOSE.classList.add('fa', 'fa-times-circle-o');\n  RECORDING_DIV.appendChild(RECORDING_DIV_CLOSE);\n  return {\n    RECORDING_DIV: RECORDING_DIV,\n    RECORDING_DATA: RECORDING_DATA\n  };\n}\n\nfunction renderUnwantedError(msg, link) {\n  var ERROR_DIV = CONF.DOC.createElement('div');\n  ERROR_DIV.id = 'error-unwanted';\n  ERROR_DIV.innerHTML = msg;\n\n  if (link && link.name && link.redirect) {\n    var LINK = CONF.DOC.createElement('span');\n    LINK.innerHTML = link.redirect;\n    ERROR_DIV.appendChild(LINK);\n  }\n\n  var ERROR_CLOSE = CONF.DOC.createElement('i');\n  ERROR_CLOSE.classList.add('fa', 'fa-times-circle-o');\n\n  ERROR_CLOSE.onclick = function (event) {\n    return event.target.parentNode.remove();\n  };\n\n  ERROR_DIV.appendChild(ERROR_CLOSE);\n  return ERROR_DIV;\n}\n\nmodule.exports = {\n  createVideoPlayer: createVideoPlayer,\n  createVideoBox: createVideoBox,\n  createImageBox: createImageBox,\n  createStatusBar: createStatusBar,\n  createVideoRender: createVideoRender,\n  renderRecordingStatus: renderRecordingStatus,\n  renderUnwantedError: renderUnwantedError\n};\n\n//# sourceURL=webpack:///./src/build_User_Interface.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// One time DOM Access\nvar Media = navigator.mediaDevices;\nvar Window = window;\nvar DOC = document; // Initial configurations:\n\nvar isAccessDenied = false;\nvar isRecording = false;\nvar isPlaying = true;\nvar isVideoOn = false;\nvar shouldStop = false;\nvar stopped = false;\nvar videoType = 'video/webm';\nvar filters = ['grayscale', 'sepia', 'blur', 'brightness', 'contrast', 'hue-rotate', 'hue-rotate2', 'hue-rotate3', 'saturate', 'invert', ''];\nvar types = ['video/webm', 'audio/webm', 'video/webm;codecs=vp8', 'video/webm;codecs=daala', 'video/webm;codecs=h264', 'audio/webm;codecs=opus', 'video/mpeg', 'video/mp4'];\n\nfunction checkVideoTypeSupports() {\n  for (var i in types) {\n    console.log('Is ' + types[i] + ' supported? ' + (MediaRecorder.isTypeSupported(types[i]) ? 'Supported!' : 'Not Supported!'));\n  }\n}\n\nmodule.exports = {\n  Media: Media,\n  Window: Window,\n  DOC: DOC,\n  isAccessDenied: isAccessDenied,\n  isRecording: isRecording,\n  isPlaying: isPlaying,\n  isVideoOn: isVideoOn,\n  shouldStop: shouldStop,\n  stopped: stopped,\n  videoType: videoType,\n  filters: filters\n};\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function (window) {\n  'use strict';\n\n  var CONF = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\n  var _require = __webpack_require__(/*! ./build_User_Interface */ \"./src/build_User_Interface.js\"),\n      createVideoPlayer = _require.createVideoPlayer,\n      createVideoBox = _require.createVideoBox,\n      createImageBox = _require.createImageBox,\n      createStatusBar = _require.createStatusBar,\n      createVideoRender = _require.createVideoRender,\n      renderRecordingStatus = _require.renderRecordingStatus,\n      renderUnwantedError = _require.renderUnwantedError;\n  /**--- assets Management ----*/\n\n\n  __webpack_require__(/*! ./assets/favicon.ico */ \"./src/assets/favicon.ico\");\n\n  __webpack_require__(/*! ./assets/logo.png */ \"./src/assets/logo.png\");\n\n  __webpack_require__(/*! ./assets/styles/reset.css */ \"./src/assets/styles/reset.css\");\n\n  __webpack_require__(/*! ./assets/styles/styles.css */ \"./src/assets/styles/styles.css\");\n\n  __webpack_require__(/*! ./assets/styles/videoFilters.css */ \"./src/assets/styles/videoFilters.css\");\n\n  __webpack_require__(/*! ./assets/styles/videoPlayer.css */ \"./src/assets/styles/videoPlayer.css\"); //require('./manifest.json');\n  // require('./serviceworker.js');\n\n  /**--- assets Management ----*/\n\n\n  var recordingElements = {};\n\n  function gotDevices(deviceInfos) {\n    //console.log('DEVICES INFO::', deviceInfos);\n    var SELECT_CONTOLS = CONF.DOC.querySelector('#select-controls');\n    var SELECT_HEADER = CONF.DOC.createElement('span');\n    SELECT_HEADER.innerHTML = 'Available System Device Info: ';\n    var AUDIO_SELECT = CONF.DOC.createElement('select');\n    AUDIO_SELECT.id = 'audioSource';\n    AUDIO_SELECT.onchange = 'getStream';\n    var VIDEO_SELECT = CONF.DOC.createElement('select');\n    VIDEO_SELECT.id = 'videoSource';\n    VIDEO_SELECT.onchange = 'getStream';\n\n    for (var i = 0; i !== deviceInfos.length; ++i) {\n      var deviceInfo = deviceInfos[i];\n      var option = CONF.DOC.createElement('option');\n      option.value = deviceInfo.deviceId;\n\n      if (deviceInfo.kind === 'audioinput') {\n        option.text = deviceInfo.label || 'microphone ' + (AUDIO_SELECT.length + 1);\n        AUDIO_SELECT.appendChild(option);\n      } else if (deviceInfo.kind === 'videoinput') {\n        option.text = deviceInfo.label || 'camera ' + (VIDEO_SELECT.length + 1);\n        VIDEO_SELECT.appendChild(option);\n      } else {//console.log('Found another kind of device: ', deviceInfo);\n      }\n\n      SELECT_CONTOLS.appendChild(SELECT_HEADER);\n      SELECT_CONTOLS.appendChild(AUDIO_SELECT);\n      SELECT_CONTOLS.appendChild(VIDEO_SELECT);\n    }\n  }\n\n  function getStream() {\n    if (window.stream) {\n      var tracks = window.stream.getTracks();\n      tracks.forEach(function (track) {\n        return track.stop();\n      });\n    }\n\n    var AUDIO_SELECT = CONF.DOC.querySelector('#audioSource');\n    var VIDEO_SELECT = CONF.DOC.querySelector('#videoSource');\n    var constraints = {\n      video: true,\n      audio: true\n    };\n\n    if (AUDIO_SELECT.value !== '' && AUDIO_SELECT.value !== null && VIDEO_SELECT.value !== '' && VIDEO_SELECT.value !== null) {\n      constraints = {\n        audio: {\n          deviceId: {\n            exact: AUDIO_SELECT.value\n          }\n        },\n        video: {\n          deviceId: {\n            exact: VIDEO_SELECT.value\n          },\n          width: {\n            exact: 340\n          },\n          height: {\n            exact: 280\n          }\n        }\n      };\n    }\n\n    CONF.Media.getUserMedia(constraints).then(gotStream)[\"catch\"](handleError);\n  }\n\n  function gotStream(stream) {\n    var videoCanvas = CONF.DOC.querySelector('video');\n    var recordStopButton = CONF.DOC.querySelector('#recordStop');\n    var playPauseButton = CONF.DOC.querySelector('#playPause');\n    var options = {\n      mimeType: CONF.videoType\n    };\n    var recordedChunks = [];\n    var mediaRecorder = new MediaRecorder(stream, options);\n    window.stream = stream;\n    videoCanvas.srcObject = stream;\n    videoCanvas.play();\n\n    mediaRecorder.ondataavailable = function (e) {\n      if (e.data && e.data.size > 0) {\n        recordedChunks.push(e.data);\n      }\n    };\n\n    mediaRecorder.onstart = function (e) {};\n\n    mediaRecorder.onstop = function (e) {\n      // generate a new video element\n      var recordingTime = recordingElements && recordingElements.getRecordedTime();\n      createVideoRender(recordedChunks, recordingTime);\n      recordedChunks = [];\n    };\n\n    function recording(event) {\n      event.preventDefault();\n      event.stopPropagation();\n      onRecordStartStop(mediaRecorder);\n    }\n\n    function playPauseFunc(event) {\n      event.preventDefault();\n      event.stopPropagation();\n      onPlayPause(mediaRecorder);\n    }\n\n    recordStopButton.addEventListener('click', recording);\n    playPauseButton.addEventListener('click', playPauseFunc);\n    updateStatus();\n    updateButtonStatus();\n    CONF.isAccessDenied = false;\n    console.log('Camera And Microphone Access Permission Granted.');\n  }\n  /** ------------------ Action Handlers -------- */\n\n\n  function updateStatus() {\n    var status = CONF.isVideoOn;\n    var statusBar = CONF.DOC.querySelector('#status-bar');\n\n    if (statusBar) {\n      statusBar.className = status ? 'power_on' : 'power_off';\n      statusBar.childNodes[0].innerHTML = status ? 'Camera is Powered On' : 'Camera is Powered Off';\n    }\n  }\n\n  function updateButtonStatus() {\n    var videoControls = CONF.DOC.querySelector('.video-canvas>.video-controls');\n\n    if (videoControls) {\n      videoControls.childNodes.forEach(function (node) {\n        if (node.id !== 'videoOnOff') {\n          node.disabled = !CONF.isVideoOn;\n        }\n      });\n    }\n  }\n\n  function handleError(error) {\n    console.log('Error: ', error);\n\n    if (error.message === 'Permission denied') {\n      CONF.isAccessDenied = true;\n      var link = {\n        name: 'Reset Link',\n        redirect: 'For Reseting Permission Copy: chrome://settings/content#media-stream-mic'\n      };\n      var errorEl = renderUnwantedError('User has denied access for camera and microphone. kindly, reset you settings for respective domain.', link);\n      var el = CONF.DOC.querySelector('#video-player');\n      el.appendChild(errorEl);\n    }\n  }\n\n  function onTurnOnOff() {\n    var videoCanvas = CONF.DOC.querySelector('video');\n    var POWER_BUTTON = CONF.DOC.getElementById('videoOnOff');\n\n    if (CONF.isRecording) {\n      alert('Complete recording first.');\n      return;\n    }\n\n    if (!CONF.isVideoOn) {\n      CONF.Media.enumerateDevices().then(gotDevices).then(getStream)[\"catch\"](handleError);\n      CONF.isVideoOn = true;\n      POWER_BUTTON.classList.add('on');\n      POWER_BUTTON.classList.remove('off');\n      POWER_BUTTON.title = 'Power Off';\n    } else {\n      videoCanvas.pause();\n      videoCanvas.srcObject = null;\n      POWER_BUTTON.classList.add('off');\n      POWER_BUTTON.classList.remove('on');\n      POWER_BUTTON.title = 'Power On';\n      CONF.isVideoOn = false;\n\n      if (window.stream) {\n        var tracks = window.stream.getTracks();\n        tracks.forEach(function (track) {\n          return track.stop();\n        });\n      }\n\n      var SELECT_CONTOLS = CONF.DOC.querySelector('#select-controls');\n      var el = CONF.DOC.querySelector('#recording-indicator');\n      SELECT_CONTOLS.innerHTML = null;\n      el && el.remove();\n      updateStatus();\n      updateButtonStatus();\n    }\n  }\n\n  function onRecordStartStop(mediaRecorder) {\n    if (CONF.isVideoOn) {\n      if (!CONF.isPlaying) {\n        alert('Play video first.');\n        return;\n      }\n\n      var recordStopButton = CONF.DOC.querySelector('#recordStop');\n      var Child = recordStopButton.childNodes;\n\n      if (!CONF.isRecording && mediaRecorder && mediaRecorder.state === 'inactive' && mediaRecorder.stream && mediaRecorder.stream.active) {\n        var _renderRecordingStatu = renderRecordingStatus(),\n            RECORDING_DIV = _renderRecordingStatu.RECORDING_DIV,\n            RECORDING_DATA = _renderRecordingStatu.RECORDING_DATA;\n\n        recordingElements = RECORDING_DATA;\n        mediaRecorder.start();\n        recordStopButton.className = 'on';\n        recordStopButton.title = 'Stop Video Recording';\n        Child[0].classList.add('fa-stop');\n        Child[0].classList.remove('fa-video-camera');\n        CONF.isRecording = true;\n        var el = CONF.DOC.querySelector('#video-player');\n        el.appendChild(RECORDING_DIV);\n      } else {\n        recordStopButton.className = 'off';\n        recordStopButton.title = 'Start Video Recording';\n        Child[0].classList.add('fa-video-camera');\n        Child[0].classList.remove('fa-stop');\n\n        if (mediaRecorder.state !== 'inactive') {\n          mediaRecorder.stop();\n        }\n\n        CONF.isRecording = false;\n\n        var _el = CONF.DOC.querySelector('#recording-indicator');\n\n        _el && _el.remove();\n      }\n    }\n  }\n\n  function onPlayPause(mediaRecorder) {\n    if (CONF.isVideoOn) {\n      var videoCanvas = CONF.DOC.querySelector('video');\n      var playPauseButton = CONF.DOC.querySelector('#playPause');\n      var Child = playPauseButton.childNodes;\n      playPauseButton.className = CONF.isPlaying ? 'on' : 'off';\n      playPauseButton.title = CONF.isPlaying ? 'Play Video' : 'Pause Video';\n\n      if (!CONF.isPlaying) {\n        videoCanvas.play();\n\n        if (mediaRecorder.state === 'paused') {\n          mediaRecorder.resume();\n        }\n\n        CONF.isPlaying = true;\n        Child[0].classList.add('fa-pause');\n        Child[0].classList.remove('fa-play');\n\n        if (mediaRecorder.state !== 'inactive') {\n          recordingElements && recordingElements.start();\n        }\n      } else {\n        CONF.isPlaying = false;\n        videoCanvas.pause();\n\n        if (mediaRecorder.state === 'recording') {\n          mediaRecorder.pause();\n        }\n\n        Child[0].classList.add('fa-play');\n        Child[0].classList.remove('fa-pause');\n\n        if (mediaRecorder.state !== 'inactive') {\n          recordingElements && recordingElements.stop();\n        }\n      }\n    }\n  }\n\n  function onMuteUnmute() {\n    if (CONF.isVideoOn) {\n      var videoCanvas = CONF.DOC.querySelector('video');\n      var muteUnmuteButton = CONF.DOC.querySelector('#muteUnmute');\n      videoCanvas.muted = !videoCanvas.muted;\n      var Child = muteUnmuteButton.childNodes;\n      muteUnmuteButton.className = videoCanvas.muted ? 'off' : 'on';\n      muteUnmuteButton.title = videoCanvas.muted ? 'Voice Recording Stopped' : 'Voice Recording';\n\n      if (videoCanvas.muted) {\n        Child[0].classList.add('fa-microphone-slash');\n        Child[0].classList.remove('fa-microphone');\n      } else {\n        Child[0].classList.add('fa-microphone');\n        Child[0].classList.remove('fa-microphone-slash');\n      }\n    }\n  }\n\n  function onPipMode() {\n    var videoCanvas = CONF.DOC.getElementById('awesome-video-canvas');\n    var pipButton = CONF.DOC.getElementById('onPipMode');\n\n    if ('pictureInPictureEnabled' in document) {\n      pipButton.addEventListener('click', function () {\n        if (CONF.DOC.pictureInPictureElement) {\n          pipButton.className = 'off';\n          CONF.DOC.exitPictureInPicture()[\"catch\"](function (error) {// Error handling\n          });\n        } else {\n          pipButton.className = 'on';\n          videoCanvas.requestPictureInPicture()[\"catch\"](function (error) {// Error handling\n          });\n        }\n      });\n    }\n  }\n  /**-------- Create User Interface -------*/\n\n\n  var BUTTON_CTRLS = [{\n    func: onTurnOnOff,\n    buttonId: 'videoOnOff',\n    buttonClasses: ['off'],\n    iconDefaultClass: 'fa-power-off',\n    title: 'Power On'\n  }, {\n    func: null,\n    buttonId: 'recordStop',\n    buttonClasses: ['off'],\n    iconDefaultClass: 'fa-video-camera',\n    title: 'Start Video Recording'\n  }, {\n    func: null,\n    buttonId: 'playPause',\n    buttonClasses: ['on'],\n    iconDefaultClass: 'fa-pause',\n    title: 'Pause Video'\n  }, {\n    func: onMuteUnmute,\n    buttonId: 'muteUnmute',\n    buttonClasses: ['on'],\n    iconDefaultClass: 'fa-microphone',\n    title: 'Voice Recording'\n  }, {\n    func: onPipMode,\n    buttonId: 'onPipMode',\n    buttonClasses: ['off'],\n    iconDefaultClass: 'fa-picture-o',\n    title: 'Pip Mode Off'\n  }];\n  /**----- Application Initialize ------*/\n\n  function initializePlayer() {\n    return {\n      PlayerName: 'My Awesome Player',\n      init: function init(el) {\n        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n        var showStatus = options.showStatus,\n            statusEl = options.statusEl,\n            enableCaptureImage = options.enableCaptureImage; // Bootstrap Awesome Player::\n        // Get the dom element where we have to render the video UI\n        // Here will get the options object for default configurations\n\n        var domElement = CONF.DOC.querySelector(el);\n        var VideoUI = createVideoPlayer(BUTTON_CTRLS, enableCaptureImage);\n        domElement.appendChild(VideoUI);\n        domElement.appendChild(createVideoBox());\n\n        if (enableCaptureImage) {\n          var ImageReceiverBox = createImageBox();\n          domElement.appendChild(ImageReceiverBox);\n        }\n\n        if (showStatus && statusEl) {\n          var domStatusElement = CONF.DOC.querySelector(statusEl); //domStatusElement.prepend(renderRecordingStatus());\n\n          domStatusElement.prepend(createStatusBar());\n        }\n      }\n    };\n  }\n\n  window.AwesomePlayer = initializePlayer();\n})(window);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });