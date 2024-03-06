// User-defined data
class Person {
    constructor(name, age){
        this._name = name;
        this._age = age;
    }

    // getter | get the current value of attribute/property
    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }
    
    get age(){
        return this._age;
    }

    set age(age){
        this._age = age;
    }
}

module.exports = Person