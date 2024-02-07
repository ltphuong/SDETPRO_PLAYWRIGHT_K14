const {
    filterEvenNumber, 
    convertToEnvenNumbers,
    sortNumberASC,
    sortNumberDESC
} = require('../utils/ArrayHelper.js')

/**
 * Methods to process array
 */

 // Literal declaration
let myNumArray = [1, 2, 3, 4, 5];

// Filter
let evenNumbers = myNumArray.filter(filterEvenNumber)

// Map
const evenNumbersArray = myNumArray.map(convertToEnvenNumbers);

// Sort: Ascending / Descending
let myString = ['B', 'A', "C"];
myString.sort();
myString.reverse();
// print results
console.log(myString);

// Sort number
let complexNumArray = [100, 22, 19];
complexNumArray.sort(sortNumberASC);
complexNumArray.sort(sortNumberDESC);

// print results
console.log(complexNumArray);

// forEach: Str: 12345

let targetStr = '';
function convertToNoSpaceStr(value, index, array){
    console.log(value);
    targetStr = targetStr + value;
}

myNumArray.forEach(convertToNoSpaceStr);

console.log(targetStr);
