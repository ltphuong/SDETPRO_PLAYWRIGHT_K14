// const NumberHandler = require('../utils/NumberHandler');

// console.log('10 / 3 = ', NumberHandler.divide(10, 3));
// console.log('Is 5 even number: ', NumberHandler.isEvenNumber(5));

// Destructuring
const {
    divide, 
    isEvenNumber
} = require('../utils/NumberHandler');

console.log('10 / 3 = ', divide(10, 3));
console.log('Is 5 even number: ', isEvenNumber(5));

