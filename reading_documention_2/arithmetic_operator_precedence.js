// 4 * 5 + 3 ** 2 / 10;
// () = precedence

// step 1)  4 * 5 + (3 ** 2) / 10;
// step 2) -> (4 * 5) + 9 / 10
// step 3) --> 20 + (9 / 10)
// step 4) - -->  (20 + 0.9)
// step 5) -- --> 20.09

let arithmetic = 4 * 5 + 3 ** 2 / 10;
console.log(arithmetic);
