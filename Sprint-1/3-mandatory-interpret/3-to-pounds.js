const penceString = "399p"; //initializes a string variable with the value "399p"

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
); //Set the variable penceStringWithoutTrailingP by using substring() return the string from index 0 to -1, which returns 399. In between, it used .length to count the number of elements of penceString.

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); // use the padStart(targetLength, padString) to pads the string of 0 from start to make it 3-digit length. It assign the variable paddedPenceNumberString a value of 3 digits, in this case, it returns 399.
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
); // using substring to assign the variable pounds of the value the first digit of variable paddedPenceNumberString. It returns 3.

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0"); // According to the values returned above, variable pence is assigned to 399.substring(1).padEnd(2, "0"), after substring it is 99.padEnd(2,"0"), and then it is 99. So the pence is 99.

console.log(`£${pounds}.${pence}`); //The result will be 3.99

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initializes a string variable with the value "399p"
