'use strict';

// make it clear it is a dom element
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');

const btnNewEl = document.querySelector('.btn--new');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');

// starting conditions
score0El.textContent = '0';
score1El.textContent = '0';
diceEl.classList.add('hidden');
let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  // state to keep track of whether game has ended
  playing = true;
  score0El.textContent = '0';
  score1El.textContent = '0';
  currentScore0El.textContent = '0';
  currentScore1El.textContent = '0';
  diceEl.classList.remove('hidden');

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player1El.classList.remove('player--active');
  player0El.classList.add('player--active');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Roll dice
btnRollEl.addEventListener('click', function () {
  if (playing) {
    // 1. Generate random dice number
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Set the dice image
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Update the round score if the rolled number was NOT a 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }

    // Else, switch player and reset score
    else {
      switchPlayer();
    }
  }
});

// Hold dice
btnHoldEl.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to the active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if score is >=100
    // Yes: Finish game
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    }
    // No: Switch to the next palyer
    else {
      switchPlayer();
    }
  }
});

// New game
btnNewEl.addEventListener('click', init);
