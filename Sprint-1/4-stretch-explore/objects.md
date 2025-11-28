## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
I got ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
I got console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`
I got Uncaught SyntaxError: Unexpected identifier 'console'

Answer the following questions:

What does `console` store?
It prints information to the browser’s (or Node’s) console for debugging purposes.
What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
console.log outputs a message to the console.
console.assert log an error message to console if the first argument is false.
The . calls the function method of the console object.
