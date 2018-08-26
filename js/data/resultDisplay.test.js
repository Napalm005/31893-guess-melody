import {assert} from 'chai';
import {resultDisplay} from '../resultDisplay.js';

describe(`resultDisplay`, () => {
  it(`should return negative response because time end`, () => {
    assert.equal(resultDisplay([1, 2, 3, 4, 5], {
      response: [],
      lives: 3,
      scores: 0,
      timer: 0
    }), `Время вышло! Вы не успели отгадать все мелодии`);
  });
  it(`should return negative response because lives end`, () => {
    assert.equal(resultDisplay([1, 2, 3, 4, 5], {
      response: [],
      lives: 0,
      scores: 0,
      timer: 1000 * 60 * 5
    }), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });
  it(`should return positive response`, () => {
    assert.equal(resultDisplay([1, 2, 3, 4, 5, 5, 6, 8, 9], {
      response: [],
      lives: 2,
      scores: 10,
      timer: 1000 * 60 * 2
    }), `Вы заняли 1 место из 10 игроков. Это лучше, чем у 90% игроков`);
    assert.equal(resultDisplay([1, 2, 3, 4, 5], {
      response: [],
      lives: 2,
      scores: 0,
      timer: 1000 * 60 * 2
    }), `Вы заняли 6 место из 6 игроков. Это лучше, чем у 0% игроков`);
    assert.equal(resultDisplay([1, 2, 4, 6, 1, 4, 8, 1, 2], {
      response: [],
      lives: 2,
      scores: 7,
      timer: 1000 * 60 * 2
    }), `Вы заняли 2 место из 10 игроков. Это лучше, чем у 80% игроков`);
    assert.equal(resultDisplay([4, 5, 8, 11], {
      response: [],
      lives: 2,
      scores: 10,
      timer: 1000 * 60 * 2
    }), `Вы заняли 2 место из 5 игроков. Это лучше, чем у 60% игроков`);
    assert.equal(resultDisplay([], {
      response: [],
      lives: 2,
      scores: 10,
      timer: 1000 * 60 * 2
    }), `Вы заняли 1 место из 1 игроков. Это лучше, чем у 0% игроков`);
  });
});
