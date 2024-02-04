// Literal declaration
let myNumArray = [1, 2, 3, 4, 5];

for(let index = 0; index < myNumArray.length; index++){
    console.log(myNumArray[index]);
}    

/**
 * Convert all number in the array into even number. You can change all value
 */
for(let index = 0; index < myNumArray.length; index++){
    const currentValue = myNumArray[index];
    myNumArray[index] = currentValue * 2;
}

for (let value of myNumArray) {
    console.log(value);
}