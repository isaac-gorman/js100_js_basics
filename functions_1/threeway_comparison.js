let compareByLength = (str1, str2) => {
  if (str1.length === str2.length) {
    console.log(0);
  } else if (str1.length > str2.length) {
    console.log(1);
  } else {
    console.log(-1);
  }
};

compareByLength("patience", "perseverance"); // -1
compareByLength("strength", "dignity"); //  1
compareByLength("humor", "grace"); //  0
compareByLength("abc", "abc"); //  0
compareByLength("abcd", "abc"); //  0
compareByLength("abcd", "abcde"); //  0
