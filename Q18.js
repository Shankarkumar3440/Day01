// What is the difference between let and var?


// The let and var keywords in JavaScript are both used to declare variables, but they have several important differences, particularly regarding scope, hoisting, and re - declaration.

// var: Variables declared with var are function-scoped.This means if a variable is declared inside a function, it is accessible throughout the entire function. If declared outside any function, it is globally scoped.


// Scope

if (true) {
    var x = 10;
    let y = 20;
}
console.log(x); // 10 (var is function or globally scoped)
console.log(y); // ReferenceError: y is not defined (let is block-scoped)

// Hoisting
console.log(a); // undefined (variable is hoisted but not initialized)
var a = 5;
console.log(a); // 5

console.log(b); // ReferenceError: b is not defined
let b = 5;
console.log(b); // 5


// Re-declaration
var c = 10;
var c = 20; 
console.log(c); // 20
