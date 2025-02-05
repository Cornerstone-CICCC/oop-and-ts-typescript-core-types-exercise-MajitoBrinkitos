"use strict";
// Exercise: Write a function `logValues` that takes an array of any type of values (numbers, strings, booleans, etc.).
// The function should iterate through the array and log each value along with its type.
function logValues(values) {
    for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
        var value = values_1[_i];
        console.log(value);
    }
}
logValues([42, "Hello", true, { name: "Alice" }]);
// Expected output:
// 42 (number)
// "Hello" (string)
// true (boolean)
// { name: "Alice" } (object)
