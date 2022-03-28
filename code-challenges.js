// // // ASSESSMENT 1: Coding Practical Questions

// // // To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// // // Pseudo coding is required.

// // // --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// // // Set one:
// // const fruit1 = "apple"
// // const fruit2 = "banana"

// // // Set two:
// // const fruit3 = "cherry"
// // const fruit4 = "kiwi"


// // // --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// // const temp1 = 42
// // const temp2 = 350
// // const temp3 = 212

// // // My Pseudo Code:
// // // Create a function called boilingPoint that takes in a number parameter
// // // if the number is at boiling point (212) then return the specified text
// // // else if the number is above the boiling point (350) then return the specified text
// // // else (42) log the only remaining specified text since it will be below the boiling point.
// // // log the output via function call inside console.log

// // const boilingPoint = (sample) => {
// //     if (sample === 212) {
// //         return "212 is at boiling point"
// //     } else if (sample === 350) {
// //         return "350 is above boiling point"
// //     } else {
// //         return "42 is below boiling point"
// //     }
// // }
// // console.log(boilingPoint(temp1)) // --> 42 is below boiling point
// // console.log(boilingPoint(temp2)) // --> 350 is above boiling point
// // console.log(boilingPoint(temp3)) // --> 212 is at boiling point





// // // --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// // const myNumbers1 = [3, 7, 0, 36, -9]
// // const myNumbers2 = [8, -7, 42, 9, 13]

// // // My pseudo code:
// // // log the first variable and use .concat method that contains the second variable
// // // attach a .length method to the concat method to return the new length of the array

// // console.log(myNumbers1.concat(myNumbers2).length) // --> 10




// // // --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ovarB"

// // const currentCohort = "Bravo 2022"

// // // My pseudo code:
// // // log the given variable
// // // use the split method to break the string into an array
// // // use the reverse method to reverse the letters in the array
// // // use the join method to bring the letters in the array back together into a string.

// // console.log(currentCohort.split("").reverse().join("")) // --> 2202 ovarB





// // --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// const myArray = [13, 34, 5, 10, 27, 42]

// // My pseudo code:
// // Create a basic for statement
// // start the index at zero.
// // Check that the array length is larger than the index
// // If array length is larger than index then increment the loop by one
// // each loop through the array, divide each number by two and if the result has no remainder then log that the result is even.
// // each loop through the array, divide each number by two and if the result HAS a remainder then log that the result is odd.

// for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i] % 2 !== 0) {
//         console.log("Odd")
//     } else {
//         console.log("Even")
//     }
// }

// // OUTPUT:
// // --> Odd
// // --> Even
// // --> Odd
// // --> Even
// // --> Odd
// // --> Even


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

console.log(Math.max(number1, number2) - Math.min(number1, number2))
console.log(Math.max(number3, number4) - Math.min(number3, number4))
