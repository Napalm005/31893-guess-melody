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
    lives,
    fastResponses
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
  const time = state.time - 1000;
  return Object.assign({}, state, {
    time
  });
};

export const makeFastResponse = (state) => {
  const fastResponses = state.fastResponses + 1;
  return Object.assign({}, state, {
    fastResponses
  });
};

export const setResponse = (state, response) => {
  const arr = [...state.responses];
  arr.push(response);
  return Object.assign({}, state, {responses: arr});
};
