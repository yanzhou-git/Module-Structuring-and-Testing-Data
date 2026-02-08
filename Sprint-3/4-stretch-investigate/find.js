function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(find("code your future", "u")); // 7
console.log(find("code your future", "z")); // -1

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
// The index variable starts at 0 and increases by 1 on each iteration (index++) until the character is found or the string ends. If a match is found, the function returns that index; otherwise, it returns -1.
// The if statement checks whether the current character at str[index] matches the target char. 
// c) Why is index++ being used?
// index++ moves to the next character, so the loop checks each character in order.
// d) What is the condition index < str.length used for?
// The condition index < str.length keeps the loop running until all characters in the string have been checked.