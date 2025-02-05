"use strict";
// Exercise: Define a type `Person` with the following properties:
// - `firstName` (string)
// - `lastName` (string)
// - `age` (number)
// Then, create a function `greetPerson` that accepts a `Person` object and returns a greeting string: 
// "Hello, [firstName] [lastName]! You are [age] years old."
function greetPerson(person) {
    var Person = [
        "Hello, ".concat(person.firstName, " ").concat(person.lastName, "! You are ").concat(person.age, " years")
    ];
    return Person;
}
console.log(greetPerson({ firstName: 'John', lastName: 'Doe', age: 30 }));
// Expected output: "Hello, John Doe! You are 30 years old."
