import {assert} from 'chai';
import {resultDisplay} from '../result-display.js';

describe(`resultDisplay`, () => {
  it(`should return negative response because time end`, () => {
    assert.equal(resultDisplay([1, 2, 3, 4, 5], {
      responses: [],
      lives: 3,
      time: 0,
      level: 0,
      fastResponses: 0
    }), `Время вышло! Вы не успели отгадать все мелодии`);
  });
  it(`should return negative response because lives end`, () => {
    assert.equal(resultDisplay([1, 2, 3, 4, 5], {
      responses: [],
      lives: 0,
      time: 1000 * 60 * 2,
      level: 0,
      fastResponses: 0
    }), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });
  it(`should return positive response`, () => {
    assert.equal(resultDisplay([1, 2, 3, 4, 5, 5, 6, 8, 9], {
      responses: [
        {
          result: true,
          time: 40000
        },
        {
          result: true,
          time: 40000
        },
        {
          result: true,
          time: 40000
        },
        {
          result: true,
          time: 40000
        },
        {
          result: true,
          time: 40000
        },
        {
          result: true,
          time: 40000
        },
        {
          result: true,
          time: 40000
        },
        {
          result: true,
          time: 40000
        },
        {
          result: true,
          time: 40000
        },
        {
          result: true,
          time: 40000
        }
      ],
      lives: 2,
      time: 1000 * 60 * 2,
      level: 0,
      fastResponses: 0
    }), `Вы заняли 1 место из 10 игроков. Это лучше, чем у 90% игроков`);
    assert.equal(resultDisplay([2, 2, 3, 4, 5], {
      responses: [
        {
          result: true,
          time: 40000
        }
      ],
      lives: 2,
      time: 1000 * 60 * 2,
      level: 0,
      fastResponses: 0
    }), `Вы заняли 6 место из 6 игроков. Это лучше, чем у 0% игроков`);
    assert.equal(resultDisplay([1, 2, 4, 6, 1, 4, 8, 1, 2], {
      responses: [
        {
          result: true,
          time: 20000
        },
        {
          result: true,
          time: 20000
        },
        {
          result: true,
          time: 20000
        },
        {
          result: true,
          time: 40000
        }
      ],
      lives: 2,
      time: 1000 * 60 * 2,
      level: 0,
      fastResponses: 0
    }), `Вы заняли 2 место из 10 игроков. Это лучше, чем у 80% игроков`);
    assert.equal(resultDisplay([], {
      responses: [
        {
          result: true,
          time: 40000
        }
      ],
      lives: 2,
      scores: 10,
      time: 1000 * 60 * 2
    }), `Вы заняли 1 место из 1 игрока. Это лучше, чем у 0% игроков`);
    assert.equal(resultDisplay([1, 2, 4, 6, 1, 4, 8, 1, 2, 1], {
      responses: [
        {
          result: true,
          time: 20000
        },
        {
          result: true,
          time: 20000
        },
        {
          result: true,
          time: 20000
        },
        {
          result: true,
          time: 20000
        },
        {
          result: true,
          time: 20000
        },
        {
          result: true,
          time: 20000
        }
      ],
      lives: 2,
      scores: 10,
      time: 1000 * 60 * 2,
      fastResponses: 0
    }), `Вы заняли 1 место из 11 игроков. Это лучше, чем у 91% игроков`);
    assert.equal(resultDisplay([1, 2, 4, 6, 1, 4, 8, 1, 2, 1, 1, 2, 4, 6, 1, 4, 8, 1, 2, 1], {
      responses: [
        {
          result: true,
          time: 20000
        },
        {
          result: true,
          time: 20000
        },
        {
          result: true,
          time: 20000
        },
        {
          result: true,
          time: 20000
        },
        {
          result: true,
          time: 20000
        },
        {
          result: true,
          time: 20000
        }
      ],
      lives: 2,
      scores: 10,
      time: 1000 * 60 * 2,
      fastResponses: 0
    }), `Вы заняли 1 место из 21 игрока. Это лучше, чем у 95% игроков`);
  });
});
