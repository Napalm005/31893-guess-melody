import {declOfNum} from "./util.js";
import {calculateScore} from "./calculate-score";

export const resultDisplay = (userResult, usersResuts = []) => {
  const usersResutsAdapted = usersResuts.map((result) => {
    return result.scores;
  });
  if (userResult.time === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  } else if (userResult.lives === 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }
  const userResultScores = calculateScore(userResult.responses, userResult.lives);
  if (userResultScores === -1) {
    return `Ответов меньше 10`;
  }
  usersResutsAdapted.sort((a, b) => {
    return a - b;
  });
  const userIndex = usersResutsAdapted.indexOf(userResultScores);
  const successPercent = (userIndex / usersResutsAdapted.length) * 100;
  const number = declOfNum(usersResutsAdapted.length, [`игрока`, `игроков`, `игроков`]);
  return `Вы заняли ${usersResutsAdapted.length - userIndex} место из ${usersResutsAdapted.length} ${number}. Это лучше, чем у ${Math.round(successPercent)}% игроков`;
};
