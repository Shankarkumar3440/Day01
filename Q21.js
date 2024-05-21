// What is the Temporal Dead Zone ?

// Time since when the let variable was hoisted until it is initialized some value.
// Reference Error are thrown when variables are in temporal dead zone.
// let and const declarations are hoisted.But its different from var

console.log(a); // ReferenceError: Cannot access 'a' before initialization
console.log(b); // prints undefined as expected
let a = 10;
console.log(a); // 10
var b = 15;