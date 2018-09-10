import {INITIAL_GAME, levels, resultModel} from './game-data.js';
import {changeScreen} from "./util";
import {screen} from "./screen";
import ResultFailView from "./result-fail-view";
import ResultSuccessView from "./result-success-view";
import WelcomeView from "./welcome-view";

export let gameState = Object.assign({}, INITIAL_GAME);

export const die = (state) => {
  if (typeof state.lives !== `number`) {
    throw new Error(`Lives should be of type number`);
  }
  if (state.lives < 0) {
    throw new Error(`Lives should not be negative value`);
  }
  const lives = state.lives - 1;
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
  const level = state.level + 1;
  return Object.assign({}, state, {
    level
  });
};

export const setTimer = (time) => {
  if (typeof time !== `number`) {
    throw new Error(`Time should be of type number`);
  }
  if (time < 0) {
    throw new Error(`Time should not be negative value`);
  }

  const timeMins = document.querySelector(`.timer__mins`);
  const timeSecs = document.querySelector(`.timer__secs`);
  let timerId;
  let minutes;
  let seconds;

  const updateClock = () => {
    minutes = (`0` + parseInt(time / 60 / 1000, 10)).slice(-2);
    seconds = (`0` + parseInt(time / 1000 % 60, 10)).slice(-2);

    timeMins.textContent = minutes;
    timeSecs.textContent = seconds;

    time -= 1000;
    gameState = Object.assign({}, gameState, {
      time
    });
    if (time === 0) {
      clearInterval(timerId);

      const failTime = new ResultFailView(resultModel.failTime, gameState);
      failTime.onReStartGameButtonClick = () => {
        resetGame();
      };
      changeScreen(failTime.element);
    }
    return gameState;
  };
  updateClock();
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
  const welcomeView = new WelcomeView();
  welcomeView.onStartGameButtonClick = () => {
    setTimer(INITIAL_GAME.time);
    screen(INITIAL_GAME, levels);
  };
  changeScreen(welcomeView.element);
};

export const checkGameContinue = (currentState) => {
  if (currentState.lives === 1) {
    const failTries = new ResultFailView(resultModel.failTries, gameState);
    failTries.onReStartGameButtonClick = () => {
      resetGame();
    };
    changeScreen(failTries.element);
  } else if (currentState.level > 4) {
    const resultSuccess = new ResultSuccessView(resultModel.success, gameState);
    resultSuccess.onReStartGameButtonClick = () => {
      resetGame();
    };
    changeScreen(resultSuccess.element);
  } else {
    setTimer(currentState.time);
    screen(currentState, levels);
  }
};

export const checkResponse = (correct, time) => {
  if (correct) {
    gameState.responses.push({result: true, time});
  } else {
    gameState.responses.push({result: false, time});
    gameState = die(gameState);
  }
};
