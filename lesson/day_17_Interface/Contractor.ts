import Employee from "./Employee";

export default class Contractor implements Employee {
    name: string;
    salary: number;
    supportSalary: number;

    constructor(name: string) {
        this.salary = 40000;
        this.supportSalary = 0;
        this.name = name;
    }

    getSalary(): number {
        return this.salary;
    }

    getSupportSalary(): number {
        return this.supportSalary;
    }
}