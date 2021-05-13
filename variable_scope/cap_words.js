let launchString = "launch school tech & talk";
let quoteString = "You miss 100% of the shots you don't take";
let titleCase = (str) => {
  return str
    .split(" ") // converts to array
    .map((element) => element[0].toUpperCase() + element.slice(1)) // capitalizes letter and concatenates string
    .join(" "); // joins the array back to a string
};
console.log(titleCase(launchString)); // -> Launch School Tech & Talk
console.log(titleCase(quoteString)); // -> You Miss 100% Of The Shots You Don't Take
