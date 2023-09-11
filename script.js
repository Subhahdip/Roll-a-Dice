'use strict';

const playerScoreEl1 = document.getElementById('score--0');
const playerScoreEl2 = document.getElementById('score--1');
const currentScoreEl1 = document.getElementById('current--0');
const currentScoreEl2 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const rollButton = document.querySelector('.btn.btn--roll');
const holdButton = document.querySelector('.btn.btn--hold');
const newGameButton = document.querySelector('.btn.btn--new');
const section0 = document.querySelector('.player--0');
const section1 = document.querySelector('.player--1');

let currentScore1;
let currentScore2;
let score1;
let score2;
let diceValue;
let firstplayer;

//starter
newGame();

function newGame(params) {
  currentScore2 = 0;
  currentScore1 = 0;
  score1 = 90;
  score2 = 0;
  diceValue = 0;
  firstplayer = true;
  playerScoreEl1.textContent = score1;
  playerScoreEl2.textContent = score2;
  currentScoreEl1.textContent = currentScore1;
  currentScoreEl2.textContent = currentScore2;
  diceEl.classList.add('hidden');
  section1.classList.remove('player--active');
  section0.classList.add('player--active');
}

function rollDice(params) {
  diceValue = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  diceEl.src = `dice-${diceValue}.png`;
  diceEl.classList.remove('hidden');
  if (firstplayer) {
    if (diceValue === 1) {
      currentScore1 = 0;
      currentScore2 = 0;
      currentScoreEl1.textContent = currentScore1;
      currentScoreEl2.textContent = currentScore2;
      firstplayer = !firstplayer;
      section0.classList.remove('player--active');
      section1.classList.add('player--active');
    } else {
      currentScore1 += diceValue;
      //currentScore2 = diceValue;
      currentScoreEl1.textContent = currentScore1;
      //currentScoreEl2.textContent = currentScore2;
    }
  } else {
    if (diceValue === 1) {
      currentScore1 = 0;
      currentScore2 = 0;
      currentScoreEl1.textContent = currentScore1;
      currentScoreEl2.textContent = currentScore2;
      firstplayer = !firstplayer;
      section1.classList.remove('player--active');
      section0.classList.add('player--active');
    } else {
      //currentScore1 = diceValue;
      currentScore2 += diceValue;
      //currentScoreEl1.textContent = currentScore1;
      currentScoreEl2.textContent = currentScore2;
    }
  }
}

function hold(params) {
  if (firstplayer) {
    score1 += currentScore1;
    playerScoreEl1.textContent = score1;

    if (score1 >= 100) {
      section0.classList.add('player--winner');
      playerScoreEl1.textContent = `WINNER🎉🎊🎉`;
      newGameButton.style.backgroundColor = 'green';
      rollButton.disabled = true;
      holdButton.disabled = true;
      diceEl.classList.add('hidden');
    } else {
      section0.classList.remove('player--active');
      section1.classList.add('player--active');
      currentScore1 = 0;
      currentScore2 = 0;
      currentScoreEl1.textContent = currentScore1;
      currentScoreEl2.textContent = currentScore2;
    }
  } else {
    score2 += currentScore2;
    if (score2 >= 100) {
      section1.classList.add('player--winner');
      playerScoreEl2.textContent = `WINNER🎉🎊🎉`;
      newGameButton.style.backgroundColor = 'green';
      rollButton.disabled = true;
      holdButton.disabled = true;
      diceEl.classList.add('hidden');
    } else {
      playerScoreEl2.textContent = score2;
      section1.classList.remove('player--active');
      section0.classList.add('player--active');
      currentScore1 = 0;
      currentScore2 = 0;
      currentScoreEl1.textContent = currentScore1;
      currentScoreEl2.textContent = currentScore2;
    }
  }
  firstplayer = !firstplayer;
}
rollButton.addEventListener('click', rollDice);
holdButton.addEventListener('click', hold);
newGameButton.addEventListener('click', newGame);
