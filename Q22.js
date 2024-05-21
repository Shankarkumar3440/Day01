// What is IIFE(Immediately Invoked Function Expression)?


// An Immediately Invoked Function Expression(IIFE) is a JavaScript design pattern that allows you to create and execute a function immediately after its definition.The key characteristic of an IIFE is that it is defined within parentheses() and immediately invoked by adding another pair of parentheses() after it.


// Syntax
(function () {
    // Your code here
})();


(function () {
    var x = 10;
    console.log("Inside the IIFE: " + x); //  Inside the IIFE: 10
})();



(function (name) {
    console.log("Hello, " + name);
})("John");
