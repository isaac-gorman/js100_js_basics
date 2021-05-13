let scores = [96, 47, 113, 89, 100, 102];
console.log(
  scores
    .filter((e) => e >= 100)
    .reduce((acc, crr) => {
      acc += crr;
      return acc;
    }, 0)
);
console.log(scores.filter((e) => e >= 100).length);
