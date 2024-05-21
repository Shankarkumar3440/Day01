// What are the possible ways to create objects in JavaScript ?

// In JavaScript, there are several ways to create objects.Here are the most common methods:

// Object Literal

// -->It is a syntax for creating an object in JavaScript that is composed of key-value pairs.
//     and it is efficient way to create and store data in a JavaScript object.

// Example
const obj = {
    key1: 'value1',
    key2: 'value2',
    method1: function () {
        console.log('method1');
    }
};

console.log(obj);


// Constructor function
// A constructor is a special function that creates and initializes an object instance of a class. In JavaScript, a constructor gets called when an object is created using the new keyword
function abc(first, last) {
    this.firstName = first;
    this.lastName = last;
}
const obj1 = new abc('Mohan', 'lal');
const obj2 = new abc('Vishal', 'Kapoor');
obj1.age = 25
console.log(obj1)
console.log(obj2);


// Class

class Person {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
}
const obj3 = new Person('Mohan', 'lal');
const obj4 = new Person('Vishal', 'Kapoor');
obj3.age = 25
console.log(obj3)
console.log(obj4);

// Object.create -> The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.


const object = {
    name: 'Mohan',
    age: 25,
    printProduction: function () {
        console.log('Production');
    }
}

const newObject = Object.create(object);
newObject.name2 = "Rahul"
console.log(newObject.name);

