let weatherConditions = ["sunny", "rainy", "snowy"];
let todaysWeather =
  weatherConditions[Math.round(Math.random()) + Math.round(Math.random())];

switch (todaysWeather) {
  case "sunny":
    console.log(`It's a beautiful day! It's ${todaysWeather}`);
    break;
  case "rainy":
    console.log(`Grab your umbrella! It's ${todaysWeather}`);
    break;
  case "snowy":
    console.log(`Let's stay inside! It's ${todaysWeather}`);
    break;
  default:
    console.log("Hmm error occurred, go outside and check for yourself");
}
