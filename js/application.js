import WelcomeView from './welcome-view';
import GameScreen from './game-screen.js';
import GameModel from './game-model.js';
import ResultSuccessView from "./result-success-view";
import ErrorView from "./error-view";
import {changeScreen} from './util';
import Loader from './loader.js';
import {calculateScore} from "./calculate-score";
import {INITIAL_GAME} from "./game-data";

let gameData;
export default class Application {

  static showWelcome() {
    const welcomeView = new WelcomeView();
    welcomeView.onStartGameButtonClick = () => {
      Application.showGame();
    };
    Loader.loadData().then((data) => (gameData = data)).then(() => changeScreen(welcomeView.element)).catch(Application.showError);
  }

  static showGame() {
    const gameScreen = new GameScreen(new GameModel(gameData));
    gameScreen.changeLevel();
    gameScreen.startGame();
  }

  static showResult(resultModel, gameModel) {
    Loader.saveResults({
      time: INITIAL_GAME.time - gameModel.time,
      lives: gameModel.lives,
      scores: calculateScore(gameModel.responses, gameModel.lives)
    }).then(() => {
      Loader.loadResults().then((res) => {
        const resultSuccessView = new ResultSuccessView(resultModel, gameModel, res);
        resultSuccessView.onReStartGameButtonClick = () => {
          Application.showGame();
        };
        changeScreen(resultSuccessView.element);
      });
    });
  }

  static showError(error) {
    const errorView = new ErrorView(error);
    changeScreen(errorView.element);
  }
}
