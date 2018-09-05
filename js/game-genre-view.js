import header from "./header.js";
import {levels} from './game-data.js';
import {newGameState, checkResponse, pausePlaying} from './change-game-state';
import AbstractView from "./abstract-view";

export default class GameGenreView extends AbstractView {
  constructor(levelsArr, state) {
    super();
    this.genre = levelsArr[state.level].genre;
    this.tracks = [...(levelsArr[state.level].tracks)];
  }

  get template() {
    return `<section class="game game--genre">
              ${header(newGameState)}
              <section class="game__screen">
                <h2 class="game__title">Выберите ${this.genre} треки</h2>
                <form class="game__tracks">${this.tracks.map((track) => `
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
                </section>
              </section>`;
  }

  bind() {
    this.submitButton = this.element.querySelector(`.game__submit`);
    this.submitButton.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onResponseSubmit();
    });

    const gameTracks = this.element.querySelector(`.game__tracks`);
    const trackButton = gameTracks.querySelector(`.track__button`);

    trackButton.classList.remove(`track__button--play`);
    trackButton.classList.add(`track__button--pause`);
    this.element.querySelector(`audio`).play();

    gameTracks.addEventListener(`click`, (e) => {
      if (e.target.classList.contains(`track__button`)) {
        pausePlaying();
        if (e.target.classList.contains(`track__button--play`)) {
          if (gameTracks.querySelectorAll(`.track__button--pause`).length) {
            gameTracks.querySelector(`.track__button--pause`).classList.add(`track__button--play`);
            gameTracks.querySelector(`.track__button--pause`).classList.remove(`track__button--pause`);
          }
          e.target.classList.remove(`track__button--play`);
          e.target.classList.add(`track__button--pause`);
          e.target.nextElementSibling.querySelector(`audio`).play();
        } else {
          e.target.classList.remove(`track__button--pause`);
          e.target.classList.add(`track__button--play`);
          e.target.nextElementSibling.querySelector(`audio`).pause();
        }
      } else if (e.target.classList.contains(`game__input`)) {
        this.isChecked();
      }
    });
  }

  checkGenreResponse() {
    let correctCheck = true;
    Array.from(this.element.querySelectorAll(`.game__input`)).forEach((item) => {
      if ((item.checked === true && item.value !== levels[newGameState.level].genre) || (item.checked === false && item.value === levels[newGameState.level].genre)) {
        correctCheck = false;
      }
    });
    const beginTimeLevel = newGameState.time;
    const spendTime = beginTimeLevel - newGameState.time;
    checkResponse(correctCheck, spendTime);
  }

  isChecked() {
    if (document.querySelectorAll(`.game__input:checked`).length) {
      this.submitButton.disabled = false;
    } else {
      this.submitButton.disabled = true;
    }
  }

  onResponseSubmit() {}
}
