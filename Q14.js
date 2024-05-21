// What is a unary function?

// A unary function is a function that takes exactly one argument. The function accepts only one argument.


// Basic Unary Function
function square(x) {
    return x * x;
}

console.log(square(5)); // 25

// Using Unary Functions with Higher-Order Functions.

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(function (x) {
    return x * x;
});
console.log(squares); // [1, 4, 9, 16, 25]


// Unary Function with Arrow Syntax
const increment = x => x + 1;
console.log(increment(7)); // 8
