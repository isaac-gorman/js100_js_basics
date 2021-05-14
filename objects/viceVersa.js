let nestedArray = [
  ["title", "Duke"],
  ["name", "Nukem"],
  ["age", 33],
];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }
let person = {};

for (let i = 0; i < nestedArray.length; i++) {
  let pair = nestedArray[i];
  // loop over each array
  console.log(pair);
  person[nestedArray[i][0]] = nestedArray[i][1];
  // assign the key value pair
}

console.log(person);
