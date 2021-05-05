"use strict";

// elements variables
const againBtn = document.querySelector(".again");

const winAndLoseText = document.querySelector(".winAndLoseText");

const theInput = document.querySelector(".theInput");
const checkBtn = document.querySelector(".check");

const messigeText = document.querySelector(".messige");
const scoreText = document.querySelector(".score");
const highscoreText = document.querySelector(".highscore");

// javascript variables
let theUnknownNumber = Math.trunc(Math.random() * 21);
let trys = 20;
let score = 20;
let highscore = 0;

// functions
// check function
const checkFunction = function (e) {
  // to net let the form tag reload the page
  e.preventDefault();

  // variables
  const theInputValue = Number(theInput.value);

  //logic
  if (theInputValue === theUnknownNumber) {
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
  } else if (
    theInputValue - theUnknownNumber >= 1 &&
    theInputValue - theUnknownNumber <= 4
  ) {
    score -= 1;
    scoreText.textContent = `💯 score: ${score}`;

    messigeText.textContent = "📈 high";
  } else if (theInputValue - theUnknownNumber >= 5) {
    score -= 1;
    scoreText.textContent = `💯 score: ${score}`;

    messigeText.textContent = "📈 too high";
  } else if (
    theInputValue - theUnknownNumber <= -1 &&
    theInputValue - theUnknownNumber >= -4
  ) {
    score -= 1;
    scoreText.textContent = `💯 score: ${score}`;

    messigeText.textContent = "📉 low";
  } else if (theInputValue - theUnknownNumber <= -5) {
    score -= 1;
    scoreText.textContent = `💯 score: ${score}`;

    messigeText.textContent = "📉 too low";
  }
};

// again function
const againFunction = function () {
  //logic
  theUnknownNumber = Math.trunc(Math.random() * 21);
  score = 20;

  scoreText.textContent = `💯 score: ${score}`;
  winAndLoseText.textContent = `?`;

  document.body.style.background = "#222";

  theInput.value = "";
  //
};

// events
function eventsCaller() {
  checkBtn.addEventListener("click", checkFunction);
  againBtn.addEventListener("click", againFunction);
}
eventsCaller();

//js code
scoreText.textContent = `💯 score: ${score}`;
highscoreText.textContent = `🥇HighScore: ${highscore}`;
