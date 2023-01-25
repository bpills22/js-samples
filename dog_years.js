const myAge = 48;
//creates my age as a variable

let earlyYears = 2;
//creates a new value that will change

earlyYears *= 10.5;
//re-assings earlyYears to 10.5 x 2

let laterYears = myAge - 2;
//create a new variable since first 2 yrs are accounted for //

laterYears *= 4;
//calculate the number of dog years accounted for by your later years

//console.log(earlyYears);
//console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears;
//calculates my age in dog years.

let myName = 'Brian'.toLowerCase();
//creates a name variable and converts to lower-case

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
//string interpolation
