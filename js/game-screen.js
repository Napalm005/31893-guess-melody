import {resultModel} from "./game-data";
import {getRadius} from "./get-radius";
import {INITIAL_GAME, TIME_LINE_RADIUS, CRITICAL_TIME, FINISH_LEVEL} from "./game-data";
import {changeScreen} from "./util";
import HeaderView from "./header";
import GameGenreVeiw from "./game-genre-view";
import GameArtistVeiw from "./game-artist-view";
import ResultFailView from "./result-fail-view";
import ModalConfirmView from "./modal-confirm-view";
import Application from "./application";

class GameScreen {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView(this.model.state);

    this._interval = null;
    this._beginTime = this.model.state.time;
  }

  startGame() {
    this.changeLevel();
    this.renderHeader();
    this.startTimer();
  }

  startTimer() {
    this._interval = setInterval(() => {
      this.model.updateClock();
      this.updateHeader();
      if (this.model.state.time === 0) {
        const failTime = new ResultFailView(resultModel.failTime, this.model.state);
        failTime.onReStartGameButtonClick = () => {
          this.resetGame();
        };
        this.stopTimer();
        changeScreen(failTime.element);
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this._interval);
  }

  updateHeader() {
    const game = document.querySelector(`.game`);
    const headerView = new HeaderView(this.model.state);
    const timerLine = headerView.element.querySelector(`.timer__line`);

    game.replaceChild(headerView.element, this.header.element);
    headerView.onGameBackBtnClick = () => this._onGameBackBtnClick(game);

    timerLine.setAttribute(`stroke-dasharray`, getRadius(this.model.state.time / INITIAL_GAME.time, TIME_LINE_RADIUS).stroke);
    timerLine.setAttribute(`stroke-dashoffset`, getRadius(this.model.state.time / INITIAL_GAME.time, TIME_LINE_RADIUS).offset);
    this.header = headerView;
  }

  renderHeader() {
    const game = document.querySelector(`.game`);
    const headerView = new HeaderView(this.model.state);
    game.insertBefore(this.header.element, game.firstChild);
    headerView.onGameBackBtnClick = () => this._onGameBackBtnClick(game);
  }

  _onGameBackBtnClick(game) {
    if (!document.querySelector(`.modal`)) {
      const modalConfirmView = new ModalConfirmView();
      modalConfirmView.onOkBtnClick = () => {
        this.resetGame();
      };
      modalConfirmView.onRejectButtonClick = () => {
        document.querySelector(`.modal`).remove();
      };
      game.appendChild(modalConfirmView.element);
    }
  }

  changeLevel() {
    switch (this.model.level.type) {
      case `genre`:
        const gameGenre = new GameGenreVeiw(this.model.level);
        gameGenre.onResponseSubmit = () => {
          this.pauseAudioPlaying();
          let correctCheck = gameGenre.checkGenreResponse();
          const spendTime = this._beginTime - this.model.state.time;
          this.checkResponse(correctCheck, spendTime);
          gameGenre.submitButton.disabled = true;
          [...gameGenre.element.querySelectorAll(`.game__input:checked`)].forEach((item) => {
            item.checked = false;
          });
          this._beginTime = this.model.state.time;
          this.checkGameContinue(this.model.state);
        };
        changeScreen(gameGenre.element);
        this.renderHeader();
        break;
      case `artist`:
        const gameArtist = new GameArtistVeiw(this.model.level);
        gameArtist.onResponseCheck = (evt) => {
          this.pauseAudioPlaying();
          let correctCheck = gameArtist.checkArtistResponse(e.target);
          const spendTime = this._beginTime - this.model.state.time;
          this.checkResponse(correctCheck, spendTime);
          this.checkGameContinue(this.model.state);
          this._beginTime = this.model.state.time;
        };
        changeScreen(gameArtist.element);
        this.renderHeader();
        break;
    }
  }

  checkResponse(correct, time) {
    if (correct) {
      this.model.setResponse({result: true, time});
      if (time < CRITICAL_TIME) {
        this.model.makeFastResponse();
      }
    } else {
      this.model.setResponse({result: false, time});
      this.model.die();
    }
  }

  checkGameContinue() {
    if (this.model.state.lives === 0) {
      const failTries = new ResultFailView(resultModel.failTries, this.model.state);
      failTries.onReStartGameButtonClick = () => {
        this.resetGame();
      };
      this.stopTimer();
      changeScreen(failTries.element);
    } else if (this.model.state.level === FINISH_LEVEL - 1) {
      this.stopTimer();
      Application.showResult(resultModel.success, this.model.state);
    } else {
      this.model.nextLevel();
      this.changeLevel();
    }
  }

  resetGame() {
    this.stopTimer();
    this.pauseAudioPlaying();
    this.model.restart();
    Application.showWelcome();
  }

  pauseAudioPlaying() {
    for (let audio of document.querySelectorAll(`audio`)) {
      audio.pause();
    }
  }
}

export default GameScreen;
