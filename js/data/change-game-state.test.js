import {assert} from 'chai';
import {setTimer, die} from '../change-game-state.js';

describe(`Check lives changer`, () => {

  it(`should make (lives - 1)`, () => {
    assert.equal(die({lives: 1}).lives, 0);
    assert.equal(die({lives: 2}).lives, 1);
  });

  it(`should not allow set negative values`, () => {
    assert.throws(() => die({lives: -1}), /Lives should not be negative value/);
  });

  it(`should not allow set non number value`, () => {
    assert.throws(() => die({lives: []}), /Lives should be of type number/);
    assert.throws(() => die({lives: {}}), /Lives should be of type number/);
    assert.throws(() => die({lives: `1`}), /Lives should be of type number/);
    assert.throws(() => die({lives: null}), /Lives should be of type number/);
    assert.throws(() => die({lives: undefined}), /Lives should be of type number/);
  });
});


describe(`Check time changer`, () => {

  // it(`should update time of the game`, () => {
  //   assert.equal(setTimer(10000, () => {}).time, 10000);
  // });

  it(`should not allow set negative values`, () => {
    assert.throws(() => setTimer({time: -1}), /Time should not be negative value/);
  });
  it(`should not allow set non number value`, () => {
    assert.throws(() => setTimer({time: []}), /Time should be of type number/);
    assert.throws(() => setTimer({time: {}}), /Time should be of type number/);
    assert.throws(() => setTimer({time: `1`}), /Time should be of type number/);
    assert.throws(() => setTimer({time: null}), /Time should be of type number/);
    assert.throws(() => setTimer({time: undefined}), /Time should be of type number/);
  });
});

