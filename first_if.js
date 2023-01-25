let sale = true;

sale = false;

if (sale) {
console.log('Time to buy!');
}

//If sale evals to false, the message won't print. 'Time to buy' only prints when sale evals to true.
// the elseif

let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.');
}

// more examples
let hungerLevel = 7;
if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}

// Another example
let mood = 'sleepy';
let tirednessLevel = 9;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}
