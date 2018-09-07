import {gameState, checkResponse} from './change-game-state.js';
import {levels} from './game-data.js';
import header from "./header.js";
import {pausePlaying} from "./change-game-state";
import AbstractView from "./abstract-view";
import {toggleClass} from "./util";

export default class GameArtistView extends AbstractView {
  constructor(levelsArr, state) {
    super();
    this.track = levelsArr[state.level].track;
    this.singers = [...(levelsArr[state.level].singers)];
  }

  get template() {
    return `<section class="game game--artist">
              ${header(gameState)}
              <section class="game__screen">
                <h2 class="game__title">Кто исполняет эту песню?</h2>
                <div class="game__track">
                  <button class="track__button track__button--play" type="button"></button>
                  <audio src="${this.track}"></audio>
                </div>
              
                <form class="game__artist">
                  ${this.singers.map((singer) => `
                    <div class="artist">
                      <input class="artist__input visually-hidden" type="radio" name="answer" value="${singer.artist}" id="${singer.artist}">
                      <label class="artist__name" for="${singer.artist}">
                        <img class="artist__picture" src="${singer.image}" alt="${singer.artist}">
                        ${singer.artist}
                      </label>
                    </div>`).join(``)}
                </form>
              </section>`;
  }

  bind() {
    const trackButton = this.element.querySelector(`.track__button`);
    const audio = this.element.querySelector(`audio`);

    toggleClass(trackButton, `track__button--play`, `track__button--pause`);
    audio.play();

    trackButton.addEventListener(`click`, (e) => {
      if (e.target.classList.contains(`track__button--play`)) {
        audio.play();
      } else {
        pausePlaying();
      }
      toggleClass(trackButton, `track__button--play`, `track__button--pause`);
    });

    [...this.element.querySelectorAll(`.artist__input`)].forEach((item) => {
      item.addEventListener(`change`, (e) => {
        this.onResponseCheck(e);
      });
    });
  }

  checkArtistResponse(response) {
    const beginTimeLevel = gameState.time;
    const correctCheck = response.value === levels[gameState.level].artist;
    const spendTime = beginTimeLevel - gameState.time;
    checkResponse(correctCheck, spendTime);
  }

  onResponseCheck() {}
}
