/**
 * CRUD: Create Read Update Delete
 * 
 */

// Literal declaration
let myNumArray = [1, 2, 3, 4, 5];


// Via Array constructor
//let viaConstructor = new Array(1, 2, 3, 4, 5);

/**
 * lenght: number of element
 * index: 0 -> (lenght - 1)
 */
console.log('Array length: ', myNumArray.length)
console.log('Value of the second num before updating: ', myNumArray[1]);
myNumArray[1] = 100
console.log('Value of the second num after updating: ', myNumArray[1]);

// ================
console.log((myNumArray[99]));
// Possibly undefine holes
// myNumArray[10] = 1000;
// 1, 2, 3, 4, 5, undefined, undefined, ..... 10

// Adding one more on top of array
myNumArray.push(6);
console.log(myNumArray);

// Removing the last element from arry
let removedLastValue = myNumArray.pop();
console.log(removedLastValue);
console.log('After removing the last element: ', myNumArray);

// Removing the first number
let removedFirstValue = myNumArray.shift();
console.log(removedFirstValue);
console.log('After removing the last element: ', myNumArray);

// Deleting | splice
// Delete all number
// myNumArray.splice(0)

// Delete from index to index
myNumArray.splice(0, 2)
console.log(myNumArray);

// Initialize new array
let myNewArray = [1, 3, 4, 5];
let whereToInsert = 1;
let numberOfArgToBeRemoved = 0;
let valueToBeAdded = 2;
myNewArray.splice(whereToInsert, numberOfArgToBeRemoved, valueToBeAdded)
console.log(myNewArray);