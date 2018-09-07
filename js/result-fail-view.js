import AbstractView from './abstract-view.js';
import {resultDisplay} from "./result-display";
import {gameState} from "./change-game-state";

export default class ResultFailView extends AbstractView {
  constructor(state) {
    super();
    this.title = state.title;
  }
  get template() {
    const text = resultDisplay([1, 2, 3, 4, 5], gameState);
    return `<section class="result">
              <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
              <h2 class="result__title">${this.title}</h2>
              <p class="result__total result__total--fail">${text}</p>
              <button class="result__replay" type="button">Попробовать ещё раз</button>
            </section>`;
  }

  bind() {
    const replayButton = this.element.querySelector(`.result__replay`);
    replayButton.addEventListener(`click`, () => {
      this.onReStartGameButtonClick();
    });
  }

  onReStartGameButtonClick() { }
}
