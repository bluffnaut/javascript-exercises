const convertToCelsius = function(fahrenheit) {
  const celsius = ((fahrenheit - 32) * (5/9));
  const celsiusRounded = Number(celsius.toFixed(1));
  return celsiusRounded;
};

convertToCelsius(32);

const convertToFahrenheit = function(celcius) {
  const fahrenheit = ((celcius * (9/5)) + 32);
  const fahrenheitRounded = Number(fahrenheit.toFixed(1));
  return fahrenheitRounded;
};

convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
