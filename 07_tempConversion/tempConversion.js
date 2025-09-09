const convertToCelsius = function(fahrenheit) {
  const celcius = ((fahrenheit - 32) * (5/9));
  return celcius;
};

convertToCelcius(32);

const convertToFahrenheit = function(celcius) {
  const fahrenheit = ((celcius * (9/5)) + 32);
  return fahrenheit;
};

convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
