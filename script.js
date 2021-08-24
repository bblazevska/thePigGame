'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');

const currentSc0EL = document.querySelector('#current--0');
const currentSc1EL = document.querySelector('#current--1');

let currentScore = 0;

//Initial game state
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click', () => {
   // generating random dice roll
   const dice = Math.trunc(Math.random() * 6) + 1;

   // display dice
   diceEl.classList.remove('hidden');
   diceEl.src = `dice-${dice}.png`;

   // checked for rolled 1
   if (dice !== 1) {
      // add dice to current score
      currentScore += dice;
      currentSc0EL.textContent = currentScore;
   } else {
      // switch to next player
      currentScore = 0;
      currentSc0EL.textContent = currentScore;

   }
});