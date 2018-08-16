import selectSlide from "./select-slide";
import welcome from "./welcome.js";

export default () => {
  const gameBack = document.querySelector(`.game__back`);
  gameBack.addEventListener(`click`, () => {
    selectSlide(welcome);
  });
};
