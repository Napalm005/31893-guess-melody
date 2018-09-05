import {newGameState, checkResponse} from './change-game-state.js';
import {levels} from './game-data.js';
import header from "./header.js";
import {pausePlaying} from "./change-game-state";
import AbstractView from "./abstract-view";

export default class GameArtistView extends AbstractView {
  constructor(levelsArr, state) {
    super();
    this.track = levelsArr[state.level].track;
    this.singers = [...(levelsArr[state.level].singers)];
  }

  get template() {
    return `<section class="game game--artist">
              ${header(newGameState)}
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

    Array.from(this.element.querySelectorAll(`.artist__input`)).forEach((item) => {
      item.addEventListener(`change`, (e) => {
        this.onResponseCheck(e);
      });
    });
  }

  checkArtistResponse(response) {
    const beginTimeLevel = newGameState.time;
    const correctCheck = response.value === levels[newGameState.level].artist;
    const spendTime = beginTimeLevel - newGameState.time;
    checkResponse(correctCheck, spendTime);
  }

  onResponseCheck() {}
}
