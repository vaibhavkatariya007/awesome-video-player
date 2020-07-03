// One time DOM Access
const Media = navigator.mediaDevices;
const Window = window;
const DOC = document;

// Initial configurations:
const isAccessDenied = false;
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
  isAccessDenied,
  isRecording,
  isPlaying,
  isVideoOn,
  shouldStop,
  stopped,
  videoType,
  filters,
};
