'use strict';

const playerScoreEl1 = document.getElementById('score--0');
const playerScoreEl2 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const rollButton = document.querySelector('.btn.btn--roll');

let currentScore1 = 0;
let currentScore2 = 0;
let score1 = 0;
let score2 = 0;
let diceValue = 0;

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
}

rollButton.addEventListener('click', rollDice);
