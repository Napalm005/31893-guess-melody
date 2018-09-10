import WelcomeView from './welcome-view';
import GameScreen from './game-screen.js';
import GameModel from './game-model.js';
import ResultSuccessView from "./result-success-view";
import {changeScreen} from './util';

export default class Application {

  static showWelcome() {
    const welcomeView = new WelcomeView();
    welcomeView.onStartGameButtonClick = () => {
      Application.showGame();
    };
    changeScreen(welcomeView.element);
  }

  static showGame() {
    const gameScreen = new GameScreen(new GameModel());
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
}
