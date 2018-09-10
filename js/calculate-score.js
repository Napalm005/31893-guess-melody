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

  const totalScore = responseArr.reduce((totalScores, currentScore) => {
    if (currentScore.result === true) {
      if (currentScore.time > 30000) {
        return totalScores + 1;
      }
      return totalScores + 2;
    }
    return totalScores - 2;
  }, 0);

  if (responseArr.length < 3) {
    return -1;
  }
  return totalScore;
};
