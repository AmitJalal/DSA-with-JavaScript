const getScore = (left, right) => {
  let counter = 0;

  for (let i = 0; i < left.length; i += 1) {
    if (left[i] === '0') counter += 1;
  }

  for (let i = 0; i < right.length; i += 1) {
    if (right[i] === '1') counter += 1;
  }

  return counter;
};

const maxScore = (s) => {
  const scores = [];

  for (let i = 0; i < s.length - 1; i += 1) {
    const left = s.slice(0, i + 1);
    const right = s.slice(i + 1, s.length);

    scores.push(getScore(left, right));
  }

  return Math.max(...scores);
};

export default maxScore;
