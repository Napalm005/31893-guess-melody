import {assert} from 'chai';
import {resultDisplay} from '../result-display.js';

describe(`resultDisplay`, () => {
  it(`should return negative response because time end`, () => {
    assert.equal(resultDisplay({
      responses: [],
      lives: 3,
      time: 0,
      level: 0,
      fastResponses: 0
    }, [1, 2, 3, 4, 5]), `Время вышло! Вы не успели отгадать все мелодии`);
  });
  it(`should return negative response because lives end`, () => {
    assert.equal(resultDisplay({
      responses: [],
      lives: 0,
      time: 1000 * 60 * 2,
      level: 0,
      fastResponses: 0
    }, [1, 2, 3, 4, 5]), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });
  it(`should return positive response`, () => {
    assert.equal(resultDisplay({
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
    }, [{scores: 1}, {scores: 2}, {scores: 3}, {scores: 4}, {scores: 5}, {scores: 5}, {scores: 6}, {scores: 8}, {scores: 9}]), `Вы заняли 1 место из 10 игроков. Это лучше, чем у 90% игроков`);
    assert.equal(resultDisplay({
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
    }, [{scores: 2}, {scores: 2}, {scores: 3}, {scores: 4}, {scores: 5}]), `Вы заняли 6 место из 6 игроков. Это лучше, чем у 0% игроков`);
    assert.equal(resultDisplay({
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
    }, [{scores: 1}, {scores: 2}, {scores: 4}, {scores: 6}, {scores: 1}, {scores: 4}, {scores: 8}, {scores: 1}, {scores: 2}]), `Вы заняли 2 место из 10 игроков. Это лучше, чем у 80% игроков`);
    assert.equal(resultDisplay({
      responses: [
        {
          result: true,
          time: 40000
        }
      ],
      lives: 2,
      scores: 10,
      time: 1000 * 60 * 2
    }, []), `Вы заняли 1 место из 1 игрока. Это лучше, чем у 0% игроков`);
    assert.equal(resultDisplay({
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
    }, [{scores: 1}, {scores: 2}, {scores: 4}, {scores: 6}, {scores: 1}, {scores: 4}, {scores: 8}, {scores: 1}, {scores: 2}, {scores: 1}]), `Вы заняли 1 место из 11 игроков. Это лучше, чем у 91% игроков`);
    assert.equal(resultDisplay({
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
    }, [{scores: 1}, {scores: 2}, {scores: 4}, {scores: 6}, {scores: 1}, {scores: 4}, {scores: 8}, {scores: 1}, {scores: 2}, {scores: 1}, {scores: 1}, {scores: 2}, {scores: 4}, {scores: 6}, {scores: 1}, {scores: 4}, {scores: 8}, {scores: 1}, {scores: 2}, {scores: 1}]), `Вы заняли 1 место из 21 игрока. Это лучше, чем у 95% игроков`);
  });
});
