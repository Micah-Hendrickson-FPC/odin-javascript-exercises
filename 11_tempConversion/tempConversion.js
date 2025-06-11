const convertToCelsius = function(fahr) {
  //Converting from f to c is (f - 32) * 5 / 9
  let cels = Math.round(((fahr - 32) * 5 / 9) * 10) /10;
  return cels;
};

const convertToFahrenheit = function(cels) {
  //Converting from c to f is c * 9 / 5 + 32
  let fahr = Math.round((cels * 9 / 5 + 32) * 10) / 10;
  return fahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
