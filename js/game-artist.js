import {getElementFromTemplate} from './util.js';
// import selectSlide from "./select-slide";
import {newGameState, isLoose} from './change-game-state.js';
import {levels} from './game-data.js';
import header from "./header.js";
import {changeLevel} from "./change-game-state";
import {screen} from './screen';

const screenArtist = (state, levelsArr) => `
<section class="game__screen">
  <h2 class="game__title">Кто исполняет эту песню?</h2>
  <div class="game__track">
    <button class="track__button track__button--play" type="button"></button>
    <audio src="${levelsArr[2].track}"></audio>
  </div>

  <form class="game__artist">
    ${[...(levelsArr[2].singers)].map((singer) => `
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
  ${header(newGameState)}
  ${screenArtist(newGameState, levels)}
</section>`;

const element = getElementFromTemplate(template);

const checkArtistResponse = (response) => {
  if (response.value === levels[newGameState.level].artist) {
    newGameState.scores += 1;
  } else {
    newGameState.scores -= 2;
    newGameState.lives -= 1;
  }
};

const trackButton = element.querySelector(`.track__button`);
const flush = new Audio(`https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`);
trackButton.addEventListener(`click`, () => {
  flush.play();
});

Array.from(element.querySelectorAll(`.artist__input`)).forEach((item) => {
  item.addEventListener(`change`, (e) => {
    checkArtistResponse(e.target, newGameState);
    changeLevel(newGameState);
    screen(newGameState, levels);
    isLoose(newGameState);
  });
});

export default element;
