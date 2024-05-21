// What is the purpose of the array splice method ?


// The splice method in JavaScript is used to modify an array by adding, removing, or replacing elements.Unlike the slice method, which does not alter the original array, splice directly changes the content of the array on which it is called.


// Syntax
// array.splice(start, deleteCount, item1, item2, ..., itemN)

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

const removedFruits = fruits.splice(2, 2);
console.log(fruits);
console.log(removedFruits);


console.log('..........................................................................');
const fruit = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const replacedFruits = fruits.splice(1, 2, 'blueberry', 'cranberry');
console.log(fruit);
console.log(replacedFruits);  
