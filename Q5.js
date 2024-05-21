// What is the purpose of the array slice method ?


// The slice method in JavaScript is used to create a shallow copy of a portion of an array into a new array object, without modifying the original array.This method is commonly used to extract elements from an array based on specified start and end .

// Syntax
// array.slice([start], [end])

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

const slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits);  // Output: ['banana', 'cherry', 'date']
console.log(fruits);        // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']

console.log('..........................................................................');
const fruit = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

const slicedFruits1 = fruit.slice(2);
console.log(slicedFruits1);  // Output: ['cherry', 'date', 'elderberry']

const slicedFruits2 = fruit.slice();
console.log(slicedFruits2);  // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']

