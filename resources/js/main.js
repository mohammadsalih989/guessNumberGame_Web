"use strict";
// ⬆ to use strict mode

// ---- HTML elements variables ---- //
// again button in the top left
const againBtn = document.querySelector(".again");

// the question mark in the center
const winAndLoseText = document.querySelector(".winAndLoseText");

// the guess input the the bottom left
const theInput = document.querySelector(".theInput");
// the check butoon the the bottom left
const checkBtn = document.querySelector(".check");

// the first one of the three text in the bottom right used for displaying if the guess is right, too high, too low
const messigeText = document.querySelector(".messige");
// the second one of the three text in the bottom right used for displaying your corrent score
const scoreText = document.querySelector(".score");
// the therd one of the three text in the bottom right used for displaying your highest score
const highscoreText = document.querySelector(".highscore");
// ------------------------------------ //

// ---- javascript variables ---- //
// ⬇ used for makeing a random number
let theUnknownNumber = Math.trunc(Math.random() * 21);
// ⬇ used for makeing the base score
let score = 20;
// ⬇ used for storeing the highest score
let highscore = 0;
// ------------------------------------ //

// ---- global functions ---- //
// the game play logic
const checkingLogic = function (input) {
  if (input === theUnknownNumber) {
    messigeText.textContent = "🎉 the correct number";

    if (score > highscore) {
      highscore = score;
      highscoreText.textContent = `🥇HighScore: ${highscore}`;
    }

    winAndLoseText.textContent = `🏆 you win [${theUnknownNumber}]`;
    document.body.style.background = "#32CD32";
  } else if (score === 1) {
    scoreText.textContent = `💯 score: ${0}`;

    winAndLoseText.textContent = `😭 you lose [${theUnknownNumber}]`;
    document.body.style.background = "#C21807";
  } else if (input - theUnknownNumber >= 1 && input - theUnknownNumber <= 4) {
    score -= 1;
    scoreText.textContent = `💯 score: ${score}`;

    messigeText.textContent = "📈 high";
  } else if (input - theUnknownNumber >= 5) {
    score -= 1;
    scoreText.textContent = `💯 score: ${score}`;

    messigeText.textContent = "📈 too high";
  } else if (input - theUnknownNumber <= -1 && input - theUnknownNumber >= -4) {
    score -= 1;
    scoreText.textContent = `💯 score: ${score}`;

    messigeText.textContent = "📉 low";
  } else if (input - theUnknownNumber <= -5) {
    score -= 1;
    scoreText.textContent = `💯 score: ${score}`;

    messigeText.textContent = "📉 too low";
  }
};

// a logic to play the game again
const retakengTheGameLogic = function () {
  theUnknownNumber = Math.trunc(Math.random() * 21);
  score = 20;

  scoreText.textContent = `💯 score: ${score}`;
  winAndLoseText.textContent = `?`;

  document.body.style.background = "#222";

  theInput.value = "";
};
// ------------------------------------ //

// ---- functions for the event listeners---- //
// ⬇ used for checking the number to see if it's equal to the unknownNumber or not
const checkFunction = function (e) {
  // to not let the form tag reload the page on submit
  e.preventDefault();

  checkingLogic(Number(theInput.value));
};

// ⬇ used to play the game again without loseing your highest score
const againFunction = function () {
  retakengTheGameLogic();
};
// ------------------------------------ //

// ---- functions for calling or torun the event listeners ---- //
function eventsCaller() {
  // ---- event listeners ---- //
  // check event listener
  checkBtn.addEventListener("click", checkFunction);
  // retrying thegame event listener
  againBtn.addEventListener("click", againFunction);
}
eventsCaller();
// ------------------------------------ //

// ---- global js code ---- //
scoreText.textContent = `💯 score: ${score}`;
highscoreText.textContent = `🥇HighScore: ${highscore}`;
