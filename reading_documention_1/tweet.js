let randomTweet =
  "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = randomTweet.split("");
let isValid = words.length < 140;

console.log(words.length);
console.log(isValid);
console.log(randomTweet.length);

console.log("isArray? " + Array.isArray(words));
