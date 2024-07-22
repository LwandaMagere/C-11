                                        // INTRODUCTION
// Log to console

// console.log("Hi");
// console.log(true);
// console.log([1,2,3]);
// console.log({a:1, b:2});
// console.table({a:1, b:2});

// console.error('This is an error');
// console.clear();
// console.warn('This is a warning!');

// console.time('Hello');
//     console.log("Hi");
//     console.log("Hi");
//     console.log("Hi");
//     console.log("Hi");
//     console.log("Hi");
//     console.log("Hi");
// console.timeEnd('Hello');


// ********** 1. DATA TYPES ***************************

    // 1. Primitives

// String
// const name = 'Steven Dado';
// console.log(typeof name);

// // Number
// const age = 32;
// console.log(typeof age);

// // Boolean
// const hasKids = false;
// console.log(typeof hasKids);

// // Null
// const car = null;
// console.log(typeof car);

// // Undefined
// let test;
// console.log(typeof test);

// // Symbol
// const sym = Symbol();
// console.log(typeof sym);

//      // 2. REFERENCE TYPES - Objects

// //Arrays
// const hobbies = ['movies', 'music'];
// console.log(typeof hobbies);

// // Object literal
// const address = {
//     city: 'Boston',
//     state: 'MA'
// }
// console.log(typeof address);

// // Date
// const today = new Date();
// console.log(typeof today);

//                         // TYPE CONVERSION
// let val;

// // Number to String
// val = String(5);
// val = String(4+4);

// // Bool to String
// val = String(true);
// val = String(new Date());

// // Array to string
// val = String([1,2,3,4]);

// // toString()
// val = (5).toString();
// val = (true).toString();

// // String to Numbers
// val = Number('5');
// val = Number(true);
// val = Number(null);
// val = Number('Hello');
// val = Number([1,2,3]);

// val = parseInt('100');
// val = parseFloat('100.30');

// // output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed());

// Type coursion is done by Javascript

            // STRINGS

const firstName = 'Dado';
const lastName = 'Steven';
const str = 'Hello there my name is Steven';

let val;

// Concatenation
val = firstName + ' ' + lastName;
console.log(val);

// Append
val = 'Lwanda ';
val += 'Magere';
console.log(val);

// Length
val = firstName.length;
console.log(val);

// Concat
val = firstName.concat(' ', lastName);
console.log(val);

// Change case
val = firstName.toUpperCase();
console.log(val);

// indexOf()
val = firstName.indexOf('D');
val = firstName.lastIndexOf('o');

// charAt()
val = firstName.charAt('2');

//substring
val = firstName.substring(0, 2);

// slice
val = firstName.slice(0, 2);

// split()
val = str.split(' ');

// replace()
val = str.replace('Steven', 'Dado');

// includes
val = str.includes('Hello');
console.log(val);