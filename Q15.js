// What is the currying function?

// Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument
//  This technique allows functions to be modular and reusable by breaking them down into smaller, more manageable pieces.


function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

console.log(sum(1)(2)(4))