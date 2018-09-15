import WelcomeView from "./welcome-view";
import GameScreen from "./game-screen.js";
import GameModel from "./game-model.js";
import ResultSuccessView from "./result-success-view";
import ErrorView from "./error-view";
import {changeScreen} from "./util";
import Loader from "./loader.js";
import {calculateScore} from "./calculate-score";
import {INITIAL_GAME} from "./game-data";

let gameData;
export default class Application {
  static start() {
    Application.load();
  }

  static showWelcome() {
    const welcomeView = new WelcomeView();
    welcomeView.onStartGameButtonClick = () => {
      Application.showGame();
    };
    changeScreen(welcomeView.element);
  }

  static async load() {
    if (gameData) {
      Application.showWelcome();
    } else {
      try {
        gameData = await Loader.loadData();
        Application.showWelcome();
      } catch (e) {
        Application.showError(e);
      }
    }
  }

  static showGame() {
    const gameScreen = new GameScreen(new GameModel(gameData));
    gameScreen.changeLevel();
    gameScreen.startGame();
  }

  static async showResult(resultModel, gameModel) {
    const dataToSendToServer = {time: INITIAL_GAME.time - gameModel.time, lives: gameModel.lives, scores: calculateScore(gameModel.responses, gameModel.lives)};

    try {
      await Loader.saveResults(dataToSendToServer);
      const resultSuccessView = new ResultSuccessView(resultModel, gameModel, await Loader.loadResults());
      resultSuccessView.onReStartGameButtonClick = () => {
        Application.showGame();
      };
      changeScreen(resultSuccessView.element);
    } catch (e) {
      Application.showError(e);
    }
  }

  static showError(error) {
    const errorView = new ErrorView(error);
    changeScreen(errorView.element);
  }
}
