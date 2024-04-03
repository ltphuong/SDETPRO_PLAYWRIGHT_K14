import Employee from "./Employee";
import FTE from "./FTE";

export default class EmployeeController {
    static getTotalSalary(employeeList: Employee[]): number {
        let totalSalary = 0;
        employeeList.forEach(employee => {
            totalSalary += employee.getSalary();
        })
        return totalSalary;
    }
}