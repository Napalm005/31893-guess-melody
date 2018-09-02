import {declOfNum} from './util.js';
import {newGameState} from './change-game-state';

export const resultDisplay = (usersResuts, userResult) => {
  if (userResult.timer === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  } else if (userResult.lives === 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }
  const userResultScores = userResult.responses.reduce((totalScores, currentScore) => {
    if (currentScore.result === true) {
      if (currentScore.time > 30000) {
        return totalScores + 1;
      } else {
        newGameState.fastResponses++;
        return totalScores + 2;
      }
    } else {
      newGameState.fastResponses--;
      return totalScores - 2;
    }
  }, 0);
  usersResuts.push(userResultScores);
  usersResuts.sort((a, b) => {
    return a - b;
  });
  const userIndex = usersResuts.indexOf(userResultScores);
  let successPercent = userIndex / usersResuts.length * 100;
  let number = declOfNum(usersResuts.length, [`игрока`, `игроков`, `игроков`]);
  return `Вы заняли ${usersResuts.length - userIndex} место из ${usersResuts.length} ${number}. Это лучше, чем у ${Math.round(successPercent)}% игроков`;
};
