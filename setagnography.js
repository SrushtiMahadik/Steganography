const steg = require('steganographyjs');
const ffmpeg = require('fluent-ffmpeg');

function encodeVideo(videoPath, message) {
  // Split video into frames
  const framesDir = 'frames';
  ffmpeg(videoPath)
    .output(framesDir + '/frame-%04d.png')
    .on('end', () => {
      // Encode message into frames
      encodeMessageIntoFrames(framesDir, message);
    })
    .on('error', (err) => {
      console.error('Error:', err);
    })
    .run();
}

function encodeMessageIntoFrames(framesDir, message) {
  const frameFiles = fs.readdirSync(framesDir);
  for (const file of frameFiles) {
    const framePath = framesDir + '/' + file;
    const image = fs.readFileSync(framePath);
    const encodedImage = steg.encode(image, message);
    fs.writeFileSync(framePath, encodedImage);
  }
}

function decodeVideo(videoPath) {
  // Decode message from frames
  const framesDir = 'frames';
  const frameFiles = fs.readdirSync(framesDir);
  let decodedMessage = '';
  for (const file of frameFiles) {
    const framePath = framesDir + '/' + file;
    const image = fs.readFileSync(framePath);
    const decodedImage = steg.decode(image);
    decodedMessage += decodedImage;
  }
  return decodedMessage;
}

module.exports = { encodeVideo, decodeVideo };

