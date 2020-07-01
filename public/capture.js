const video = document.querySelector('video');
const downloadLink = document.getElementById('download');
const stopButton = document.getElementById('stop');
const recordButton = document.getElementById('record');
let shouldStop = false;
let stopped = false;
const videoType = 'video/webm';

let recordedChunks = [];

var types = [
  'video/webm',
  'audio/webm',
  'video/webm;codecs=vp8',
  'video/webm;codecs=daala',
  'video/webm;codecs=h264',
  'audio/webm;codecs=opus',
  'video/mpeg',
  'video/mp4',
];

for (var i in types) {
  console.log(
    'Is ' +
      types[i] +
      ' supported? ' +
      (MediaRecorder.isTypeSupported(types[i]) ? 'Maybe!' : 'Nope :(')
  );
}

var handleSuccess = function (stream) {
  video.srcObject = stream;
  video.play();
  const options = { mimeType: videoType };
  const mediaRecorder = new MediaRecorder(stream, options);
  mediaRecorder.ondataavailable = (e) => {
    if (e.data && e.data.size > 0) {
      recordedChunks.push(e.data);
    }
    if (shouldStop === true && stopped === false) {
      mediaRecorder.stop();
      stopped = true;
    }
  };

  mediaRecorder.addEventListener('stop', function () {
    const blob = new Blob(recordedChunks, { type: videoType });
    const videoURL = window.URL.createObjectURL(blob);
    downloadLink.href = videoURL;
    downloadLink.target = '_blank';
    downloadLink.download = 'acetest.mp4';
  });

  recordButton.addEventListener('click', () => {
    // start recorder with 10ms buffer
    recordedChunks = [];
    mediaRecorder.start(10);
  });

  stopButton.addEventListener('click', function () {
    shouldStop = true;
    // mediaRecorder.stop();
  });
};

navigator.mediaDevices
  .getUserMedia({ audio: true, video: true })
  .then(handleSuccess);
