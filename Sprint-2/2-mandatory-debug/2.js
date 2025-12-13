// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here: In the function parameter lacks the variable num. So the num is not passed through function, it will print undefined. 

/* const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
*/ 
// Now run the code and compare the output to your prediction
// =============> write the output here: It only return 3 which was the first and only value that was returned. 
// Explain why the output is the way it is
// =============> write your explanation here: Because the function does not take any parameters, so the arguments passed to it are ignored. And the num called inside function is global const 103. 
// Finally, correct the code to fix the problem
// =============> write your new code here

const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
