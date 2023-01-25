const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
}

// Write your code below
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;

is2p2();

console.log(is2p2.name);
//prints: checkThatTwoPlusTwoEqualsFourAMillionTimes

//reduce
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);

return accumulator + currentValue;
}, 10);

console.log(newSum);

//
const arrayOfNumbers = [1, 2, 3, 4];

const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
  return accumulator * currentValue;
});

console.log('Multiplied together, you get ' + sum);

//
const randomNumbers = [2, 16, 24, 45, 67];
const filteredArray = randomNumbers.filter(n => {
  return n > 16;
});

console.log(filteredArray);
//prints [ 24, 45, 67 ]
