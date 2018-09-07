import {assert} from 'chai';
import {setTimer, die} from '../change-game-state.js';

describe(`Check lives changer`, () => {

  it(`should update lives of the game`, () => {
    assert.equal(die(1).lives, 1);
    assert.equal(die(2).lives, 2);
    assert.equal(die(10).lives, 10);
    assert.equal(die(102).lives, 102);
  });

  it(`should not allow set negative values`, () => {
    assert.throws(() => die(-1).lives, /Lives should not be negative value/);
  });

  it(`should not allow set non number value`, () => {
    assert.throws(() => die([]), /Lives should be of type number/);
    assert.throws(() => die({}), /Lives should be of type number/);
    assert.throws(() => die(`1`), /Lives should be of type number/);
    assert.throws(() => die(null), /Lives should be of type number/);
    assert.throws(() => die(undefined), /Lives should be of type number/);
  });
});


describe(`Check time changer`, () => {

  // it(`should update time of the game`, () => {
  //   assert.equal(setTimer(10000, () => {}).time, 10000);
  // });

  it(`should not allow set negative values`, () => {
    assert.throws(() => setTimer(-1), /Time should not be negative value/);
  });
  it(`should not allow set non number value`, () => {
    assert.throws(() => setTimer([]), /Time should be of type number/);
    assert.throws(() => setTimer({}), /Time should be of type number/);
    assert.throws(() => setTimer(`1`), /Time should be of type number/);
    assert.throws(() => setTimer(null), /Time should be of type number/);
    assert.throws(() => setTimer(undefined), /Time should be of type number/);
  });
});

