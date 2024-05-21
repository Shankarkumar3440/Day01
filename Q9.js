// What is the difference between == and === operators ?


// The == operator performs a comparison between two values,


5 == '5';         // true, because '5' is converted to 5 before comparison
0 == false;       // true, because false is converted to 0 before comparison
null == undefined; // true, because null and undefined are considered equal in loose equality
'' == false;      // true, because '' is converted to false before comparison

// The === operator performs a comparison between two values and also converts the values to the same type before comparison.

5 === '5';        // false, because 5 is a number and '5' is a string
0 === false;      // false, because 0 is a number and false is a boolean
null === undefined; // false, because null and undefined are different types
'' === false;     // false, because '' is a string and false is a boolean
5 === 5;          // true, because both the value and type are the same
