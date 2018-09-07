import AbstractView from './abstract-view.js';
import {resultDisplay} from "./result-display";
import {gameState} from "./change-game-state";
import {INITIAL_GAME} from "./game-data";
import {calculateScore} from "./calculate-score";
import {declOfNum} from "./util";

export default class ResultSuccessView extends AbstractView {
  constructor(data) {
    super();
    this.title = data.title;
  }

  get template() {
    const text = resultDisplay([1, 2, 3, 4, 5], gameState);

    const gameTime = INITIAL_GAME.time - gameState.time;
    const minutes = Math.floor(gameTime / 60 / 1000);
    const seconds = gameTime / 1000 % 60;

    const scoresSum = calculateScore(gameState.responses, gameState.lives);
    const mistakeSum = 3 - gameState.lives;
    const speedScoresSum = gameState.fastResponses * 2;

    const scoresNum = declOfNum(scoresSum, [`балл`, `балла`, `баллов`]);
    const minutsNum = declOfNum(minutes, [`минуту`, `минуты`, `минут`]);
    const secundsNum = declOfNum(seconds, [`секунду`, `секунды`, `секунд`]);
    const mistakeNum = declOfNum(mistakeSum, [`ошибку`, `ошибки`, `ошибок`]);
    const speedNum = declOfNum(speedScoresSum, [`быстрый`, `быстрых`, `быстрых`]);

    return `<section class="result">
              <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
              <h2 class="result__title">${this.title}</h2>
              <p class="result__total">За ${minutes} ${minutsNum} и ${seconds} ${secundsNum} вы набрали ${scoresSum} ${scoresNum} (${speedScoresSum} ${speedNum}), совершив ${mistakeSum} ${mistakeNum}</p>
              <p class="result__text">${text}</p>
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
