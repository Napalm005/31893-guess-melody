'use strict';

const RIGHT_ARROW = 37;
const LEFT_ARROW = 39;

const mainElement = document.querySelector(`section.main`);

const selectSlide = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element.cloneNode(true));
};

const screens = Array.from(document.querySelectorAll(`template`)).map((it) => it.content);

let current = 0;
const select = (index) => {
  index = index < 0 ? screens.length - 1 : index;
  index = index >= screens.length ? 0 : index;
  current = index;
  selectSlide(screens[current]);
};

document.addEventListener(`keydown`, (e) => {
  switch (e.keyCode) {
    case RIGHT_ARROW:
      select(current + 1);
      break;
    case LEFT_ARROW:
      select(current - 1);
      break;
  }
});

select(0);


const appEl = document.querySelector(`.app`);
let arrows = document.createElement(`div`);
arrows.classList.add(`arrows__wrap`);
arrows.innerHTML = `
      <style>
        .arrows__wrap {
          position: absolute;
          top: 135px;
          left: 50%;
          margin-left: -56px;
        }
        .arrows__btn {
          background: none;
          border: 2px solid black;
          padding: 5px 20px;
        }
      </style>
      <button class="arrows__btn"><-</button>
      <button class="arrows__btn">-></button>`;

arrows.addEventListener(`click`, (e) => {
  if (e.target.className === `arrows__btn`) {
    switch (e.target.innerText) {
      case `->`:
        select(current + 1);
        break;
      case `<-`:
        select(current - 1);
        break;
    }
  }
});

appEl.appendChild(arrows);
