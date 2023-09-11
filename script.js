'use strict';

const playerScoreEl1 = document.getElementById('score--0');
const playerScoreEl2 = document.getElementById('score--1');
const currentScoreEl1 = document.getElementById('current--0');
const currentScoreEl2 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const rollButton = document.querySelector('.btn.btn--roll');
const holdButton = document.querySelector('.btn.btn--hold');
const section0 = document.querySelector('.player--0');
const section1 = document.querySelector('.player--1');

let currentScore1 = 0;
let currentScore2 = 0;
let score1 = 0;
let score2 = 0;
let diceValue = 0;

let firstplayer = true;

//starter
newGame();

function newGame(params) {
  playerScoreEl1.textContent = 0;
  playerScoreEl2.textContent = 0;
  diceEl.classList.add('hidden');
}

function rollDice(params) {
  diceValue = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  diceEl.src = `dice-${diceValue}.png`;
  diceEl.classList.remove('hidden');

  if (diceValue === 1) {
    currentScore1 = 0;
    currentScore2 = 0;
    currentScoreEl1.textContent = currentScore1;
    currentScoreEl2.textContent = currentScore2;
  } else {
    currentScore1 = diceValue;
    currentScore2 = diceValue;
    currentScoreEl1.textContent = currentScore1;
    currentScoreEl2.textContent = currentScore2;
  }
}

function hold(params) {
  if (firstplayer) {
    score1 = currentScore1;
    playerScoreEl1.textContent = score1;
    section0.classList.remove('player--active');
    section1.classList.add('player--active');
  } else {
    score2 = currentScore2;
    playerScoreEl2.textContent = score2;
    section1.classList.remove('player--active');
    section0.classList.add('player--active');
  }
  firstplayer = !firstplayer;
}
rollButton.addEventListener('click', rollDice);
holdButton.addEventListener('click', hold);
