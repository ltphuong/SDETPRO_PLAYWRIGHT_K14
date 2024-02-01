// function devide(firstNumber, secondNumber){
//     // 3.333333 -> 4
//     // return Math.round(firstNumber / secondNumber)
//     // return Math.ceil(firstNumber / secondNumber)
//     return Math.floor(firstNumber / secondNumber)
// }

const devide = function(firstNumber, secondNumber){
    // 3.333333 -> 4
    // return Math.round(firstNumber / secondNumber)
    // return Math.ceil(firstNumber / secondNumber)
    return Math.floor(firstNumber / secondNumber)
}


function isEvenNumber(number){
    return number % 2 === 0;
}


// Export function so that can call from outside
module.exports = {
    // Call outside - use inside
    divide: devide,
    isEvenNumber: isEvenNumber
}