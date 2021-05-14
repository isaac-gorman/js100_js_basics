// dot notation

let ocean1 = {};
let prefix1 = "Indian";

ocean1.prefix1 = "Pacific";

console.log(ocean1); // {prefix1: 'Pacific'}

// bracket notation
let ocean2 = {};
let prefix2 = "Indian";

ocean2[prefix2] = "Pacific";

console.log(ocean2); // {'Indian': 'Pacific'}
