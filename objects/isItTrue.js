let obj = {
  num: 42,
  "property name": "string value",
  true: true,
  fun: function () {
    console.log("Harr Harr!");
  },
};

for (let prop in obj) {
  if (prop === "true") {
    console.log("It's true!");
  }
  console.log("🐒");
}
