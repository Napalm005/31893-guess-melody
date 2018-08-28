import {assert} from 'chai';
import {setTimer, changelives} from '../change-game-state.js';

describe(`Check lives changer`, () => {

  it(`should update lives of the game`, () => {
    assert.equal(changelives(1).lives, 1);
    assert.equal(changelives(2).lives, 2);
    assert.equal(changelives(10).lives, 10);
    assert.equal(changelives(102).lives, 102);
  });

  it(`should not allow set negative values`, () => {
    assert.throws(() => changelives(-1).lives, /Lives should not be negative value/);
  });

  it(`should not allow set non number value`, () => {
    assert.throws(() => changelives([]), /Lives should be of type number/);
    assert.throws(() => changelives({}), /Lives should be of type number/);
    assert.throws(() => changelives(`1`), /Lives should be of type number/);
    assert.throws(() => changelives(null), /Lives should be of type number/);
    assert.throws(() => changelives(undefined), /Lives should be of type number/);
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

