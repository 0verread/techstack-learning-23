// date Jan 5th 2023
// Subhajit Das

function addtwoNumber (x:number, y:number): number{
  return x+y
}

console.log(addtwoNumber(4, 5))


// Interfaces

interface UserInterface{
  name: string,
  phoneNo: number
}

const user1: UserInterface = {
  name:"subha",
  phoneNo:1231212
}

// Fucntion Interface

interface Addtwo{
  (x: number, y:number): number
}

const add1: Addtwo = (x:number, y:number): number => x+ y


// class
class person {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id,
    this.name = name
    console.log(123)
  }
}

const person1 = new person(123, "string")