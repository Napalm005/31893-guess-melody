export const INITIAL_GAME = Object.freeze({
  responses: [],
  lives: 3,
  time: 1000 * 60 * 5,
  level: 0,
  fastResponses: 0
});

export const resultModel = {
  failTime: {
    title: `Увы и ах!`
  },
  failTries: {
    title: `Какая жалость!`
  },
  success: {
    title: `Вы настоящий меломан!`
  }
};

export const TIME_LINE_RADIUS = 370;
