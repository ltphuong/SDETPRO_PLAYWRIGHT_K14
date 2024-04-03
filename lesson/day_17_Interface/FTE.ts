import Employee from "./Employee";
import SomethingElse from "./SomethingElse";

export default class FTE implements Employee, SomethingElse {
    name: string;
    salary: number;
    supportSalary: number;

    constructor(name: string) {
        this.salary = 50000;
        this.supportSalary = 5000;
        this.name = name;
    }

    sayHello(): void {
        throw new Error("Method not implemented");
    }

    getSupportSalary(): number {
        return 5000;
    }

    getSalary(): number {
        return this.salary;
    }
}