"use strict";
// Jan 7th
// subhajit das
// arrow function
let sum = (a, b) => {
    return a + b;
};
console.log(sum(10, 10));
// abstract class
class Person {
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log(this.name);
    }
}
class Employee extends Person {
    constructor(name, empCode) {
        super(name);
        this.empCode = empCode;
    }
    find(name) {
        return new Employee(name, 1);
    }
}
let emp = new Employee("Subha", 7);
emp.display();
let emp2 = emp.find('steve');
// 
