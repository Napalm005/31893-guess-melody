import {levels} from "./game-data";

export const die = (state) => {
  if (typeof state.lives !== `number`) {
    throw new Error(`Lives should be of type number`);
  }
  if (state.lives < 0) {
    throw new Error(`Lives should not be negative value`);
  }
  const lives = state.lives - 1;
  const fastResponses = state.fastResponses - 1;
  return Object.assign({}, state, {
    lives, fastResponses
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

export const updateClock = (state) => {
  let time = state.time - 1000;
  return Object.assign({}, state, {
    time
  });
};

export const getLevel = (state) => levels[state.level];

export const makeFastResponse = (state) => {
  let fastResponses = state.fastResponses + 1;
  return Object.assign({}, state, {
    fastResponses
  });
};
