const cards = ["\u2666", "\u2660", "\u2665", "\u2663"];

let currentCard;
let i = 0;
while (currentCard !== '\u2660') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
  i++;
}

if (i===1){
    console.log("wow you soo lucky, you picked \u2660 right away!");
} else {
  console.log(`It took you ${i} cards to draw a \u2660.`);
}

//
const cards = ['diamond', 'spade', 'heart', 'club'];

// Alternate way
let currentCard;
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}
