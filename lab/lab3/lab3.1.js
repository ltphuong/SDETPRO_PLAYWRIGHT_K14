const {
    filterEvenNumber,
    filterOddNumber
}  = require('../../lesson/utils/ArrayHelper')

// Count how many odd, even number(s) in an integer array
let intArr = [1, 2, 3, 4, 5];
let oddNumber = 0;
let evenNumber = 0

for (const value of intArr) {
    if(value % 2 === 0){
        evenNumber = evenNumber + 1;
    }
    else{
        oddNumber = oddNumber + 1;
    }
}

console.log("Even numbers: ", evenNumber);
console.log("Odd numbers: ", oddNumber);

// Second approach | Delegation
let totalEvenNumber2nd = intArr.filter(filterEvenNumber).length;
let totalOddNumber2nd = intArr.filter(filterOddNumber).length;
console.log("totalOddNumber2nd: ", totalEvenNumber2nd);
console.log("totalOddNumber2nd: ", totalOddNumber2nd);