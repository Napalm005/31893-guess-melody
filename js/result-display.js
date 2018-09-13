import {declOfNum} from './util.js';
import {calculateScore} from './calculate-score';

export const resultDisplay = (usersResuts, userResult) => {
  const usersResutsAdapted = usersResuts.map((result) => {
    return result.scores;
  });
  if (userResult.time === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  } else if (userResult.lives === 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }
  const userResultScores = calculateScore(userResult.responses, userResult.lives);
  usersResutsAdapted.push(userResultScores);
  usersResutsAdapted.sort((a, b) => {
    return a - b;
  });
  const userIndex = usersResutsAdapted.indexOf(userResultScores);
  let successPercent = userIndex / usersResutsAdapted.length * 100;
  let number = declOfNum(usersResutsAdapted.length, [`игрока`, `игроков`, `игроков`]);
  return `Вы заняли ${usersResutsAdapted.length - userIndex} место из ${usersResutsAdapted.length} ${number}. Это лучше, чем у ${Math.round(successPercent)}% игроков`;
};
