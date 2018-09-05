import selectSlide from "./select-slide";
import GameGenreVeiw from "./game-genre-view";
import GameArtistVeiw from "./game-artist-view";
import {changeLevel, checkGameContinue, newGameState, pausePlaying} from "./change-game-state";

export const screen = (state, levelsArr) => {
  switch (levelsArr[state.level].typeLevel) {
    case `genre`:
      const gameGenre = new GameGenreVeiw(levelsArr, state);
      gameGenre.onResponseSubmit = () => {
        pausePlaying();
        gameGenre.checkGenreResponse();
        changeLevel(newGameState);
        gameGenre.submitButton.disabled = true;
        [...gameGenre.element.querySelectorAll(`.game__input:checked`)].forEach((item) => {
          item.checked = false;
        });
        checkGameContinue(newGameState);
      };
      selectSlide(gameGenre.element);
      break;
    case `artist`:
      const gameArtist = new GameArtistVeiw(levelsArr, state);
      gameArtist.onResponseCheck = (e) => {
        pausePlaying();
        gameArtist.checkArtistResponse(e.target, newGameState);
        changeLevel(newGameState);
        checkGameContinue(newGameState);
      };
      selectSlide(gameArtist.element);
      break;
  }
};

