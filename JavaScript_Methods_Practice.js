// [JavaScript Mehtod Practice]

// 1. [string.repeat(count)] Method
// Return a [string] with [count] times
// Reference: https://www.w3schools.com/jsref/jsref_repeat.asp

// Practice Question: Write a function called repeatStr which repeats the given string string exactly n times.
// Example
// repeatStr(6, "I") // OUTPUT: "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// Basic Solution
function repeatStr (n, s) {
    let str = "";
    
    for(let i = 0; i < n; i++){
      str += s;
    }
    
    return str;
}

// Advanced Solution
function repeatStr (n, s) {
    return s.repeat(n);
}