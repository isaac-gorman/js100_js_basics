let person = {
  title: "Duke",
  name: "Nukem",
  age: 33,
};

let output = [];

for (let props in person) {
  //   console.log("props ", props);
  //   console.log("person[props] ", person[props]);
  output.push([props, person[props]]);
}

console.log(output);

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

// using Object.entries()

let newOutput = Object.entries(person);
console.log(newOutput);
