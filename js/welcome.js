import AbstractView from './abstract-view.js';
import newGame from "./new-game.js";
import {gameState, setTimer} from './change-game-state';
import {screen} from './screen';
import {levels} from "./game-data";

class WelcomView extends AbstractView {
  get template() {
    return `<section class="welcome">
              <div class="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
              <button class="welcome__button"><span class="visually-hidden">Начать игру</span></button>
              <h2 class="welcome__rules-title">Правила игры</h2>
              <p class="welcome__text">Правила просты:</p>
              <ul class="welcome__rules-list">
                <li>За 5 минут нужно ответить на все вопросы</li>
                <li>Можно допустить 3 ошибки.</li>
              </ul>
              <p class="welcome__text">Удачи!</p>
            </section>`;
  }

  bind() {
    const welcomeButton = this.element.querySelector(`.welcome__button`);
    welcomeButton.addEventListener(`click`, () => {
      this.onStartGameButtonClick();
    });
  }

  onStartGameButtonClick() { }
}

const welcomView = new WelcomView();

welcomView.onStartGameButtonClick = () => {
  screen(gameState, levels);
  newGame();
  setTimer(gameState.time);
};

export default welcomView.element;
