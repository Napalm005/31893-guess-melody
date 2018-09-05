import {INITIAL_GAME} from './game-data.js';
import selectSlide from "./select-slide";
import resultSuccess from "./result-success";
import newGame from "./new-game";
import {screen} from "./screen";
import {levels, failModel} from "./game-data";
import welcome from "./welcome";
import FailView from "./fail-view";


export let newGameState = Object.assign({}, INITIAL_GAME, {fastResponses: 0});

export const changeLives = (lives) => {
  if (typeof lives !== `number`) {
    throw new Error(`Lives should be of type number`);
  }
  if (lives < 0) {
    throw new Error(`Lives should not be negative value`);
  }
  newGameState.lives = lives;
  return newGameState;
};

export const changeLevel = (state) => {
  if (typeof state.level !== `number`) {
    throw new Error(`Lives should be of type number`);
  }
  if (state.level < 0) {
    throw new Error(`Lives should not be negative value`);
  }
  state.level++;
  return newGameState;
};

export let timerId;
export const setTimer = (time) => {
  if (typeof time !== `number`) {
    throw new Error(`Time should be of type number`);
  }
  if (time < 0) {
    throw new Error(`Time should not be negative value`);
  }

  let minutes;
  let seconds;
  let timeMins = document.querySelector(`.timer__mins`);
  let timeSecs = document.querySelector(`.timer__secs`);
  let timer = time;

  let updateClock = () => {
    minutes = (`0` + parseInt(timer / 60 / 1000, 10)).slice(-2);
    seconds = (`0` + parseInt(timer / 1000 % 60, 10)).slice(-2);

    timeMins.textContent = minutes;
    timeSecs.textContent = seconds;

    timer -= 1000;
    newGameState.time = timer;
    if (timer === 0) {
      clearInterval(timerId);

      const failTime = new FailView(failModel.failTime);
      failTime.onReStartGameButtonClick = () => {
        resetGame();
        selectSlide(welcome);
      };
      selectSlide(failTime.element);
    }
    return newGameState;
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
  newGameState = Object.assign({}, INITIAL_GAME);
};

export const checkGameContinue = (currentState) => {
  if (currentState.lives === 0) {
    const failTries = new FailView(failModel.failTries);
    failTries.onReStartGameButtonClick = () => {
      resetGame();
      selectSlide(welcome);
    };
    selectSlide(failTries.element);
  } else if (currentState.level > 4) {
    selectSlide(resultSuccess());
  } else {
    screen(newGameState, levels);
    setTimer(newGameState.time);
    newGame();
  }
};

export const checkResponse = (correct, time) => {
  if (correct) {
    newGameState.responses.push({result: true, time});
  } else {
    newGameState.responses.push({result: false, time});
    newGameState.lives -= 1;
  }
};
