// v1
// let isBlank = (str) => console.log(str === "" ? true : false);
// v2
// let isBlank = (str) => console.log(str === "");
// v3
let isBlank = (str) => console.log(str.length === 0);

isBlank("mars"); // false
isBlank("  "); // false
isBlank(""); // true
