// class static properties and methods exampple --- 
class Employee {
    constructor(fName,age,salary) {
        this.fName = fName;
        this.age = age;
        this.salary = salary;
    }
    static employeeCode = 1111;
    static empInfo() {
        const newVar = 1000;
        return `${this.fName}, -- ${newVar} --- ${this.employeeCode} is the emp name --`;
    }
}
const emp1 = new Employee('Mahesh', 26, 300000);
console.log(emp1, ' ------ emp obj ----- ');
console.log(emp1.employeeCode, ' ------- trying to access employee code ---- '); // undefined
console.log(Employee.employeeCode, ' ---------- static property access ---- ');
// console.log(emp1.empInfo(), ' =-------- trying to access the static method through object ----- '); // error  emp1.empInfo is not a function
console.log(Employee.empInfo(), ' -------  accessing the static method through direct class ---- ');
