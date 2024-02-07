let teo = {
    name: "Teo",
    age: 18,
    bankAccount: {
        accountNum: '1234567',
        balance: 10000000
    }
}

// Shallow copy - spread syntax - only one clone 1 level
// let ti = {...teo}
// ti.name = 'ti';
// ti.bankAccount.balance = 1;

// console.log(ti);
// console.log(teo);

// Shallow copy - Handle for nested object, array.. (NOT for function, circular reference)
let ti = JSON.parse(JSON.stringify(teo))
ti.name = 'ti';
ti.bankAccount.balance = 1;

// console.log(ti);
// console.log(teo);

// merge array
// let array1 = [1, 2, 3]
// let array2 = [4, 5, 6]
// let merge = [...array1, ...array2]
// console.log(merge);

// Object.key[targetObject]
console.log(Object.keys(teo));

// Object.value[targetObject]
console.log(Object.values(teo));

// Object.entries[targetObject]
console.log(Object.entries(teo));