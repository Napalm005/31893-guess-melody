import {declOfNum} from './util.js';

export const resultDisplay = (usersResuts, userResult) => {
  if (userResult.timer === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  } else if (userResult.lives === 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }
  usersResuts.push(userResult.scores);
  usersResuts.sort((a, b) => {
    return a - b;
  });
  const userIndex = usersResuts.indexOf(userResult.scores);
  let successPercent = userIndex / usersResuts.length * 100;
  let number = declOfNum(usersResuts.length, [`игрока`, `игроков`, `игроков`]);
  return `Вы заняли ${usersResuts.length - userIndex} место из ${usersResuts.length} ${number}. Это лучше, чем у ${Math.round(successPercent)}% игроков`;
};
