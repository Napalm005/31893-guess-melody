import {assert} from 'chai';
import {resultDisplay} from '../result-display.js';

describe(`resultDisplay`, () => {
  it(`should return negative response because time end`, () => {
    assert.equal(resultDisplay([1, 2, 3, 4, 5], {
      responses: [],
      lives: 3,
      scores: 0,
      timer: 0
    }), `Время вышло! Вы не успели отгадать все мелодии`);
  });
  it(`should return negative response because lives end`, () => {
    assert.equal(resultDisplay([1, 2, 3, 4, 5], {
      responses: [],
      lives: 0,
      scores: 0,
      timer: 1000 * 60 * 5
    }), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });
  it(`should return positive response`, () => {
    assert.equal(resultDisplay([1, 2, 3, 4, 5, 5, 6, 8, 9], {
      responses: [],
      lives: 2,
      scores: 10,
      timer: 1000 * 60 * 2
    }), `Вы заняли 1 место из 10 игроков. Это лучше, чем у 90% игроков`);
    assert.equal(resultDisplay([1, 2, 3, 4, 5], {
      responses: [],
      lives: 2,
      scores: 0,
      timer: 1000 * 60 * 2
    }), `Вы заняли 6 место из 6 игроков. Это лучше, чем у 0% игроков`);
    assert.equal(resultDisplay([1, 2, 4, 6, 1, 4, 8, 1, 2], {
      responses: [],
      lives: 2,
      scores: 7,
      timer: 1000 * 60 * 2
    }), `Вы заняли 2 место из 10 игроков. Это лучше, чем у 80% игроков`);
    assert.equal(resultDisplay([4, 5, 8, 11], {
      responses: [],
      lives: 2,
      scores: 10,
      timer: 1000 * 60 * 2
    }), `Вы заняли 2 место из 5 игроков. Это лучше, чем у 60% игроков`);
    assert.equal(resultDisplay([], {
      responses: [],
      lives: 2,
      scores: 10,
      timer: 1000 * 60 * 2
    }), `Вы заняли 1 место из 1 игрока. Это лучше, чем у 0% игроков`);
    assert.equal(resultDisplay([1, 2, 4, 6, 1, 4, 8, 1, 2, 1], {
      responses: [],
      lives: 2,
      scores: 10,
      timer: 1000 * 60 * 2
    }), `Вы заняли 1 место из 11 игроков. Это лучше, чем у 91% игроков`);
    assert.equal(resultDisplay([1, 2, 4, 6, 1, 4, 8, 1, 2, 1, 1, 2, 4, 6, 1, 4, 8, 1, 2, 1], {
      responses: [],
      lives: 2,
      scores: 10,
      timer: 1000 * 60 * 2
    }), `Вы заняли 1 место из 21 игрока. Это лучше, чем у 95% игроков`);
  });
});
