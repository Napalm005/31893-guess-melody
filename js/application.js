import WelcomeView from './welcome-view';
import GameScreen from './game-screen.js';
import GameModel from './game-model.js';
import ResultSuccessView from "./result-success-view";
import ErrorView from "./error-view";
import {changeScreen, checkStatus} from './util';
import {adaptServerData} from './adapter.js';

let gameData;
export default class Application {

  static showWelcome() {
    const welcomeView = new WelcomeView();
    welcomeView.onStartGameButtonClick = () => {
      Application.showGame();
    };
    fetch(`https://es.dump.academy/guess-melody/questions`).then(checkStatus).then((response) => response.json()).then((data) => (gameData = adaptServerData(data))).then(() => changeScreen(welcomeView.element)).catch(Application.showError);
  }

  static showGame() {
    const gameScreen = new GameScreen(new GameModel(gameData));
    gameScreen.changeLevel();
    gameScreen.startGame();
  }

  static showResult(resultModel, gameModel) {
    const resultSuccessView = new ResultSuccessView(resultModel, gameModel);
    resultSuccessView.onReStartGameButtonClick = () => {
      Application.showGame();
    };
    changeScreen(resultSuccessView.element);
  }

  static showError(error) {
    const errorView = new ErrorView(error);
    changeScreen(errorView.element);
  }
}
