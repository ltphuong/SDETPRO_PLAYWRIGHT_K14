class MethodOverloading{
    static add(...nums){
        return nums;
    }

    static devide(a, b){
        if(arguments.length != 2){
            throw new Error("Must provide 2 numbers!!");
        }
        if(b === 0){
            throw new Error("Can't devide by zero");
        }

        return a/b;
    }
}

const addResult = MethodOverloading.devide(2, 1)
console.log(addResult);
module.exports = MethodOverloading;