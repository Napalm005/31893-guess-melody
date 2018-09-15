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
  let successPercent = (userIndex / usersResutsAdapted.length) * 100;
  let number = declOfNum(usersResutsAdapted.length, [`игрока`, `игроков`, `игроков`]);
  return `Вы заняли ${usersResutsAdapted.length - userIndex} место из ${usersResutsAdapted.length} ${number}. Это лучше, чем у ${Math.round(successPercent)}% игроков`;
};

resultDisplay({
  responses: [
    {
      result: true,
      time: 40000
    }
  ],
  lives: 2,
  time: 1000 * 60 * 2,
  level: 0,
  fastResponses: 0
}, [{scores: 2}, {scores: 2}, {scores: 3}, {scores: 4}, {scores: 5}, {scores: 1}]);
