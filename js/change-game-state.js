import {INITIAL_GAME} from './game-data.js';
import {changeScreen} from "./util";
import newGame from "./new-game";
import {screen} from "./screen";
import {levels, resultModel} from "./game-data";
import welcome from "./welcome";
import ResultFailView from "./result-fail-view";
import ResultSuccessView from "./result-success-view";


export let gameState = Object.assign({}, INITIAL_GAME);

export const die = (state) => {
  if (typeof state.lives !== `number`) {
    throw new Error(`Lives should be of type number`);
  }
  if (state.lives < 0) {
    throw new Error(`Lives should not be negative value`);
  }
  const lives = state.lives--;
  return Object.assign({}, state, {
    lives
  });
};

export const nextLevel = (state) => {
  if (typeof state.level !== `number`) {
    throw new Error(`Lives should be of type number`);
  }
  if (state.level < 0) {
    throw new Error(`Lives should not be negative value`);
  }
  const level = state.level++;
  return Object.assign({}, state, {
    level
  });
};

let timerId;
let minutes;
let seconds;
const timeMins = document.querySelector(`.timer__mins`);
const timeSecs = document.querySelector(`.timer__secs`);
const updateClock = (time) => {
  minutes = (`0` + parseInt(time / 60 / 1000, 10)).slice(-2);
  seconds = (`0` + parseInt(time / 1000 % 60, 10)).slice(-2);

  timeMins.textContent = minutes;
  timeSecs.textContent = seconds;

  time -= 1000;
  gameState.time = time;
  if (time === 0) {
    clearInterval(timerId);

    const failTime = new ResultFailView(resultModel.failTime);
    failTime.onReStartGameButtonClick = () => {
      resetGame();
      changeScreen(welcome);
    };
    changeScreen(failTime.element);
  }
  return gameState;
};

export const setTimer = (time) => {
  if (typeof time !== `number`) {
    throw new Error(`Time should be of type number`);
  }
  if (time < 0) {
    throw new Error(`Time should not be negative value`);
  }
  updateClock(time);
  timerId = setInterval(updateClock, 1000);
};

export const pausePlaying = () => {
  for (let audio of document.querySelectorAll(`audio`)) {
    audio.pause();
  }
};

export const resetGame = () => {
  pausePlaying();
  gameState = Object.assign({}, INITIAL_GAME);
};

export const checkGameContinue = (currentState) => {
  if (currentState.lives === 0) {
    const failTries = new ResultFailView(resultModel.failTries);
    failTries.onReStartGameButtonClick = () => {
      resetGame();
      changeScreen(welcome);
    };
    changeScreen(failTries.element);
  } else if (currentState.level > 4) {
    const resultSuccess = new ResultSuccessView(resultModel.success);
    resultSuccess.onReStartGameButtonClick = () => {
      resetGame();
      changeScreen(welcome);
    };
    changeScreen(resultSuccess.element);
  } else {
    screen(gameState, levels);
    setTimer(gameState.time);
    newGame();
  }
};

export const checkResponse = (correct, time) => {
  if (correct) {
    gameState.responses.push({result: true, time});
  } else {
    gameState.responses.push({result: false, time});
    die(gameState);
  }
};
