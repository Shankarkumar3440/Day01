//   What is a higher order function ?

// A Higher - order functions are functions that take other functions as arguments or return functions as
//     their results


// function x() {
//     console.log("Hi")
// };
// function y(x) {
//     x();
// };
// y(); 

// Callback function, passed as a parameter in the higher order function
function callbackFunction() {
    console.log('I am  a callback function');
}

// higher order function
function higherOrderFunction(func) {
    console.log('I am higher order function')
    func()
}

higherOrderFunction(callbackFunction);