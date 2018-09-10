import {changeScreen} from "./util";
import GameGenreVeiw from "./game-genre-view";
import GameArtistVeiw from "./game-artist-view";
import {nextLevel, checkGameContinue, pausePlaying, resetGame} from "./change-game-state";
import HeaderView from "./header";

export const screen = (state, levelsArr) => {
  switch (levelsArr[state.level].typeLevel) {
    case `genre`:
      const gameGenre = new GameGenreVeiw(levelsArr, state);
      gameGenre.onResponseSubmit = () => {
        pausePlaying();
        gameGenre.checkGenreResponse();
        state = nextLevel(state);
        gameGenre.submitButton.disabled = true;
        [...gameGenre.element.querySelectorAll(`.game__input:checked`)].forEach((item) => {
          item.checked = false;
        });
        checkGameContinue(state);
      };
      changeScreen(gameGenre.element);
      break;
    case `artist`:
      const gameArtist = new GameArtistVeiw(levelsArr, state);
      gameArtist.onResponseCheck = (e) => {
        pausePlaying();
        gameArtist.checkArtistResponse(e.target, state);
        state = nextLevel(state);
        checkGameContinue(state);
      };
      changeScreen(gameArtist.element);
      break;
  }

  const game = document.querySelector(`.game`);
  const headerView = new HeaderView(state);
  headerView.onGameBackBtnClick = () => {
    resetGame();
  };
  game.insertBefore(headerView.element, game.firstChild);
};

