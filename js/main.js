import {INITIAL_GAME, levels} from './game-data.js';
import WelcomeView from "./welcome-view";
import {setTimer} from "./change-game-state";
import {screen} from "./screen";
import {changeScreen} from './util.js';

const welcomeView = new WelcomeView();
welcomeView.onStartGameButtonClick = () => {
  screen(INITIAL_GAME, levels);
  setTimer(INITIAL_GAME.time);
};
changeScreen(welcomeView.element);
