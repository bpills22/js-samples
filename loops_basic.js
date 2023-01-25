//prints all numbers from 5 to 10
for (let counter = 5; counter < 11; counter++) {
  console.log(counter);
}

//to do this going backwards use the --
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}

for (let counter = 10; counter >= 5; counter--) {
  console.log(counter);
}

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++ ) {
  console.log('I would love to visit ' + vacationSpots[i]);
}
//prints
//I would love to visit Bali
//I would love to visit Paris
//I would love to visit Tulum

//nested loop example
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};

//nested loop
for (let outer = 0; outer < 2; outer += 1) {
  for (let inner = 0; inner < 3; inner += 1) {
    console.log(`${outer}-${inner}`);
  }
}

/*
Output:
0-0
0-1
0-2
1-0
1-1
1-2
*/

//loop through the list of common names and push the commons to the new
const bobsFollowers = ['Jim', 'Tom', 'Jill', 'Lisa'];
const tinasFollowers = ['Jill', 'Alex', 'Tom'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};

// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}

// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}

//do while
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
  cupsAdded++;
  console.log('We added ' + cupsAdded + ' cups of sugar.')
}
while (cupsAdded < cupsOfSugarNeeded)


//another do-while example
x = 0
i = 0

do {
  x = x + i;
  console.log(x)
  i++;
} while (i < 5);

// Prints: 0 1 3 6 10

//breaks
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.') {
break;
  }
}

console.log("And if you don't know, now you know.");

//once this gets the array element you want, it quits

//one more example
let socialMedia = ['Instagram', 'Facebook', 'Twitter'];

for (let socialMediaIndex = 0; socialMediaIndex < socialMedia.length; socialMediaIndex++) {
    console.log(socialMedia[socialMediaIndex]);
}

//nested for loops - this will run the outer loop, then do all inner loops, then outer once, followed by all inners c 1 2 3 a 1 2 3 t 1 2 3
const animal = 'cat';

for (let i = 0; i < animal.length; i++) {
  console.log(animal[i]);
  for (let j = 1; j < 4; j++) {
    console.log(j);
  }
}

//Reverse Loop

const items = ['apricot', 'banana', 'cherry'];

for (let i = items.length - 1; i >= 0; i -= 1) {
  console.log(`${i}. ${items[i]}`);
}

// Prints: 2. cherry
// Prints: 1. banana
// Prints: 0. apricot

let guns = ['HK' , 'Springfield', 'Benelli'];

for (let i = 0; i < guns.length; i++) {
  console.log(guns[i]);
}
