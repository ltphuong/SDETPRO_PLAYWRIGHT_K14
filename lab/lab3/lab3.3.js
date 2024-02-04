// Sort an integer array from min to max
let intArr = [12, 34, 1, 16, 28]

// let temp = 0;

// for(let i = 0; i < intArr.length - 1; i++){
//     for(let j = i + 1; j < intArr.length; j++){
//         if(intArr[i] > intArr[j]){
//             temp = intArr[i];
//             intArr[i] = intArr[j];
//             intArr[j] = temp;
//         }
//     }
// }

// console.log("Sort from min to max: ", intArr);

// Second approach
let unsortedPosistion = intArr.length - 1;
while(unsortedPosistion > 0){
    for(let i = 0; i < unsortedPosistion; i++){
        const leftValue = intArr[i];
        const rightValue = intArr[i + 1];
        if(leftValue > rightValue){
            // Swap with temporary variable
            intArr[i] = rightValue;
            intArr[i + 1] = leftValue;

            // Swap without temporary variable
            /**
             * a = 10;
             * b = 2;
             * a = a + b = 10 + 2
             * b = a - b = 12 - 2
             * a = a - b = 10 - 2
             */
        }
    }
    unsortedPosistion--;
}

console.log("Sort from min to max: ", intArr);