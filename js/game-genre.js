import {getElementFromTemplate} from './util.js';
import selectSlide from "./select-slide.js";
import gameArtist from "./game-artist.js";
import newGame from "./new-game.js";

const template = `
<section class="game game--genre">
  <header class="game__header">
    <a class="game__back" href="#">
      <span class="visually-hidden">Сыграть ещё раз</span>
      <img class="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию">
    </a>
  
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle class="timer__line" cx="390" cy="390" r="370"
              style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"/>
    </svg>
  
    <div class="timer__value" xmlns="http://www.w3.org/1999/xhtml">
      <span class="timer__mins">05</span>
      <span class="timer__dots">:</span>
      <span class="timer__secs">00</span>
    </div>
  
    <div class="game__mistakes">
      <div class="wrong"></div>
      <div class="wrong"></div>
      <div class="wrong"></div>
    </div>
  </header>
  
  <section class="game__screen">
    <h2 class="game__title">Выберите инди-рок треки</h2>
    <form class="game__tracks">
      <div class="track">
        <button class="track__button track__button--play" type="button"></button>
        <div class="track__status">
          <audio></audio>
        </div>
        <div class="game__answer">
          <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-1">
          <label class="game__check" for="answer-1">Отметить</label>
        </div>
      </div>
  
      <div class="track">
        <button class="track__button track__button--play" type="button"></button>
        <div class="track__status">
          <audio></audio>
        </div>
        <div class="game__answer">
          <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-2">
          <label class="game__check" for="answer-2">Отметить</label>
        </div>
      </div>
  
      <div class="track">
        <button class="track__button track__button--play" type="button"></button>
        <div class="track__status">
          <audio></audio>
        </div>
        <div class="game__answer">
          <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-3">
          <label class="game__check" for="answer-3">Отметить</label>
        </div>
      </div>
  
      <div class="track">
        <button class="track__button track__button--play" type="button"></button>
        <div class="track__status">
          <audio></audio>
        </div>
        <div class="game__answer">
          <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-4">
          <label class="game__check" for="answer-4">Отметить</label>
        </div>
      </div>
  
      <button class="game__submit button" type="submit" disabled>Ответить</button>
    </form>
  </section>
</section>`;

const element = getElementFromTemplate(template);

export const gameSubmit = element.querySelector(`.game__submit`);
gameSubmit.addEventListener(`click`, () => {
  selectSlide(gameArtist);
  gameSubmit.disabled = true;
  newGame();
});


const isPlay = () => {
  if (document.querySelectorAll(`.track__button--pause`).length) {
    gameSubmit.disabled = false;
  } else {
    gameSubmit.disabled = true;
  }
};

const trackButton = element.querySelectorAll(`.track__button`);
Array.from(trackButton).forEach((item) => {
  item.addEventListener(`click`, () => {
    if (item.classList.contains(`track__button--play`)) {
      if (document.querySelectorAll(`.track__button--pause`).length) {
        document.querySelector(`.track__button--pause`).classList.add(`track__button--play`);
        document.querySelector(`.track__button--pause`).classList.remove(`track__button--pause`);
      }
      item.classList.remove(`track__button--play`);
      item.classList.add(`track__button--pause`);
    } else {
      item.classList.remove(`track__button--pause`);
      item.classList.add(`track__button--play`);
    }
    isPlay();
  });
});

export default element;
