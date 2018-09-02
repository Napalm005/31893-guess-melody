import {getElementFromTemplate} from './util.js';
import {resetGame} from "./change-game-state";
import selectSlide from "./select-slide";
import welcome from "./welcome";

const template = `
<section class="result">
  <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
  <h2 class="result__title">Увы и ах!</h2>
  <p class="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>
  <button class="result__replay" type="button">Попробовать ещё раз</button>
</section>`;

const element = getElementFromTemplate(template);

element.querySelector(`.result__replay`).addEventListener(`click`, () => {
  resetGame();
  selectSlide(welcome);
});

export default element;
