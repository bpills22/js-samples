const getSleepHours = day => {

switch (day) {
  case 'monday':
  return 12
  break;
  case 'tuesday':
  return 12
  break;
  case 'wednesday':
  return 6.5
  break;
  case 'thursday':
  return 11
  break;
  case 'friday':
  return 4
  break;
  case 'saturday':
  return 9.5
  break;
  case 'sunday':
  return 10
  break;
  default:
  return 'Error! Does Not Compute!'}
};

//console.log(getSleepHours('tuesday'));

const getActualSleepHours = () => {
 return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours ('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

};

//console.log(getActualSleepHours());

const getIdealSleepHours = ()  => {
  let idealHours = 8;
  return idealHours * 7;
};
//console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if(actualSleepHours === idealSleepHours) {
  console.log('You got the perfect amount of sleep!');
} else if (actualSleepHours > idealSleepHours) {
  console.log('You got ' + (actualSleepHours - idealSleepHours) + ' more hours sleep than needed!');
} else if (actualSleepHours < idealSleepHours) {
  console.log('You need to get ' + (idealSleepHours - actualSleepHours) + ' hours more sleep!!');
} else {
  console.log('Error! Something went wrong. Please check your code.');
}
 };

calculateSleepDebt();
