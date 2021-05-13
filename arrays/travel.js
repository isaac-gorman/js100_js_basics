let destinations = [
  "Prague",
  "London",
  "Sydney",
  "Belfast",
  "Rome",
  "Aruba",
  "Paris",
  "Bora Bora",
  "Barcelona",
  "Rio de Janeiro",
  "Marrakesh",
  "New York City",
];

let check = (city, arr) => arr.filter((word) => word === city).length === 1;

console.log(check("Austin", destinations));
