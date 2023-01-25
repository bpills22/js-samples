let raceNumber = Math.floor(Math.random() * 1000);
let earlyReg = true;
let runnerAge = 18;

if(earlyReg && runnerAge > 18) {
  raceNumber += 1000;
}

if(earlyReg && runnerAge > 18) {
  console.log(`Your race time is 09:30am. Your number is ${raceNumber}`);
} else if(!earlyReg && runnerAge > 18) {
  console.log(`Your race time is 11:00am. Your number is ${raceNumber}`);
}
else if(runnerAge < 18) {
  console.log(`Your race time is 12:30pm. Your race number is ${raceNumber}`);
}
else {
  console.log('Please come the Registration Desk when you arrive.')
}
