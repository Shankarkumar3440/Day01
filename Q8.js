


// Object:
// An Object is a fundamental data type in JavaScript used to store collections of key - value pairs.It's versatile and commonly used to represent entities and their properties.
// Map:A Map is a collection introduced in ECMAScript 2015(ES6) specifically designed to store key - value pairs with better performance and features than a plain object for certain use cases.



// Object: Keys are always strings(or symbols).If you use a non - string key, it is automatically converted to a string.
// Map: Keys can be of any type, including objects, functions, and primitives.


let obj = {
    name: "Shankar",
    last: "kumar",
    age: 25
}
console.log(obj);

// setting key-Value Pair
let obj1 = {}
obj1["name"] = "Mohan"
obj1["last"] = "Lal"
obj1["age"] = 25
console.log(obj1);

// Deleting an object property
delete obj1.age
console.log(obj1);

// Map

let map = new Map();
map.set("name", "Shankar");
map.set("last", "kumar");
map.set("age", 25);
console.log(map);

// getting value by key
console.log(map.get("name"))

// Deleting an map property
console.log(map.delete("age"));
console.log(map.get("age"));

// checking if key value exists
console.log(map.has("name"));
console.log(map.has("age"));

