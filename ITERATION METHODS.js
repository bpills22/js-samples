const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruits => console.log(`I want to eat a ${fruits}.`));
//prints 4 lines of the fruits in the array

//map function
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animals => {
  return animals[0];
})

console.log(secretMessage.join(''));
//prints HelloWorld


const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(bigNumbers => {
  return bigNumbers / 100;
});

console.log(smallNumbers);
//prints [ 1, 2, 3, 4, 5 ]

//.filter
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(number => number < 25);

console.log(smallNumbers);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;

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
})

console.log(longFavoriteWords);

//FIND INDEX
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];


const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});

//console.log(foundAnimal);
//it's in position 7

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});

//more array methods EVERY and SOME
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some(word => {
  return word.length < 6;
}));

//prints 'true'

// Use filter to create a new array
const interestingWords = words.filter((word) => {
  return word.length > 5 });


console.log(interestingWords.every((word) => {
  return word.length > 5
} ));
//prints 'true'

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);

Have you visited Orlando?
Have you visited Dubai?
Have you visited Edinburgh?
Have you visited Chennai?
Have you visited Accra?
Have you visited Denver?
Have you visited Eskisehir?
Have you visited Medellin?
Have you visited Yokohama?
CODECADEMY

//forEach example
namesArray.forEach(name => console.log('Welcome, ' + name + '!'));


//
const randomNumbers = [1, 123, 25, 90, 3543, 43];
const foundElement = randomNumbers.findIndex(num => num > 200);
//returns '4' because the 4th element in the array is greater than 200

//iterate in reverse
const drumpf = ['person', 'woman', 'man',
'camera', 'tv'];

for (let i = drumpf.length - 1; i >= 0; i -= 1) {
  console.log(`${i}. ${drumpf[i]}`);

}
//iterating forward
for (let i = 0; i < drumpf.length; i++) {
  console.log(drumpf[i]);
}
