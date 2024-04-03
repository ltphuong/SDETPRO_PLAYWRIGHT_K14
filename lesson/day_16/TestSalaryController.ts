import Contractor from "./Contractor";
import EmployeeController from "./EmployeeController";
import FTE from "./FTE";

let teo = new FTE('Teo');
let ti = new FTE('Ti');
let tun = new Contractor('Tun');

const totalSalary = EmployeeController.getTotalSalary([teo, ti, tun]);
console.log('Total salary is: ', totalSalary);
