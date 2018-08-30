import selectSlide from "./select-slide";
import gameGenre from "./game-genre";
import gameArtist from "./game-artist";

export const screen = (state, levelsArr) => (levelsArr[state.level].genre) ? selectSlide(gameGenre) : selectSlide(gameArtist);
