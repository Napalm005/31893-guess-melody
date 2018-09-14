export const changeScreen = (element) => {
  const mainElement = document.querySelector(`section.main`);
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};

export const getElementFromTemplate = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();
  return wrapper;
};

export const getRandomElFromArray = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const declOfNum = (number, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
};

export const toggleClass = (el, classOne, classTwo) => {
  if (el.classList.contains(classOne)) {
    el.classList.add(classTwo);
    el.classList.remove(classOne);
  } else {
    el.classList.add(classOne);
    el.classList.remove(classTwo);
  }
};

export const pauseAudioPlaying = () => {
  for (let audio of document.querySelectorAll(`audio`)) {
    audio.pause();
  }
};
