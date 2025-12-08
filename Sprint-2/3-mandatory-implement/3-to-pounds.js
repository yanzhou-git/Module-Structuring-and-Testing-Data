// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

const penceString = "43999p";

function toPounds(penceString){
    let string = penceString.substring(0,penceString.length-1)
    return `${(string / 100).toFixed(2)}`
}

console.log(toPounds(penceString));

// consume the input is a number with two decimal digits and unit p. It should work as expected.