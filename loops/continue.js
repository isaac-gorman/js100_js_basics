let cities = [
  "Istanbul",
  "Los Angeles",
  "Tokyo",
  null,
  "Vienna",
  null,
  "London",
  "Beijing",
  null,
];

let skipNulls = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === null) {
      continue;
    }
    console.log(arr[i].length);
  }
};

skipNulls(cities);
