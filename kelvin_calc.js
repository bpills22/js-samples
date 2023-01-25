const kelvin = 263;
// sets Kelvin to 293

const celsius = kelvin - 273;
// sets Celsius to 273 less than Kelvin

let fahrenheit = celsius * (9 / 5) + 32;
// converts Celsius to Fahrenheit

let newton = celsius * (33 / 100);
// converts Celsius to Newton

fahrenheit = Math.floor(fahrenheit);
// re-assigns F value and rounds down to nearest whole num

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

console.log(`The temperature is ${newton} degrees Newton.`);
