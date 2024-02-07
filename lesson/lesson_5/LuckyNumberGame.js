const readline = require('readline-sync')

/**
 * === GAME MENU ====
 * 1. Generate a random number (1->10)
 * 0. Exit!
 */

let isPlaying = true;
while(isPlaying){
    printGameMenu();
    let userOption = getUserOption();

    if(userOption == 0){
        isPlaying = false;
    }
    else if(userOption == 1){
        // Generate a random number
        let random = Math.floor(Math.random() * 10) + 1;

        // Print out
        console.log('The lucky number is: ' +  random);
    }
    else{
        console.log('Nhap lui roi Teo oi');
    }
}

console.log('Hen gap lai ban!');

function printGameMenu(){
    console.log('* ===== GAME MENU =====');
    console.log('1. Generate a random number (1->10)');
    console.log('0. Exit!');
}

function getUserOption(){
    return readline.question('Please select an option: ')
}