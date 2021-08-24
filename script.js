'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

const currentSc0EL = document.querySelector('#current--0');
const currentSc1EL = document.querySelector('#current--1');

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');



//Initial game state
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let scores, currentScore, activePlayer, playing;

const init = () => {
   scores = [0, 0];
   currentScore = 0;
   activePlayer = 0;
   playing = true;

   score0El.textContent = 0;
   score1El.textContent = 0;
   currentSc0EL.textContent = 0;
   currentSc1EL.textContent = 0;

   diceEl.classList.add('hidden');
   player1.classList.remove('player--winner');
   player2.classList.remove('player--winner');
   player1.classList.add('player--active');
   player2.classList.remove('player--active');
}

init();
const switchPlayer = () => {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};


btnRoll.addEventListener('click', () => {
  if (playing) {
    // generating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // checked for rolled 1
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;

      // if (player1.classList.contains('player--active')) {
      //    currentSc0EL.textContent = currentScore;
      // } else if (player2.classList.contains('player--active')) {
      //    currentSc1EL.textContent = currentScore;
      // }
    } else {
      // switch to next player

      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    //1. add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. check if player's score is >= 100;
    if (scores[activePlayer] >= 100) {
      //finish game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      //switch player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);