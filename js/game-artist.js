import {getElementFromTemplate} from './util.js';
import {newGameState, checkGameContinue, checkResponse, changeLevel} from './change-game-state.js';
import {levels} from './game-data.js';
import header from "./header.js";
import {pausePlaying} from "./change-game-state";

const renderArtist = () => {
  const screenArtist = (state, levelsArr) => `
  <section class="game__screen">
    <h2 class="game__title">Кто исполняет эту песню?</h2>
    <div class="game__track">
      <button class="track__button track__button--play" type="button"></button>
      <audio src="${levelsArr[state.level].track}"></audio>
    </div>
  
    <form class="game__artist">
      ${[...(levelsArr[state.level].singers)].map((singer) => `
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

  const beginTimeLevel = newGameState.time;
  const checkArtistResponse = (response) => {
    const correctCheck = response.value === levels[newGameState.level].artist;
    const spendTime = beginTimeLevel - newGameState.time;
    checkResponse(correctCheck, spendTime);
  };

  const trackButton = element.querySelector(`.track__button`);
  const audio = element.querySelector(`audio`);

  trackButton.classList.remove(`track__button--play`);
  trackButton.classList.add(`track__button--pause`);
  audio.play();

  trackButton.addEventListener(`click`, (e) => {
    if (e.target.classList.contains(`track__button--play`)) {
      e.target.classList.remove(`track__button--play`);
      e.target.classList.add(`track__button--pause`);
      audio.play();
    } else {
      e.target.classList.remove(`track__button--pause`);
      e.target.classList.add(`track__button--play`);
      pausePlaying();
    }
  });

  Array.from(element.querySelectorAll(`.artist__input`)).forEach((item) => {
    item.addEventListener(`change`, (e) => {
      audio.pause();
      checkArtistResponse(e.target, newGameState);
      changeLevel(newGameState);
      checkGameContinue(newGameState);
    });
  });

  return element;
};

export default renderArtist;
