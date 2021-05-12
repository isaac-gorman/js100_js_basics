let greeting = "Aloha 🏖 !! ";

let forLoopGreet = (greeting) => {
  for (let i = 1; i <= 3; i++) {
    console.log(greeting + i);
  }
};

// forLoopGreet(greeting);

let whileLoopGreet = (greeting) => {
  let count = 1;
  while (count <= 3) {
    console.log(greeting + count);
    count++;
  }
};

// whileLoopGreet(greeting);
