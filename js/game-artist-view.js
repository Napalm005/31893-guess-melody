import {pauseAudioPlaying} from "./util";
import AbstractView from "./abstract-view";
import {toggleClass} from "./util";
import {DEBUG} from "./settings";

export default class GameArtistView extends AbstractView {
  constructor(level) {
    super();
    this.src = level.src;
    this.answers = [...level.answers];
    this.artist = level.artist;
    this.question = level.question;
  }

  get template() {
    return `<section class="game game--artist">
              <section class="game__screen">
                <h2 class="game__title">${this.question}</h2>
                <div class="game__track">
                  <button class="track__button track__button--play" type="button"></button>
                  <audio src="${this.src}"></audio>
                </div>
              
                <form class="game__artist">
                  ${this.answers
                    .map((singer) => `
                    <div class="artist" style="${singer.artist === this.artist && DEBUG ? `border: 1px solid red` : ``}">
                      <input class="artist__input visually-hidden" type="radio" name="answer" value="${singer.artist}" id="${singer.artist}">
                      <label class="artist__name" for="${singer.artist}">
                        <img class="artist__picture" src="${singer.image}" alt="${singer.artist}">
                        ${singer.artist}
                      </label>
                    </div>`
                    )
                    .join(``)}
                </form>
              </section>`;
  }

  bind() {
    const trackButton = this.element.querySelector(`.track__button`);
    const audio = this.element.querySelector(`audio`);

    toggleClass(trackButton, `track__button--play`, `track__button--pause`);
    audio.play();

    trackButton.addEventListener(`click`, (evt) => {
      if (e.target.classList.contains(`track__button--play`)) {
        audio.play();
      } else {
        pauseAudioPlaying();
      }
      toggleClass(trackButton, `track__button--play`, `track__button--pause`);
    });

    [...this.element.querySelectorAll(`.artist__input`)].forEach((item) => {
      item.addEventListener(`change`, (evt) => {
        this.onResponseCheck(evt);
      });
    });
  }

  checkArtistResponse(response) {
    return response.value === this.artist;
  }

  onResponseCheck() {}
}
