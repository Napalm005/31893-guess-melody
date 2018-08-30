import {INITIAL_GAME} from './game-data.js';
import failTime from "./fail-time";
import selectSlide from "./select-slide";
import failTries from "./fail-tries";
import resultSuccess from "./result-success";
import welcome from "./welcome";


export const newGameState = Object.assign({}, INITIAL_GAME);

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

export const setTimer = (time, cb) => {
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
      cb();
    }
    return newGameState;
  };
  updateClock();
  let timerId = setInterval(updateClock, 1000);
};

export const resetGame = (currentState, initState) => {
  currentState.scores = initState.scores;
  currentState.lives = initState.lives;
  currentState.time = initState.time;
};

export const isLoose = (currentState) => {
  if (currentState.lives === 0) {
    selectSlide(failTries);
    document.querySelector(`.result__replay`).addEventListener(`click`, () => {
      resetGame(newGameState, INITIAL_GAME);
      selectSlide(welcome);
    });
  } else if (currentState.time === 0) {
    selectSlide(failTime);
    document.querySelector(`.result__replay`).addEventListener(`click`, () => {
      resetGame(newGameState, INITIAL_GAME);
      selectSlide(welcome);
    });
  } else if (currentState.level > 5) {
    selectSlide(resultSuccess);
    document.querySelector(`.result__replay`).addEventListener(`click`, () => {
      resetGame(newGameState, INITIAL_GAME);
      selectSlide(welcome);
    });
  }

};
