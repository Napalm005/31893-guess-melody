import {getElementFromTemplate} from './util.js';
import newGame from "./new-game.js";
import header from "./header.js";
import {levels} from './game-data.js';
import {changeLevel, isLoose, newGameState} from './change-game-state';
import {screen} from './screen';

const screenGenre = (state, levelsArr) => `
<section class="game__screen">
  <h2 class="game__title">Выберите ${levelsArr[state.level].genre} треки</h2>
  <form class="game__tracks">
    ${[...(levelsArr[state.level].tracks)].map((track) => `
      <div class="track">
        <button class="track__button track__button--play" type="button"></button>
        <div class="track__status">
          <audio src="${track.src}"></audio>
        </div>
        <div class="game__answer">
          <input class="game__input visually-hidden" type="checkbox" name="answer" value="${track.genre}" id="${track.genre}">
          <label class="game__check" for="${track.genre}">Отметить</label>
        </div>
      </div>`).join(``)}
    <button class="game__submit button" type="submit" disabled>Ответить</button>
  </form>
</section>`;

const template = `
<section class="game game--genre">
  ${header(newGameState)}
  ${screenGenre(newGameState, levels)}
</section>`;

const element = getElementFromTemplate(template);

export const gameSubmit = element.querySelector(`.game__submit`);
gameSubmit.addEventListener(`click`, (e) => {
  e.preventDefault();
  changeLevel(newGameState);
  isLoose(newGameState);
  screen(newGameState, levels);
  gameSubmit.disabled = true;
  newGame();
});


const isChecked = () => {
  if (document.querySelectorAll(`.game__input:checked`).length) {
    gameSubmit.disabled = false;
  } else {
    gameSubmit.disabled = true;
  }
};

const gameTracks = element.querySelector(`.game__tracks`);
gameTracks.addEventListener(`click`, (e) => {
  if (e.target.classList.contains(`track__button`)) {
    if (e.target.classList.contains(`track__button--play`)) {
      if (document.querySelectorAll(`.track__button--pause`).length) {
        document.querySelector(`.track__button--pause`).classList.add(`track__button--play`);
        document.querySelector(`.track__button--pause`).classList.remove(`track__button--pause`);
      }
      e.target.classList.remove(`track__button--play`);
      e.target.classList.add(`track__button--pause`);
    } else {
      e.target.classList.remove(`track__button--pause`);
      e.target.classList.add(`track__button--play`);
    }
  } else if (e.target.classList.contains(`game__input`)) {
    isChecked();
  }
});

export default element;
