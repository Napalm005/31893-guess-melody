import selectSlide from "./select-slide";
import gameGenre from "./game-genre";
import gameArtist from "./game-artist";

export const screen = (state, levelsArr) => {
  switch (levelsArr[state.level].typeLevel) {
    case `genre`:
      selectSlide(gameGenre());
      break;
    case `artist`:
      selectSlide(gameArtist());
      break;
  }
};

