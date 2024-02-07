// Finding maximum value/minimum value from an integer array
// let intArr = [1, 2, 3, 4, 5];
let intArr = [5, 3, 4, 2, 1]

let min = intArr[0]
for(let i = 1; i < intArr.length; i++){
    if(min > intArr[i]){
        min = intArr[i];
    }
}

console.log("Minimum = ", min);

let max = intArr[0]
for(let i = 1; i < intArr.length; i++){
    if(max < intArr[i]){
        max = intArr[i];
    }
}

console.log("Maximum = ", max);
