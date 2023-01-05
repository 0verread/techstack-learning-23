// Date Jan 4th, 2023
// Jeet


function add (a: number, b: number) {
  return a + b;
}

console.log("Addition Result:", add(5,6));


// Array 

let arr: number[] = [1,2,3,4,5];

// Tuple

let tp: [number, boolean, string] = [123, true, 'brad']

// Tuple array

let tparr: [number, string][];

tparr = [
  [12, 'brad'],
  [13, 'pitt']
]

// union - could be either

let un: string | number = 123;

// Enumns - 

enum direction1 {
  up,
  down,
  left,
  righ
}

console.log(direction1.down)

// objects
type User = {
  id: number,
  name: string
}


let obj: User= {
  id: 1,
  name: 'string'
}

// Type assertion

let cid: any = 1;
// let custdi = <number>cid  
let custdi = cid as number