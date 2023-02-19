import './style.css';
import './modules/Send.js';
import getResponse from './modules/GetResponse.js';

const Display = document.querySelector('.score-update');
const GetData = document.getElementById('refresh-btn');

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