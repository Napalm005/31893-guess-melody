import selectSlide from "./select-slide";
import welcome from "./welcome.js";
import {INITIAL_GAME, newGameState, resetGame} from './change-game-state.js';

export default () => {
  const gameBack = document.querySelector(`.game__back`);
  gameBack.addEventListener(`click`, () => {
    resetGame(newGameState, INITIAL_GAME);
    selectSlide(welcome);
  });
};
