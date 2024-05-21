// What is memoization ?

// In programming, memoization is an optimization technique that makes applications more efficient and hence faster.It does this by storing computation results in cache, and retrieving that same information from the cache the next time it's needed instead of computing it again.

// In simpler words, it consists of storing in cache the output of a function, and making the function check if each required computation is in the cache before computing it.

//A cache is simply a temporary data store that holds data so that future requests for that data can be served faster.

function memoize(fn) {
    let cache = {};
    let callCount = 0;

    function memoizedFunction(...args) {
        let n = JSON.stringify(args);  // Convert arguments into a string
        if (n in cache) {
            return cache[n];
        } else {
            callCount++;  // Increment call count when the function is actually called
            let result = fn.apply(this, args);  // Call the original function with the arguments
            cache[n] = result;  // Store the result in the cache
            return result;
        }
    }

    memoizedFunction.getCallCount = function () {
        return callCount;
    };

    return memoizedFunction;
}

function sum(x, y) {
    return x + y;
}

// Create a memoized version of the sum function
const memoizedSum = memoize(sum);

// Simulate the actions and values
const fnName = "sum";
const actions = ["call", "call", "getCallCount", "call", "getCallCount"];
const values = [[2, 2], [2, 2], [], [1, 2], []];

const results = [];

actions.forEach((action, index) => {
    if (action === "call") {
        results.push(memoizedSum(...values[index]));
    } else if (action === "getCallCount") {
        results.push(memoizedSum.getCallCount());
    }
});

console.log(results); // Outputs: [4, 4, 1, 3, 2]
