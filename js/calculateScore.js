
export const userState = {
  response: [
    {
      result: true,
      time: 20
    },
    {
      result: true,
      time: 40
    },
    {
      result: false,
      time: 20
    },
  ],
  lives: 3
};

export const calculateScore = (responseArr, livesRemain) => {

  let totalScore = 0;
  const userNewState = Object.assign({}, userState);

  userNewState.response = responseArr;
  userNewState.lives = livesRemain;

  responseArr.forEach((response) => {
    if (response.result) {
      if (response.time < 30) {
        totalScore = totalScore + 2;
      } else {
        totalScore++;
      }
    } else {
      totalScore = totalScore - 2;
    }
  });

  if (responseArr.length < 10) {
    return -1;
  }
  return totalScore;
};
