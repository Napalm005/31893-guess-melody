const mainElement = document.querySelector(`section.main`);

export default (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};
