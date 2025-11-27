// Currently trying to print the string "I was born in Bolton" but it isn't working...
// what's the error ?
// cityOfBirth was declared after the console.log. When you try to print it, it doesn’t exist yet, so it doesn’t work.
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);
