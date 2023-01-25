const hobbies = ['lock', 'stock', 'barrel'];
console.log(hobbies);
//prints
// [ 'lock', 'stock', 'barrel' ]

//updating an array element:
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

seasons[3] = 'Autumn';
console.log(seasons);
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']

//more examples
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments[0]);

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);

//length - returns 3
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);

//.pop() and .push() mutate the array on which they’re called.

//PUSH to update or create a new array
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('feed Eva', 'empty litter box');
console.log(chores);

//using the POP example
const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();

console.log(newItemTracker);
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2

//prints out only 4 of 5
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop();
console.log(chores);

//removes 'orange juice' - the 1st element - using SHIFT
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);

//save the location of something and log it.
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

//mutation
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement(newArr) {
  newArr.pop();
}
removeElement(concept);

console.log(concept);

//prints  
[ 'arrays', 'can', 'be', 'MUTATED' ]
[ 'arrays', 'can', 'be' ]
