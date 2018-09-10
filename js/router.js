import WelcomeView from './welcome-view';
import GameScreen from './game-screen.js';
import GameModel from './game-model.js';
import {changeScreen} from './util';

export default class Router {

  static showWelcome() {
    const welcomeView = new WelcomeView();
    welcomeView.onStartGameButtonClick = () => {
      Router.showGame();
    };
    changeScreen(welcomeView.element);
  }

  static showGame() {
    const gameScreen = new GameScreen(new GameModel());
    gameScreen.changeLevel();
    gameScreen.startGame();
  }
}

Router.showWelcome();