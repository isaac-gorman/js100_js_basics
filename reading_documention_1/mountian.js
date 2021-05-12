let strA = "mountain";
let upperCaseFirstLetter = (str) => {
  let newArray = str.split("");
  newArray[0] = newArray[0].toUpperCase();
  let newString = newArray.join("");
  return newString;
};

console.log(upperCaseFirstLetter(strA));
