const readline = require('readline-sync')
const inputNum = getUserInputNum();

// if(inputNum === 2){
//     console.log('Monday');
// }
// else if(inputNum === 3){
//     console.log('Tuesday');
// }
// else if(inputNum === 4){
//     console.log('');
// }
// else if(inputNum === 5){
//     console.log('');
// }
// else if(inputNum === 6){
//     console.log('');
// }
// else if(inputNum === 7 || inputNum === 8){
//     console.log('');
// }
// else{
//     console.log("Nhap sai! Nhap tu 2 -> 8");
// }

switch(inputNum){
    case 2: 
        console.log('Monday');
        break;
    case 3: 
        console.log('Monday');
        break;
    case 4: 
        console.log('Monday');
        break;
    case 5: 
        console.log('Monday');
        break;
    case 6: 
        console.log('Monday');
        break;
    case 6: 
        console.log('Monday');
        break;
    case 7: 
    case 8: 
        console.log('Weekends');
        break;
    default:
        console.log("Nhap sai! Nhap tu 2 -> 8");
}

function getUserOption(){
    return readline.question('Please select an option: ')
}