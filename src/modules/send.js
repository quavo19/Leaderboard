const score = document.querySelector('#Score');
const names = document.querySelector('#Name');
const submit = document.querySelector('#send');

const sendData = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BSY5VexV1P3xkitZrGsn/scores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: names.value,
      score: score.value,
    }),
  });
  const data = await response.json();
  return data;
};

submit.addEventListener('click', (e) => {
  e.preventDefault();
  sendData();
  names.value = '';
  score.value = '';
});