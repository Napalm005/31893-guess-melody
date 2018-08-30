import selectSlide from "./select-slide";
import welcome from "./welcome.js";
import {newGameState, resetGame} from './change-game-state.js';
import {INITIAL_GAME} from './game-data';

export default () => {
  const gameBack = document.querySelector(`.game__back`);
  gameBack.addEventListener(`click`, () => {
    resetGame(newGameState, INITIAL_GAME);
    selectSlide(welcome);
  });
};
