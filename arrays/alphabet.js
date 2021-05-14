let alphabet = "abcdefghijklmnopqrstuvwxyz";
let toArray = (str) => console.log(str.split(""));
toArray(alphabet);

console.log(
  Array.from(
    alphabet,
    (element, index) => `${element} is ${index + 1} in the alphabet`
  )
);
