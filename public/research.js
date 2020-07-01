/** We can pass the constraints */
// const hdConstraints = {
//   //video: true,
//   video: { width: { min: 1280 }, height: { min: 720 } },
//   audio: false,
// };
// const vgaConstraints = {
//   //video: true,
//   video: { width: { exact: 640 }, height: { exact: 480 } },
//   audio: false,
// };

// Media.getUserMedia(vgaConstraints).then((stream) => {
//   console.log('STREAM::', stream);
//   video.srcObject = stream;

// });

// var handleSuccess = function (stream) {
//   const options = { mimeType: 'video/webm' };
//   const recordedChunks = [];
//   const mediaRecorder = new MediaRecorder(stream, options);

//   mediaRecorder.addEventListener('dataavailable', function (e) {
//     if (e.data.size > 0) {
//       recordedChunks.push(e.data);
//     }

//     if (shouldStop === true && stopped === false) {
//       mediaRecorder.stop();
//       stopped = true;
//     }
//   });

//   mediaRecorder.addEventListener('stop', function () {
//     downloadLink.href = URL.createObjectURL(new Blob(recordedChunks));
//     downloadLink.download = 'acetest.webm';
//   });

//   mediaRecorder.start();
// };

// navigator.mediaDevices
//   .getUserMedia({ audio: true, video: true })
//   .then(handleSuccess);
