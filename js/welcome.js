import {getElementFromTemplate} from './util.js';
import selectSlide from './select-slide.js';
import gameGenre, {gameSubmit} from './game-genre.js';
import newGame from "./new-game.js";
import {setTimer, newGameState} from "./change-game-state.js";
import failTime from './fail-time.js';

const template = `
<section class="welcome">
  <div class="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
  <button class="welcome__button"><span class="visually-hidden">Начать игру</span></button>
  <h2 class="welcome__rules-title">Правила игры</h2>
  <p class="welcome__text">Правила просты:</p>
  <ul class="welcome__rules-list">
    <li>За 5 минут нужно ответить на все вопросы</li>
    <li>Можно допустить 3 ошибки.</li>
  </ul>
  <p class="welcome__text">Удачи!</p>
</section>`;

const element = getElementFromTemplate(template);

const welcomeButton = element.querySelector(`.welcome__button`);
welcomeButton.addEventListener(`click`, () => {
  selectSlide(gameGenre);
  newGame();
  setTimer(newGameState.time, () => {
    selectSlide(failTime);
    document.querySelector(`.result__replay`).addEventListener(`click`, () => {
      selectSlide(element);
    });
  });
  gameSubmit.disabled = true;
  if (document.querySelectorAll(`.track__button--pause`).length) {
    document.querySelector(`.track__button--pause`).classList.add(`track__button--play`);
    document.querySelector(`.track__button--pause`).classList.remove(`track__button--pause`);
  }
});

export default element;
