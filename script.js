document.addEventListener('DOMContentLoaded', function () {
  const encodeForm = document.getElementById('encodeForm');
  const decodeForm = document.getElementById('decodeForm');

  encodeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    fetch('/encode', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (response.ok) {
          alert('Video encoded successfully!');
        } else {
          alert('Failed to encode video.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while encoding the video.');
      });
  });

  decodeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    fetch('/decode', {
      method: 'POST',
      body: formData
    })
      .then(response => response.text())
      .then(decodedMessage => {
        document.getElementById('decodedMessage').innerText = decodedMessage;
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while decoding the video.');
      });
  });
});
