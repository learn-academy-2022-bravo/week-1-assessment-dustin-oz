// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: .length in this case will log 10, one space for each character position in the string, even the spaces.


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain:  Verified "o" was the result. The [4] indicates the letter in the 5th position since counting begins at 0.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: Verified correct. index=1 indicates the second element in the array since we start counting arrays at 0.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: It is my understanding that this will error on execution since .toUpperCase is used on strings OR the individual strings inside this array.
// b) Verify and explain: It did in fact fail for the reason I stated above. I tested my theory as well as looked it up online.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer: It is my understanding that since .length always returns a number then this will log the data type of NUMBER. Had this example logged a true or false then it is my understanding that "typeof" would then log "boolean"
// b) Verify and explain: After researching this, it appears my understanding was essentially correct though the typeof also returns things I did not know as well. 
// Researched explanation: "You can use the typeof operator to find the data type of a JavaScript variable." -w3Schools
