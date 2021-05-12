// console.log(greeting); // --> "Hello world!"

let greeting = "Hello world!";
//

let repeat = (numberOfRepeats, word) => {
  let finalString = "";
  for (let i = 0; i < numberOfRepeats; i++) {
    // console.log(word);
    finalString += word;
  }
  console.log(finalString);
};

// repeat(3, "ha"); // 'hahaha'
// repeat(3, "la"); // 'lalala'

let poem = "A pirate I was meant to be!\nTrim the sails and roam the sea!";
// console.log(poem);

let string1 = "Polar Bear";
let string2 = "Polar bear";
let string3 = "Penguin";

console.log(
  string1.toLocaleLowerCase == string2.toLocaleLowerCase ? true : false
);
