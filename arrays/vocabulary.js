let vocabulary = [
  ["happy", "cheerful", "merry", "glad"],
  ["tired", "sleepy", "fatigued", "drained"],
  ["excited", "eager", "enthused", "animated"],
];

// outer for loop
// for (i = 0; i < vocabulary.length; i++) {
//   // inner for loop
//   for (j = 0; j < vocabulary[i].length; j++) {
//     console.log(vocabulary[i][j]);
//   }
// }

vocabulary.map((sub) => sub.map((element) => console.log(element)));

let vocabulary1 = [
  ["happy", "cheerful", "merry", "glad"],
  ["tired", "sleepy", "fatigued", "drained"],
  ["excited", "eager", "enthused", "animated"],
];
// vocabulary1.map((sub) => sub.forEach((i) => console.log(i)));

// Expected output:
// happy
// cheerful
// merry
// etc...
