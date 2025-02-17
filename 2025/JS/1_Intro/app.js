// alert('Hello World!');

// 1. Log to console
// console.log('sasa');
// console.log(123);
// console.log(true);
// let greeting = 'Hello World!';
// console.log(greeting);
// console.log([1,2,3]);
// console.log({a:1, b:2});
// console.table({a:1, b:2});
// console.error('This is some error');
// console.clear();
// console.warn('This is warning!');

// console.time('Hello');
//     console.log('sasa');
//     console.log('sasa');
//     console.log('sasa');
//     console.log('sasa');
// console.timeEnd('Hello');

// 2. Variables and Declarations

// let, const

// const person = {
//     name: 'John',
//     age: 40
// };

// person.name = 'sara';
// console.log(person);

// 3. Types of Data

/*
-------- Primitive Data Types
STRINGS
NUMBERS
SYMBOLS
BOOLEAN
NULL
UNDEFINED

----------Reference Types
ARRAYS
OBJECT LITERALS
FUNCTIONS
DATES
ANYTHING ELSE

*/

// PRIMITIVES

// Strings
const name = 'John Doe';
// Numbers
const age = 45;
// Boolean
const hasKids = true;
// Null
const car = null;
//undefined
let test;
// Symbol
const sym = Symbol();

// REFERENCE - Objects

// Arrays
const hobbies = ['movies', 'swimming', 'reading'];
// Object literal
const address = {
    city: 'Boston',
    state: 'MA'
};
// Date
const date = new Date();



console.log(typeof date);

// 4. Type Conversion

// Number to String
let val;

val = String(555);
val = String(4+4);

// Boolean to String
val = String(true);

// Date to String
val = String(new Date());

// Array to String
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();

// String to Numbers
val = Number('5');
val = Number(true);
val = Number(null);
val = Number('Hello');
val = Number([1,2,3]);

val = parseInt('100');


console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed())