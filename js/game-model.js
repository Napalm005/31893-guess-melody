import {nextLevel, updateClock, die, makeFastResponse, setResponse} from "./change-game-state";
import {INITIAL_GAME} from './game-data.js';

class GameModel {
  constructor(data) {
    this.data = data;
    this.restart();
  }

  get state() {
    return Object.freeze(this._state);
  }
  get level() {
    return this.data[this._state.level];
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
  setResponse(response) {
    this._state = setResponse(this._state, response);
  }
}

export default GameModel;
