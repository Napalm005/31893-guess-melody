import {assert} from 'chai';
import {calculateScore} from '../calculate-score.js';

describe(`calculateScore`, () => {
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
      }
    ], 3), -1);
    assert.equal(calculateScore([], 3), -1);
  });

  it(`should return 10 when right not fast responses quantity equal 10`, () => {
    assert.equal(calculateScore([
      {
        result: true,
        time: 40
      },
      {
        result: true,
        time: 40
      },
      {
        result: true,
        time: 40
      },
      {
        result: true,
        time: 40
      },
      {
        result: true,
        time: 40
      },
      {
        result: true,
        time: 40
      },
      {
        result: true,
        time: 40
      },
      {
        result: true,
        time: 40
      },
      {
        result: true,
        time: 40
      },
      {
        result: true,
        time: 40
      }
    ], 3), 10);
  });

  it(`should not allow set negative values`, () => {
    assert.throws(() => calculateScore([], -1), /lives should not be negative value/);
  });

  it(`should not allow set non number value`, () => {
    assert.throws(() => calculateScore([], []), /lives should be of type number/);
    assert.throws(() => calculateScore([], {}), /lives should be of type number/);
    assert.throws(() => calculateScore([], `1`), /lives should be of type number/);
    assert.throws(() => calculateScore([], null), /lives should be of type number/);
    assert.throws(() => calculateScore([], undefined), /lives should be of type number/);
  });
});
