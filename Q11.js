// We can pass functions inside a function as arguments and
// / or return a function.These ability are altogether known as First class function.


// example of first class function
function greet(name) {
    console.log(`Hello ${name}`);
}

function processGreet(name, func) {
    func(name);
}

processGreet('John', greet);


