// What is a pure function?

// A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. It does not depend on any state or data change during a program’s execution. 
//   Also, a pure function does not produce any observable side effects such as network requests or data mutation, etc.


function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 


function multiply(a, b) {
    return a * b;
}

console.log(multiply(4, 5)); // 20
console.log(multiply(4, 5)); // 20 

