const preprocessGenreAnswers = (answers) => {
  const newAnswers = new Set();
  answers.forEach((answer) => {
    newAnswers.add(answer);
  });
  return newAnswers;
};

let rightArtist;
const preprocessArtistAnswers = (answers) => {
  const newAnswers = new Set();
  answers.forEach((answer) => {
    if (answer.isCorrect) {
      rightArtist = answer.title;
    }
    answer = {
      image: answer.image.url,
      artist: answer.title,
      name: (answer.name = `Здесь должно быть название песни`)
    };
    newAnswers.add(answer);
  });
  return newAnswers;
};

export const adaptServerData = (data) => {
  for (const level of data) {
    if (level.type === `genre`) {
      level.answers = preprocessGenreAnswers(level.answers);
    } else if (level.type === `artist`) {
      level.answers = preprocessArtistAnswers(level.answers);
      level.artist = rightArtist;
    }
  }
  return data;
};
