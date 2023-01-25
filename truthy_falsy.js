let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}

//this prints that you started since non-zero evals to true

let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

//this prints the 'else' string because value is null and falsy

//more examples//
let tool = '';

let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);
//prints 'The pen is mightier than the sword'

//whereas..
let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

//prints 'The marker is mightier than the sword'.
