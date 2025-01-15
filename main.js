let score = 0;
let timeLeft = 10;
let timerInterval;

const circle = document.getElementById('circle');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const startButton = document.querySelector('.start-button');

function startGame() {
  score = 0;
  timeLeft = 10;
  scoreDisplay.textContent = score;
  timerDisplay.textContent = `Tempo restante: ${timeLeft} segundos`;
  startButton.classList.add('hidden');
  circle.classList.remove('hidden');
  moveCircle();
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  timeLeft--;
  timerDisplay.textContent = `Tempo restante: ${timeLeft} segundos`;

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    endGame();
  }
}

function moveCircle() {
  const maxX = window.innerWidth - 50;
  const maxY = window.innerHeight - 50;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  circle.style.left = `${randomX}px`;
  circle.style.top = `${randomY}px`;
}

function increaseScore() {
  score++;
  scoreDisplay.textContent = score;
  moveCircle();
}

function endGame() {
  circle.classList.add('hidden');
  startButton.classList.remove('hidden');
  timerDisplay.textContent = `Fim de jogo! Sua pontuação final foi: ${score}`;
}
