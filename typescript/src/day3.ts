// Jan 7th
// subhajit das

// arrow function

let sum = (a:number, b:number): number => {
  return a+b;
}

console.log(sum(10,10))

// abstract class

abstract class Person{
  name: string;

  constructor(name:string){
    this.name = name;
  }
  display(): void{
    console.log(this.name)
  }

  abstract find(name: string): Person;
}

class Employee extends Person {
  empCode: number;

  constructor(name: string, empCode:number){
    super(name);
    this.empCode = empCode;
  }

  find(name:string): Person {
    return new Employee(name, 1)
  }
}

let emp: Person = new Employee("Subha", 7);
emp.display()

let emp2:Person = emp.find('steve')


// 