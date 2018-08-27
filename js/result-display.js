export const resultDisplay = (usersResuts, userResult) => {
  let response = ``;

  if (userResult.timer === 0) {
    response = `Время вышло! Вы не успели отгадать все мелодии`;
  } else if (userResult.lives === 0) {
    response = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  } else {
    const array = [...usersResuts];
    array.push(userResult.scores);
    array.sort((a, b) => {
      return a - b;
    });
    const userIndex = array.indexOf(userResult.scores);
    let successPercent = userIndex === 0 ? 0 : (userIndex) / array.length * 100;
    response = `Вы заняли ${array.length - userIndex} место из ${array.length} игроков. Это лучше, чем у ${Math.round(successPercent)}% игроков`;
  }

  return response;
};
