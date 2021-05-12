let weatherConditions = ["sunny", "rainy", "snow"];
let todaysWeather =
  weatherConditions[Math.round(Math.random()) + Math.round(Math.random())];

if (todaysWeather === "sunny") {
  console.log("It's a beautiful day!");
} else if (todaysWeather === "rainy") {
  console.log("Grab your umbrella.");
} else {
  console.log("Let's stay inside.");
}
