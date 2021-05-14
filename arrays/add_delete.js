let energy = ["fossil", "solar", "wind", "tidal", "fusion"];

// causes mutations to original array -------------------------------------------
let addDeleteMutate = (arr, deleteWord, pushWord) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === deleteWord) {
      arr.splice(i, 1);
    }
  }
  arr.push(pushWord);
  return arr;
};
console.log(addDeleteMutate(energy, "fossil", "geothermal")); // [ 'solar', 'wind', 'tidal', 'fusion', 'geothermal' ]
console.log(addDeleteMutate(energy, "tidal", "hydro")); // [ 'solar', 'wind', 'fusion', 'geothermal', 'hydro' ]
// --------------------------------------------------------------------------------

// DOES NOT cause mutations -----------------------------------------------------
let addDeleteNoneMutate = (arr, deleteWord, pushWord) => {
  let newArr = arr.filter((element) => {
    return element !== deleteWord;
  });
  newArr.push(pushWord);
  return newArr;
};
console.log(addDeleteNoneMutate(energy, "fossil", "geothermal")); // [ 'solar', 'wind', 'tidal', 'fusion', 'geothermal' ]
console.log(addDeleteNoneMutate(energy, "tidal", "hydro")); // [ "fossil", 'solar', 'wind', 'fusion', 'hydro' ]
// --------------------------------------------------------------------------------
