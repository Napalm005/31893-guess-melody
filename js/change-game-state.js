const INITIAL_GAME = Object.freeze({
  scores: 0,
  lives: 3,
  time: 1000 * 60 * 5
});

export const newGameState = Object.assign({}, INITIAL_GAME);

export const changelives = (lives) => {
  if (typeof lives !== `number`) {
    throw new Error(`Lives should be of type number`);
  }
  if (lives < 0) {
    throw new Error(`Lives should not be negative value`);
  }
  newGameState.lives = lives;
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
