// 1. USING THE CONSOLE
// 2. VARIABLES -- let, const
// 3. DATA TYPES
// 4. TYPE CONVERSION

// alert('Hello 2026');

// -- 1. Using the Console

// Log to console
// console.log("Hello World!");
// console.log(123);
// console.log(true);
// var greeting = 'Hello';
// console.log(greeting);
// console.log([1,2,3,4]);
// console.log({a:1, b:2});
// console.table({a: 1, b: 2});
// console.error('This is some error!');
// console.clear();
// console.warn('This is a warning!');
// console.time('Hello');
//     console.log("Hello World!");
//     console.log("Hello World!");
//     console.log("Hello World!");
//     console.log("Hello World!");
//     console.log("Hello World!");
// console.timeEnd('Hello');

///// END 1 /////

// 2. VARIABLES -- let, const

// let a;
// console.log(a);
// a = 'Hello';
// console.log(a);
// const person = {
//     name: 'John',
//     age: 30
// }

// person.name = 'Sara';
// console.log(person);
// const numbers = [1,2,3,4,5];
// numbers.push(6);
// console.log(numbers);

///// END 2 /////

// 3. DATA TYPES

// -- Primitive Data types
// Strings, Numbers, Boolean, Symbols, Null,  Undefined

// -- Reference Types
// Arrays, Object literals, Functions, Dates, anything else

// PRIMITIVE TYPES
// String
// const name = 'John Doe';
// // Number
// const age = 45;
// // Boolean
// const hasKids = true;
// // Null
// const car = null;
// // Undefined
// let test;
// //Symbol
// const sym = Symbol();

// // REFERENCE TYPES - Object

// // Arrays
// const hobbies = ['movies', 'music'];

// // Object literal
// const address = {
//     city: 'Boston',
//     state: 'MA'
// };
// const today = new Date();
// console.log(today);

// console.log(typeof today);

///// END 3 /////

// 4. TYPE CONVERSION

// let val;

// // Number to String
// val = String(5);
// val = String(4 + 4);
// // Bool to string
// val = String(true);
// // Date to string
// val = String(new Date());
// // Array to String
// val = String([1,2,3,4,5]);

// // toString()
// val = (5).toString();
// val = (true).toString();

// String to number
// val = Number('5');
// val = Number(true);
// val = Number(null);
// val = Number('Hello');
// val = Number([1,3,5]);

// val = parseInt('100');
// val = parseFloat('1001.999930');

// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed());

// TYPE COERSION -- It happens automatically

// let val = Math.PI;
// console.log(val);

// val = Math.floor(Math.random() * 20 + 1);
// console.log(val);

// STRING 

// const firstName = 'William ';
// const lastName = 'Johnson';
// const str = 'Hello there my name is Brad';

// let val;

// val = firstName + lastName;

// // Concatenation
// val = firstName + ' ' + lastName;
// val = firstName.concat(' ', lastName);

// // Append
// val = 'Brad ';
// val += 'Traversy';

// val = firstName.indexOf('l');
// val = lastName.lastIndexOf('n');

// // charAt
// val = firstName.charAt('0');
// // Get last character
// val = firstName.charAt(firstName.length - 1);
// // Sub String
// val = firstName.substring(0, 4);
// // Slice
// val = firstName.slice(0, 4);
// val = firstName.slice(-6);

// // split()
// val = str.split(' ');
// // replace
// val = str.replace('Brad', 'Jack');
// // includes
// val = str.includes('Hello');

// console.log(val);

///// END  /////
