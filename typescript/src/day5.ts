// Jan 9th
// Resource: https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html

// indexed access type

type Person1 = { age: number; name:string; alive:boolean}
type Age = Person1["age"];

type inde = Person1["age" | "name"]

type inde1  = Person1[keyof Person1];

type AliveOrName = "alive" | "name";
type inde2  = Person1[AliveOrName];


// Another example of indexing with an arbitrary type is using number to get the type of an array’s elements
const Myarr = [
  {name:"Subha", age: 25},
  {name: "Jeet", age: "26"},
  {name: "Subhajit", age: 27}
]

type Person2 = typeof Myarr[number]

type age = typeof Myarr[number]["name"]
// or
type age2 = Person1["age"]

// alias 
type key ="age"
type Age1 = Person1[key]  