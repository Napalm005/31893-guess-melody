import AbstractView from './abstract-view.js';
import {resultDisplay} from "./result-display";
import {newGameState} from "./change-game-state";
import {INITIAL_GAME} from "./game-data";
import {calculateScore} from "./calculate-score";
import {declOfNum} from "./util";

export default class ResultSuccessView extends AbstractView {
  constructor(state) {
    super();
    this.title = state.title;
    this.text = resultDisplay([1, 2, 3, 4, 5], newGameState);

    this.gameTime = INITIAL_GAME.time - newGameState.time;
    this.minutes = Math.floor(this.gameTime / 60 / 1000);
    this.seconds = this.gameTime / 1000 % 60;

    this.scoresSum = calculateScore(newGameState.responses, newGameState.lives);
    this.mistakeSum = 3 - newGameState.lives;
    this.speedScoresSum = newGameState.fastResponses * 2;

    this.scoresNum = declOfNum(this.scoresSum, [`балл`, `балла`, `баллов`]);
    this.minutsNum = declOfNum(this.minutes, [`минуту`, `минуты`, `минут`]);
    this.secundsNum = declOfNum(this.seconds, [`секунду`, `секунды`, `секунд`]);
    this.mistakeNum = declOfNum(this.mistakeSum, [`ошибку`, `ошибки`, `ошибок`]);
    this.speedNum = declOfNum(this.speedScoresSum, [`быстрый`, `быстрых`, `быстрых`]);
  }
  get template() {
    return `<section class="result">
              <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
              <h2 class="result__title">${this.title}</h2>
              <p class="result__total">За ${this.minutes} ${this.minutsNum} и ${this.seconds} ${this.secundsNum} вы набрали ${this.scoresSum} ${this.scoresNum} (${this.speedScoresSum} ${this.speedNum}), совершив ${this.mistakeSum} ${this.mistakeNum}</p>
              <p class="result__text">${this.text}</p>
              <button class="result__replay" type="button">Сыграть ещё раз</button>
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
