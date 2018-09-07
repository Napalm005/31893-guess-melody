import {changeScreen} from "./util";
import welcome from "./welcome.js";
import {resetGame} from './change-game-state.js';

export default () => {
  const gameBack = document.querySelector(`.game__back`);
  gameBack.addEventListener(`click`, () => {
    resetGame();
    changeScreen(welcome);
  });
};
