// Predict and explain first...
//  =============> write your prediction here: It return the string str with first letter capitalized.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/* function capitalise(str) {
   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
   return str;
 } */

// =============> write your explanation here: SyntaxError: Identifier 'str' has already been declared. You cannot declare a variable with the same name as a parameter. The str is ideally an input value from user. 
// =============> write your new code here
const str = "jellyfish";

function capitalise(str) {
  let result = `${str[0].toUpperCase()}${str.slice(1)}`;
  return result;
}

console.log(capitalise(str));