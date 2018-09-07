import {nextLevel, updateClock} from "./change-game-state";
import {INITIAL_GAME} from './game-data.js';

class GameModel {
  constructor() {
    this.restart();
  }

  get state() {
    return Object.freeze(this._state);
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
}

export default GameModel;
