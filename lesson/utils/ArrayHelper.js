const filterEvenNumber = function(value, index, array){
    return value % 2 === 0;
}

const filterOddNumber = function(value, index, array){
    return value % 2 !== 0;
}

const convertToEnvenNumbers = function(value, index, array){
    if(value % 2 !== 0){
        return value * 2;
    }
    else{
        return value;
    }
}

const sortNumberASC = function(firstNum, secondNumber){
    return firstNum - secondNumber;
}

const sortNumberDESC = function(firstNum, secondNumber){
    return secondNumber - firstNum;
}

module.exports = {
    filterEvenNumber: filterEvenNumber,
    filterOddNumber: filterOddNumber,
    convertToEnvenNumbers: convertToEnvenNumbers,
    sortNumberASC: sortNumberASC,
    sortNumberDESC: sortNumberDESC,
}