let removeLastChar = (str) => {
  let lastCharIndex = str.length - 1;
  return str.slice(0, lastCharIndex);
};

console.log(
  removeLastChar("ciao!") // 'ciao'
);

console.log(
  removeLastChar("hello") // 'hell'
);
