// /**
//  * Merge 2 SORTED integer array into one SORTED array

// Array 01: {1, 12, 16, 28, 34}
// Array 02: {1, 13, 16, 27, 99}

// Expected output: {1, 1, 12, 13, 16, 16, 27, 28, 34, 99}
//  */

// let array1 = [1, 12, 16, 28, 34];

// let array2 = [1, 13, 16, 27, 99];
// console.log(array2);
// let result = [];

// for(let i = 0; i < array1.length; i++){
//     result.push(array1[i]);
// }

// for(let j = 0; j < array2.length; j++){
//     result.push(array2[j]);
// }

// let temp = 0;

// for(let i = 0; i < result.length - 1; i++){
//     for(let j = i + 1; j < result.length; j++){
//         if(result[i] > result[j]){
//             temp = result[i];
//             result[i] = result[j];
//             result[j] = temp;
//         }
//     }
// }

// console.log(result);

// second approach
const foo = [1, 12, 16, 28, 34];
const bar = [1, 13, 16, 27, 99];
const mergeArray = merge(foo, bar);

console.log("foo: ", foo);
console.log("bar: ", bar);
console.log("merge: ", mergeArray);

function merge(foo, bar){
    // Better to handle data exception case for params. Ignoring for now...
    const merge = []
    const fooLength = foo.length;
    const barLength = bar.length;
    let fooPosition = 0;
    let barPosition = 0;
    let mergePosition = 0;
    
    while(fooPosition < fooLength && barPosition < barLength){
        const fooValue = foo[fooPosition];
        const barValue = bar[barPosition];
        if(fooValue <= barValue){
            merge[mergePosition] = fooValue;
            mergePosition++;
            fooPosition++;
        }
        else{
            merge[mergePosition] = barValue;
            mergePosition++;
            barPosition++;
        }
    }
    
    while(fooPosition < fooLength){
        merge[mergePosition++] = foo[fooPosition++];
    }
    
    while(barPosition < barLength){
        merge[mergePosition++] = bar[barPosition++];
    }
    return merge;
}