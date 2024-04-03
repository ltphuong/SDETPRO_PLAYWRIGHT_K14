class Person {
    private name: string = '';
    private age: number = 0;

    constructor(name: string, age: number) {
        this.validateAge(age);
        this.name = name;
        this.age = age;
    }

    setAge(age: number): void {
        if (age < 0) {
            throw new Error("Age can't be negative");
        }
        this.age = age;
    }

    private validateAge(age: number): void {
        if (age < 0) {
            throw new Error("Age can't be negative");
        }
    }

    processSthBaseOnAge(): void {

    }
}

const person = new Person('Teo', -18);