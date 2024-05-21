// What is Hoisting ?


// Hoisting is a concept which enables us to extract values of variables and functions even before
// initialising / assigning value without getting error and this is happening due to the 1st phase(memory
// creation phase) of the Execution Context.

//  we learnt that execution context gets created in two phase, so even before
// code execution, memory is created so in case of variable, it will be initialized as undefined while in
// case of function the whole function code is placed in the memory and executed at the same time.



getName(); // Namaste JavaScript
console.log(x); // undefined
console.log(getName); // f getName(){ console.log("Namaste JavaScript); }
function getName() {
    console.log("Namaste JavaScript");
}


getName(); // Uncaught TypeError: getName is not a function
console.log(getName);
var getName = function () {
    console.log("Namaste JavaScript");
}
// This will throw an error