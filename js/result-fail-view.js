import AbstractView from "./abstract-view.js";
import {resultDisplay} from "./result-display";

export default class ResultFailView extends AbstractView {
  constructor(resultModel, state) {
    super();
    this.title = resultModel.title;
    this.state = state;
  }
  get template() {
    const text = resultDisplay(this.state);
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

  onReStartGameButtonClick() {}
}
