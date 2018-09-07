import {changeScreen} from "./util";
import GameGenreVeiw from "./game-genre-view";
import GameArtistVeiw from "./game-artist-view";
import {nextLevel, checkGameContinue, gameState, pausePlaying} from "./change-game-state";

export const screen = (state, levelsArr) => {
  switch (levelsArr[state.level].typeLevel) {
    case `genre`:
      const gameGenre = new GameGenreVeiw(levelsArr, state);
      gameGenre.onResponseSubmit = () => {
        pausePlaying();
        gameGenre.checkGenreResponse();
        nextLevel(gameState);
        gameGenre.submitButton.disabled = true;
        [...gameGenre.element.querySelectorAll(`.game__input:checked`)].forEach((item) => {
          item.checked = false;
        });
        checkGameContinue(gameState);
      };
      changeScreen(gameGenre.element);
      break;
    case `artist`:
      const gameArtist = new GameArtistVeiw(levelsArr, state);
      gameArtist.onResponseCheck = (e) => {
        pausePlaying();
        gameArtist.checkArtistResponse(e.target, gameState);
        nextLevel(gameState);
        checkGameContinue(gameState);
      };
      changeScreen(gameArtist.element);
      break;
  }
};

