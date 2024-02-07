/** O(n^2)
 * [3, 7, 22, 1], target number = 8
 * return [index1, index2] that sum of them = target number
 * Assumption: Only one indice existing
 */

const array = [3, 7, 22, 1]
const targetNum = 8
// let indices = findIndicesNestedLoop(array, targetNum);
let indices = findIndicesUsingMap(array, targetNum);
console.log(indices);


// Hint 01: nested loop - 2 loops -> O(n^2)
function findIndicesNestedLoop(givenArray, targetNum) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === targetNum) {
                return [i, j]
            }
        }
    }
    return []
}

// // Hint 02: using map -> O(n)
function findIndicesUsingMap(givenArray, targetNum) {
    let numberMap = new Map();
    for (let i = 0; i < givenArray.length; i++) {
        let lookingNum = targetNum - givenArray[i];
        if(numberMap.has(lookingNum)){
            return [numberMap.get(lookingNum), i]
        }
        numberMap.set(givenArray[i], i)
    }
    return []
}

