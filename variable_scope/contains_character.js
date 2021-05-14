// Using regular expressions
let byteSequence = "TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu";
let regex = /x/;
// test() -> returns true or false
console.log(regex.test(byteSequence));
// search() -> return index
console.log(byteSequence.search(regex));

// Using includes() method
console.log(byteSequence.includes("x"));
// Using -> return index to return the character
console.log(
  `${
    byteSequence[byteSequence.search(regex)]
  }: is located at ${byteSequence.search(regex)}`
);

// reversing the the string and finding the its index
console.log(byteSequence.toLowerCase().split("").sort().join("").search(regex));
