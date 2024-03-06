const Person = require('./Person')
const teo = new Person('Teo', 18)
console.log(teo.name);
console.log(teo.age);
teo.name = 'Teo dep trai'
console.log(teo.name);
console.log(teo);