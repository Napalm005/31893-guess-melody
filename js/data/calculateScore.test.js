import {assert} from 'chai';
import {calculateScore, userState} from '../calculateScore.js';

describe(`Game results`, () => {
  it(`should return -1 when responses quantity less 10`, () => {
    assert.equal(calculateScore([
      {
        result: true,
        time: 20
      },
      {
        result: true,
        time: 20
      },
      {
        result: true,
        time: 20
      },
    ], userState.lives), -1);
    assert.equal(calculateScore([], userState.lives), -1);
  });
  it(`should return 10 when right not fast responses quantity equal 10`, () => {
    assert.equal(calculateScore([
      {
        result: true,
        time: 20
      },
      {
        result: true,
        time: 20
      },
      {
        result: true,
        time: 20
      },
      {
        result: true,
        time: 20
      },
      {
        result: true,
        time: 20
      },
      {
        result: true,
        time: 20
      },
      {
        result: true,
        time: 20
      },
      {
        result: true,
        time: 20
      },
      {
        result: true,
        time: 20
      },
      {
        result: true,
        time: 20
      }
    ], userState.lives), 10);
  });
});
