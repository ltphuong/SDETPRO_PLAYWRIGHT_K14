/**
 * 1. Do sth before checking the conding for the FIRST iteration
 * 
 */
const readline = require('readline-sync')

let guessingTime = 0;
let randomNumber = getRandomNumber();
console.log('Random number: ', randomNumber);
do {
    let userNum = getUserNum();
    console.log('User input: ', userNum);
    if(userNum == randomNumber){
        console.log('Hooray!');
        break;
    }
    guessingTime++;
} while(guessingTime < 3);

if(guessingTime === 3){
    console.log('Chuc ban may man lan sau!');
}

function getRandomNumber(){
    return Math.floor(Math.random() * 10) + 1;
}

function getUserNum(){
    return readline.question('Please enter you number: ')
}