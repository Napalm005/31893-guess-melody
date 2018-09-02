import {getElementFromTemplate} from './util.js';
import selectSlide from "./select-slide";
import welcome from "./welcome";
import {calculateScore} from './calculate-score';
import {declOfNum} from './util.js';
import {resultDisplay} from './result-display';
import {INITIAL_GAME} from './game-data';
import {newGameState, resetGame} from './change-game-state.js';

const renderResult = () => {
  const resultText = resultDisplay([1, 2, 3, 4, 5], newGameState);
  let gameTime = INITIAL_GAME.time - newGameState.time;

  let minutes = Math.floor(gameTime / 60 / 1000);
  let seconds = gameTime / 1000 % 60;
  let scoresSum = calculateScore(newGameState.responses, newGameState.lives);
  let mistakeSum = 3 - newGameState.lives;
  let speedScoresSum = newGameState.fastResponses * 2;

  let scoresNum = declOfNum(scoresSum, [`балл`, `балла`, `баллов`]);
  let minutsNum = declOfNum(minutes, [`минуту`, `минуты`, `минут`]);
  let secundsNum = declOfNum(seconds, [`секунду`, `секунды`, `секунд`]);
  let mistakeNum = declOfNum(mistakeSum, [`ошибку`, `ошибки`, `ошибок`]);
  let speedNum = declOfNum(speedScoresSum, [`быстрый`, `быстрых`, `быстрых`]);

  const template = `
  <section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Вы настоящий меломан!</h2>
    <p class="result__total">За ${minutes} ${minutsNum} и ${seconds} ${secundsNum} вы набрали ${scoresSum} ${scoresNum} (${speedScoresSum} ${speedNum}), совершив ${mistakeSum} ${mistakeNum}</p>
    <p class="result__text">${resultText}</p>
    <button class="result__replay" type="button">Сыграть ещё раз</button>
  </section>`;

  const element = getElementFromTemplate(template);

  element.querySelector(`.result__replay`).addEventListener(`click`, () => {
    resetGame();
    selectSlide(welcome);
  });

  return element;
};


export default renderResult;
