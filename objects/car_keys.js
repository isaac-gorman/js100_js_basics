let vehicle = {
  manufacturer: "Tesla",
  model: "Model X",
  year: 2015,
  range: 295,
  seats: 7,
};

let keys = [];

for (let props in vehicle) {
  keys.push(props);
}

console.log(keys);

// Using Object.keys();

let newKeys = Object.keys(vehicle);
console.log(newKeys);
