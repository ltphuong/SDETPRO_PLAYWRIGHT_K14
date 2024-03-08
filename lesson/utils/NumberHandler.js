class NumberHandler{
    static devide(firstNumber, secondNumber){
        return Math.floor(firstNumber / secondNumber)
    }
    
    static isEvenNumber(number){
        return number % 2 === 0;
    }
}

// Export function so that can call from outside
module.exports = NumberHandler