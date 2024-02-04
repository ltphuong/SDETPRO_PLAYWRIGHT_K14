// // node lesson/lesson_5/GetUserInputFromArgv.js name=Teo age=10
// console.log(process.argv);

const readline = require('readline-sync')
let userInput = readline.question("Please enter your name: ");
console.log('User input: ', userInput);