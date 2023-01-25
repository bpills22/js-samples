function multiplyByNineFifths(number) {
  return number * (9/5);
};

function getFahrenheit(celsius) {
  return Math.floor(multiplyByNineFifths(celsius)) + 32;
};

console.log(getFahrenheit(-26)); 
