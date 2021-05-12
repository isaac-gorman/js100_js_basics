let newArray = ["fish", "and", "chips"];
console.log(newArray[1]);

let methodFilter = (arr) => arr.filter((element) => element === "and").join();
console.log(methodFilter(newArray));

let methodFind = (arr) => arr.find((element) => element === "and");
console.log(methodFind(newArray));
