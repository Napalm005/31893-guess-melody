import {nextLevel, updateClock, die, getLevel, makeFastResponse} from "./change-game-state";
import {INITIAL_GAME} from './game-data.js';

class GameModel {
  constructor() {
    this.restart();
  }

  get state() {
    return Object.freeze(this._state);
  }
  get level() {
    return getLevel(this._state);
  }
  nextLevel() {
    this._state = nextLevel(this._state);
  }
  restart() {
    this._state = INITIAL_GAME;
  }
  updateClock() {
    this._state = updateClock(this._state);
  }
  die() {
    this._state = die(this._state);
  }
  makeFastResponse() {
    this._state = makeFastResponse(this._state);
  }
}

export default GameModel;