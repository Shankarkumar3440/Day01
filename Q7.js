// What is the difference between slice and splice ?

// The slice and splice methods in JavaScript are both used for manipulating arrays, but they serve different purposes and have distinct behaviors.Here's a detailed comparison to highlight the differences between the two:

// Purpose of SliceMethod
// The slice method is used to create a shallow copy of a portion of an array into a new array object.It does not modify the original array.

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

const slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits);  
console.log(fruits);        

console.log('..........................................................................');
// Purpose of SpliceMethod
// The splice method is used to modify an array by adding, removing, or replacing elements.It does not alter the original array.

// Purpose of SpliceMethod
// The splice method is used to add, remove, or replace elements in an array.It modifies the original array.


const fruit = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

const removedFruits = fruits.splice(2, 2, 'fig', 'grape');
console.log(fruit);         // Output: ['apple', 'banana', 'fig', 'grape', 'elderberry']
console.log(removedFruits);  // Output: ['cherry', 'date']

// Differences between slice and splice

//slice: Does not modify the original array.It returns a new array.
//splice: Modifies the original array and returns the removed elements

// slice: Used for copying a portion of the array.
// splice: Used for adding, removing, or replacing elements within the array.