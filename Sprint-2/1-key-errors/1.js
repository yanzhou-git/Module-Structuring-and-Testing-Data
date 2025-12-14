// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here: the parameter variable can not be assigned inside the function, it suppose to be defined before the function. The console log is not calling the function instead the variable. 

// Try playing computer with the example to work out what is going on

/* function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
} 

console.log(decimalNumber); */

// =============> write your explanation here

// Finally, correct the code to fix the problem
// =============> write your new code here
const decimalNumber = 0.5;

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(decimalNumber));