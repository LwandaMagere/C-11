// alert("Hello World!");

// LOG TO CONSOLE
console.log("Hello World");
console.log(123);
console.log(true);
let greetings = 'Hello World';
console.log(greetings);
console.log([1,2,3,45,5]);
console.log({a:1, b:2});
console.table({a:1, b:2});

console.error('This is some error');
console.clear();
console.warn('This is a warning!');

console.time('Hello');
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
    console.log("Hello World");
console.timeEnd('Hello');
console.clear();

// PRIMITIVE TYPES

// String
const name = 'John Doe';
console.log(typeof name);
// Number
const age = 42;
console.log(typeof age);
// Boolean
const hasKids = true;
console.log(typeof hasKids);
// Null
const car = null;
console.log(typeof car);
// Undefined
let test;
console.log(typeof test);
// Symbol
const sym = Symbol();
console.log(typeof sym);

// REFERENCE TYPES - Objects
// Arrays
const hobbies = ['music', 'footbak', 'singing'];
console.log(typeof hobbies);
// Object literal
const address = {
    city: 'Boston',
    state: 'MA'
};
console.log(typeof address);

const date = new Date();
console.log(typeof date);

let val;

// Number to string
val = String(5);
val = String(5+5);
// Bool to string
val = String(val);
// Date to a string
val = String(new Date());
// Array to string
val = String([1,2,3,4]);

// toString
val = (5).toString();
val = (true).toString();

// String to Numbers
val = Number('5');
val = parseInt('100');
val = parseFloat('100.33');



// Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed());
