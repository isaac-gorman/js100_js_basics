let calculateBMI = (heightCentimeters, weightInKilograms) => {
  let heightInMeters = heightCentimeters / 100;
  let bmi = weightInKilograms / heightInMeters ** 2;
  return bmi.toFixed(2);
};

console.log(calculateBMI(180, 80)); // "24.69"
