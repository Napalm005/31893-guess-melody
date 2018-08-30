import {getElementFromTemplate, getRandomElFromArray} from './util.js';
import selectSlide from "./select-slide";
import resultSuccess from './result-success.js';
import failTries from './fail-tries.js';
import failTime from './fail-time.js';
import welcome from "./welcome.js";
import {newGameState, resetGame} from './change-game-state.js';
import {INITIAL_GAME, levels} from './game-data.js';
import header from "./header.js";

const gameScreen = (state, levelsArr) => `
<section class="game__screen">
  <h2 class="game__title">Кто исполняет эту песню?</h2>
  <div class="game__track">
    <button class="track__button track__button--play" type="button"></button>
    <audio src="${levelsArr[1].track}"></audio>
  </div>

  <form class="game__artist">
    ${[...(levelsArr[1].singers)].map((singer) => `
      <div class="artist">
        <input class="artist__input visually-hidden" type="radio" name="answer" value="${singer.artist}" id="${singer.artist}">
        <label class="artist__name" for="${singer.artist}">
          <img class="artist__picture" src="${singer.image}" alt="${singer.artist}">
          ${singer.artist}
        </label>
      </div>`).join(``)}
  </form>
</section>`;

const template = `
<section class="game game--artist">
  ${header(INITIAL_GAME)}
  ${gameScreen(INITIAL_GAME, levels)}
</section>`;

const element = getElementFromTemplate(template);

const trackButton = element.querySelector(`.track__button`);
const flush = new Audio(`https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`);
trackButton.addEventListener(`click`, () => {
  flush.play();
});

const gameArtist = element.querySelector(`.game__artist`);
gameArtist.addEventListener(`click`, (e) => {
  if (e.target.className === `artist__picture`) {
    selectSlide(getRandomElFromArray([resultSuccess, failTries, failTime]));
    document.querySelector(`.result__replay`).addEventListener(`click`, () => {
      resetGame(newGameState, INITIAL_GAME);
      selectSlide(welcome);
    });
  }
});

export default element;
