const Score = document.querySelector('#Score');
const Name = document.querySelector('#Name');
const Submit = document.querySelector('#send');

const sendData = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BSY5VexV1P3xkitZrGsn/scores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: Name.value,
      score: Score.value,
    }),
  });
  const data = await response.json();
  return data;
};

Submit.addEventListener('click', () => {
  sendData();
  Name.value = '';
  Score.value = '';
});
