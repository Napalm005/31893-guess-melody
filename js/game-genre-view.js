import {pauseAudioPlaying} from "./util";
import AbstractView from "./abstract-view";
import {toggleClass} from "./util";
import {DEBUG} from "./settings";

export default class GameGenreView extends AbstractView {
  constructor(level) {
    super();
    this.genre = level.genre;
    this.answers = [...level.answers];
    this.question = level.question;
  }

  get template() {
    return `<section class="game game--genre">
              <section class="game__screen">
                <h2 class="game__title">${this.question}</h2>
                <form class="game__tracks">${this.answers
                  .map((track) => `
                  <div class="track" style="${track.genre === this.genre && DEBUG ? `border: 1px solid red` : ``}">
                    <button class="track__button track__button--play" type="button"></button>
                    <div class="track__status">
                      <audio src="${track.src}"></audio>
                    </div>
                    <div class="game__answer">
                      <input class="game__input visually-hidden" type="checkbox" name="answer" value="${track.genre}" id="${track.src}">
                      <label class="game__check" for="${track.src}">Отметить</label>
                    </div>
                  </div>`
                  )
                  .join(``)}
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

    toggleClass(trackButton, `track__button--play`, `track__button--pause`);
    this.element.querySelector(`audio`).play();

    gameTracks.addEventListener(`click`, (e) => {
      if (e.target.classList.contains(`track__button`)) {
        pauseAudioPlaying();
        if (e.target.classList.contains(`track__button--play`)) {
          if (gameTracks.querySelectorAll(`.track__button--pause`).length) {
            toggleClass(gameTracks.querySelector(`.track__button--pause`), `track__button--pause`, `track__button--play`);
          }
          e.target.nextElementSibling.querySelector(`audio`).play();
        } else {
          e.target.nextElementSibling.querySelector(`audio`).pause();
        }
        toggleClass(e.target, `track__button--play`, `track__button--pause`);
      } else if (e.target.classList.contains(`game__input`)) {
        this.isChecked();
      }
    });
  }

  checkGenreResponse() {
    let correctCheck = true;
    [...this.element.querySelectorAll(`.game__input`)].forEach((item) => {
      if ((item.checked === true && item.value !== this.genre) || (item.checked === false && item.value === this.genre)) {
        correctCheck = false;
      }
    });
    return correctCheck;
  }

  isChecked() {
    this.submitButton.disabled = !document.querySelectorAll(`.game__input:checked`).length;
  }

  onResponseSubmit() {}
}
