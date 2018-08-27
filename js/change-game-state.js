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

let timerId;
export const setTimer = (time, cb) => {
  if (typeof time !== `number`) {
    throw new Error(`Time should be of type number`);
  }
  if (time < 0) {
    throw new Error(`Time should not be negative value`);
  }

  clearInterval(timerId);

  let minutes;
  let seconds;
  let timeMins = document.querySelector(`.timer__mins`);
  let timeSecs = document.querySelector(`.timer__secs`);
  let timer = time;
  timerId = setInterval(function () {
    minutes = parseInt(timer / 60 / 1000, 10);
    seconds = parseInt(timer / 1000 % 60, 10);

    minutes = minutes < 10 ? `0` + minutes : minutes;
    seconds = seconds < 10 ? `0` + seconds : seconds;

    timeMins.textContent = minutes;
    timeSecs.textContent = seconds;

    timer -= 1000;
    newGameState.time = timer;
    if (timer === 0) {
      cb(timerId);
    }
    return newGameState;
  }, 1000);
};
