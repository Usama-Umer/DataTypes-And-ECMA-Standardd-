// "use strict"; // treat all JavaScript code as newer version 



// JavaScript has several data types, broadly categorized into primitive types and reference (or object) types. Here's an overview:
// 1. Primitive Data Types

// Primitive types are immutable and represent simple values.

//     String: Represents text. Strings are enclosed in quotes ('single', "double", or `backticks`).

//     javascript

// let name = "John";

// Number: Represents both integer and floating-point numbers. There is only one type for all numeric values.

// javascript

// let age = 25;
// let price = 19.99;

// Boolean: Represents logical values, either true or false.

// javascript

// let isAvailable = true;

// Null: Represents the intentional absence of any object value. It’s a primitive but behaves like an object.

// javascript

// let data = null;

// Undefined: Represents an uninitialized variable or a variable that has not been assigned a value.

// javascript

// let notAssigned;

// Symbol (ES6): Represents a unique and immutable identifier, often used for object property keys to avoid naming collisions.

// javascript

// let uniqueId = Symbol('id');

// BigInt (ES2020): Represents large integers that exceed the Number type’s safe integer limit. It's created by appending n to the end of an integer.

// javascript

//     let bigNumber = 123456789012345678901234567890n;

// 2. Reference Data Types (Objects)

// Objects are mutable and store collections of data or more complex entities.

//     Object: A collection of key-value pairs (properties and methods). An object can be created using curly braces {} or by using the new Object() syntax.

//     javascript

// let person = { name: "John", age: 30 };

// Array: A special type of object for storing ordered collections of values (elements), created using square brackets [].

// javascript

// let colors = ["red", "green", "blue"];

// Function: Functions are first-class objects in JavaScript, meaning they can be passed as arguments, returned from other functions, and assigned to variables.

// javascript

// function greet() { return "Hello"; }

// Date: Used to represent dates and times.

// javascript

// let today = new Date();

// RegExp: Represents regular expressions, used for pattern matching.

// javascript

// let pattern = /hello/i;

// Map: A collection of key-value pairs where keys can be of any type.

// javascript

// let map = new Map();

// Set: A collection of unique values.

// javascript

//     let set = new Set([1, 2, 3]);

// Type Checking

// You can check a variable's type using the typeof operator:

// javascript

// console.log(typeof 42); // "number"
// console.log(typeof "hello"); // "string"
// console.log(typeof true); // "boolean"


// const F_Number = 8 ;
// const Snd_Number = 6; 
// console.log(`${F_Number} This Is The First Number , ${Snd_Number} This Is The Last Number` , F_Number * Snd_Number)