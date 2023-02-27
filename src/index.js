import './style.css';
import getResponse from './modules/getResponse.js';

const Display = document.querySelector('.score-update');
const GetData = document.getElementById('refresh-btn');
const alert = document.querySelector('alert');

GetData.addEventListener('click', async () => {
  const scoresUpdate = await getResponse();
  Display.innerHTML = '';
  scoresUpdate.sort((High, Low) => Low.score - High.score).forEach((scores) => {
    Display.innerHTML += `
    <div class="name-score">
        <p>${scores.user}: </p>
        <p>${scores.score}</p>
    </div>
    `;
  });
});

window.onload = (async () => {
  const scoresUpdate = await getResponse();
  if (getResponse) {
    alert.innerText = '';
  }
  scoresUpdate.sort((High, Low) => Low.score - High.score).forEach((scores) => {
    Display.innerHTML += `
    <div class="name-score">
        <p>${scores.user}: </p>
        <p>${scores.score}</p>
    </div>
    `;
  });
});