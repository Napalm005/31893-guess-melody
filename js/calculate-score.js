export const calculateScore = (responseArr, lives) => {
  if (!Array.isArray(responseArr)) {
    throw new Error(`responseArr should be Array`);
  }
  if (typeof lives !== `number`) {
    throw new Error(`lives should be of type number`);
  }
  if (lives < 0) {
    throw new Error(`lives should not be negative value`);
  }

  let totalScore = 0;
  responseArr.forEach((response) => {
    if (response.result) {
      if (response.time < 30000) {
        totalScore += 2;
      } else {
        totalScore++;
      }
    } else {
      totalScore -= 2;
    }
  });

  if (responseArr.length < 3) {
    return -1;
  }
  return totalScore;
};
