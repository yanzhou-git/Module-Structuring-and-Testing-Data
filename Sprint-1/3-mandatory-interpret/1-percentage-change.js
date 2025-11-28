carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 5 function calls of 3 functions: number(), replaceAll(), console.log().

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// It shows SyntaxError: missing ) after argument list, but shows "," is expected in line 5. turns out replaceAll("",""), it is missing the coma in between. It is showing missing ) means the JS doesn't understand the function, it is malformed.

// c) Identify all the lines that are variable reassignment statements
// Line 4, 5. It is reassigning the value.

// d) Identify all the lines that are variable declarations
// Line 1, 2, 7, 8. It is defining a variable.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// It takes the number after the comma and removes it. In this case, it’s the same as moving the decimal point three places to the left.
