// Using regex
let regex = / /g;
let isBlank = (str) => console.log(str.length === 0 || regex.test(str));
// isBlank("mars"); // false
// isBlank("  a"); // true
// isBlank(""); // true
// isBlank("         "); // true

// Using String.prototype.trim() method
let isBlankTrim = (str) => console.log(str.trim().length === 0);
isBlankTrim("mars"); // false
isBlankTrim("  a"); // true
isBlankTrim(""); // true
isBlankTrim("         "); // true
