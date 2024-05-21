// What is the reason to choose the name let as a keyword?


// The keyword let was chosen for JavaScript to introduce block - scoped variables as part of ECMAScript 6(ES6), which was a significant update to the languag

if (true) {
    let x = 10;
    console.log(x); // 10
}
// x is not accessible here


function example() {
    var a = 1;
    let b = 2;

    if (true) {
        var a = 3; // Re-declares and overrides the outer `a`
        let b = 4; // Block-scoped, does not affect the outer `b`
        console.log(a); // 3
        console.log(b); // 4
    }

    console.log(a); // 3 (overridden)
    console.log(b); // 2 (unchanged)
}

example();
