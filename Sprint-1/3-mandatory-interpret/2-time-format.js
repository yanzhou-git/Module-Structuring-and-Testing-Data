const movieLength = -5; // length of movie in seconds, declaration

const remainingSeconds = movieLength % 60; // declaration
const totalMinutes = (movieLength - remainingSeconds) / 60; //declaration

const remainingMinutes = totalMinutes % 60; //declaration
const totalHours = (totalMinutes - remainingMinutes) / 60; //declaration

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`; //declaration
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 declarations (and statements, they are declaring and stating at the same time).

// b) How many function calls are there?
// one, console.log()

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// It returns the remainder left over when one operand is divided by a second operand. In this case, is the remainder left when movieLength is divided by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// It is assigning variable totalMinutes to the reminder left when (movieLength - remainingSeconds) is divided by 60.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The result represents the total hours, minutes, and seconds of the movie. It is converting seconds to HMS format. It can be called movieDurationHMS.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// This works best with integers. For non-integers, the output has too many decimals to be readable. Values under one hour or one minute are still shown in HMS format, even when hours or minutes are zero, which is unnecessary.
