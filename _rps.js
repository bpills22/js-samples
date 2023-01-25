const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else
    console.log('Please enter either paper, rock or scissors.');
}

//test the function
//console.log(getUserChoice('book'));

const getComputerChoice = () => {
 const randomNumber = Math.floor(Math.random() * 3);
 switch(randomNumber) {
   case 0:
   return 'rock';
   break;
   case 1:
   return 'paper';
   break;
   case 2:
   return 'scissors';
   break;
 }
};

//test it out
//console.log(getComputerChoice());

const determineWinner = (getUserChoice, getComputerChoice) => {
if (getUserChoice === getComputerChoice) {
  return 'Tie Game! Play again!';
}
  if (getUserChoice === 'rock') {
    if (getComputerChoice === 'paper') {
    return 'Computer Wins! Paper covers Rock!';
  } else {
    return 'User Wins! Rock smashes Scissors!';
  }
}
if (getUserChoice === 'paper') {
  if (getComputerChoice === 'scissors') {
    return 'Computer Wins! Scissors cut Paper!';
  } else {
    return 'User Wins! Paper covers Rock!';
  }
}
if (getUserChoice === 'scissors') {
  if (getComputerChoice === 'rock') {
    return 'Computer Wins! Rock smashes Scissors!';
  } else {
    return 'User Wins! Scissors cut Paper!';
  }
}
if (getUserChoice === 'bomb') {
  return 'Kaboom! User Wins!';
}
};

//Testing the logic
//console.log(determineWinner('rock', 'scissors'));
//console.log(determineWinner('paper', 'scissors'));
//console.log(determineWinner('rock', 'rock'));

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(`You threw:  ${userChoice}`);
  console.log(`The computer threw:  ${computerChoice}`);

console.log(determineWinner(userChoice, computerChoice));
};

playGame();
