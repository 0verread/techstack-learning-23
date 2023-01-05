"use strict";
// Date Jan 4th, 2023
// Jeet
function add(a, b) {
    return a + b;
}
console.log("Addition Result:", add(5, 6));
// Array 
let arr = [1, 2, 3, 4, 5];
// Tuple
let tp = [123, true, 'brad'];
// Tuple array
let tparr;
tparr = [
    [12, 'brad'],
    [13, 'pitt']
];
// union - could be either
let un = 123;
// Enumns - 
var direction1;
(function (direction1) {
    direction1[direction1["up"] = 0] = "up";
    direction1[direction1["down"] = 1] = "down";
    direction1[direction1["left"] = 2] = "left";
    direction1[direction1["righ"] = 3] = "righ";
})(direction1 || (direction1 = {}));
console.log(direction1.down);
let obj = {
    id: 1,
    name: 'string'
};
// Type assertion
let cid = 1;
// let custdi = <number>cid  
let custdi = cid;
