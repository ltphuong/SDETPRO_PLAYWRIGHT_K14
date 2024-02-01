/**
 * DRY (dont repeat yourself): to group same logic block into same place -> reusable
 * Group same logic category into same place
 * -> Maintainable -> extendable -> reliable
 */

// Function declaration | It's hoisted to the top of the scope
let myReturnedValue = functionName();
console.log(myReturnedValue);
function functionName(){
    let result = 1;
    return result
}

// Function expression | It's Not hoisted like Function declaration
const addNumber = function(firstNum, secondNum){
    return firstNum + secondNum
}
console.log(addNumber(1, 2));