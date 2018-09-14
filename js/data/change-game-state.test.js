import {assert} from "chai";
import {die} from "../change-game-state.js";

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

describe(`Check time changer`, () => {});
