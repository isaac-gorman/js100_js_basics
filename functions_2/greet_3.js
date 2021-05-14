let greeting = () => {
  return "Good morning";
};

let recipient = () => {
  return "Launch School 🚀 ";
};

let greet = () => {
  return greeting() + ", " + recipient();
};
console.log(greet());
