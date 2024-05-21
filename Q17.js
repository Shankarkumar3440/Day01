// What is the purpose of the let keyword?

// The let keyword in JavaScript is used to declare block - scoped variables.Unlike the var keyword, which has function scope or global scope, let allows you to declare variables that are limited in scope to the block, statement, or expression in which they are used.


// Block Scope:Variables declared with let are confined to the block in which they are declared, such as inside a {} block.
// This means the variable is not accessible outside the block where it is declared, 

{
    let x = 10;
    console.log(x); // 10
}
console.log(x); // ReferenceError: x is not defined


// console.log(x); // ReferenceError: Cannot access 'x' before initialization
// let x = 10;


for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000); // Outputs: 0, 1, 2
}
