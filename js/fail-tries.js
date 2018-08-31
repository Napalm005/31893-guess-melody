import {getElementFromTemplate} from './util.js';
import {INITIAL_GAME} from "./game-data";
import selectSlide from "./select-slide";
import welcome from "./welcome";
import {newGameState, resetGame} from "./change-game-state";

const template = `
<section class="result">
  <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
  <h2 class="result__title">Какая жалость!</h2>
  <p class="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
  <button class="result__replay" type="button">Попробовать ещё раз</button>
</section>`;

const element = getElementFromTemplate(template);

element.querySelector(`.result__replay`).addEventListener(`click`, () => {
  resetGame(newGameState, INITIAL_GAME);
  selectSlide(welcome);
});

export default element;
