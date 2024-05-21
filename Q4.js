// What is JSON and its common operations ?


// JavaScript Object Notation(JSON) is a standard text - based format for representing structured data based on JavaScript object syntax. 
// e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa)

// Parsing JSON
let a = '{"name":"John", "age":30, "city":"New York"}'

let obj = JSON.parse(a)
console.log(obj);

// JSON.stringify 
let b = { name: "Akshita", last: "Sony" }

let c = JSON.stringify(b)
console.log(c);
console.log(typeof c);

// JSON.Array
let myj = [12, "Hello", true];
let myArray = JSON.stringify(myj);
console.log(myArray);