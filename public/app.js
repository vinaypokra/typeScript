"use strict";
let message;
let greet;
greet = (a, b, c) => {
    if (c === '+') {
        return a + b;
    }
    return "Only + and - Operation Allowed";
};
console.log(greet(2, 4, "*"));
