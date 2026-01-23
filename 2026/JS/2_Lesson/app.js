// 1.TEMPLATE LITERALS
// 2.ARRAY METHODS
// 3.OBJECT LITERALS
// 4.DATE N TIME
// 5.IF STATEMENT
// 6.FUNCTIONS
// 7.LOOPS N ITERATIONS
// 8.WINDOW OBJECT
// 9.SCOPE

// 1. TEMPLATE LITERALS

// const name = 'John';
// const age = 30;
// const job = 'web developer';
// const city = 'Miami';
// let html;

// function hello(){
//     return 'Hello';
// }

// With template strings
// html = `
//     <ul>
//         <li>Name: ${name}</li>
//         <li>Age: ${age}</li>
//         <li>City: ${city}</li>
//         <li>Job: ${job}</li>
//         <li>${2 + 2}</li>
//         <li>${hello()}</li>
//         <li>${age > 30 ? 'over 30' : 'under 30'}</li>
//     </ul>
// `

// document.body.innerHTML += html;
// document.body.style.backgroundColor = 'papayawhip';

// 2.ARRAY METHODS
// const numbers = [43, 56, 33, 23, 44, 36, 5];

// const number2 = new Array(22, 45,33, 76, 54);
// const fruits = ['apple', 'banana', 'pear','orange'];
// const mixed = [22, 'hello', true,undefined, null,{a:1, b:1}, new Date()];

// let val;

// // Get array length
// val = numbers.length;
// // Check if is array
// val = Array.isArray(numbers);
// // Get a single value from an array
// val = numbers[3];
// // Insert into array
// numbers[2] = 100;
// // Find index value
// val = numbers.indexOf(36);

// Mutating Arrays

// Add on to end
// numbers.push(250)
// // Add on to front
// numbers.unshift(120);
// // Take from end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Splice values
// numbers.splice(1,1);
// // Reverse
// numbers.reverse();
// // Concatenate
// val = numbers.concat(number2);
// Sorting array
// val = fruits.sort();
// val = numbers.sort();

//Use the compare function
// val = numbers.sort(function(x,y){
//     return x - y;
// });

// Find
// function under50(num) {
//     return num < 50;
// }

// val = numbers.find(under50);


// console.log(numbers);
// console.log(val);

// 3.OBJECT LITERALS

//Get a specific value
// val = person.firstPerson;
// val = person.hobbies[1];
// val = person.getBirthYear();

// console.log(val);

// 4.DATE N TIME

// let val;
// const today = new Date();
// let birthday = new Date('9-10-1981 11:25:00');
// birthday = new Date('september 10 1981');
// birthday = new Date('9/10/1981');

// val = birthday;
// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();

// birthday.setMonth(2);
// birthday.setDate(2);
// birthday.setFullYear(1985);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setMinutes(25);

// console.log(birthday);

// 5.IF STATEMENT

// const id = 100;

// Equal To
// if(id === 101) {
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// Not Equal To
// if(id != 100) {
//     console.log('CORRECT1');
// } else {
//     console.log('INCORRECT2');
// }

// Equal To Value n Type
// if(id !== 100) {
//     console.log('CORRECT1');
// } else {
//     console.log('INCORRECT2');
// }

// Test if undefined
// if(typeof id !== 'undefined') {
//     console.log(`The id is ${id}`);
// } else {
//     console.log('No ID');
// }

// Greater than or Less Than

// IF ELSE

// LOGICAL OPERATORS

// SWITCH STATEMENTS

// const color = 'yellow';

// switch(color) {
//     case 'red':
//         console.log('Color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('Color is not red or blue');
//         break;

// }

// 6. FUNCTIONS 
//  - function declaration
//  - function expressions
//  - IFFEs

// Function Expression
// const square = function (x  = 3) {
//     return x*x;
// }
// console.log(square());

// Immediately Invokable Function Expression
// (function(){
//     console.log('IFees here');
// })();

// (function(name){
//     console.log('Hello ' + name );
// })('Dado');

// 7. LOOPS N ITERATIONS
// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// FOREACH
// cars.forEach(function(car, index, array) {
//     console.log(`${index} : ${car}`);
//     console.log(array);
// })

// // Map
// const users = [
//     {id: 1, name: 'John'},
//     {id: 2, name: 'Sara'},
//     {id: 3, name: 'Karen'}
// ];

// const ids = users.map(function(user){
//     return user.name;
// });

// const ids = users.map(function(user){
//     return user.id
// })

// console.log(ids);

// For In loop (often used for objects)

// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 40
// }

// for (let x in user) {
//     // console.log(x);
//     console.log(`${x} : ${user[x]}`);
// }


// 8. WINDOW OBJECT

// WINDOW METHODS / OBJECTS / PROPERTIES

// window.console.log(123);

// Alert
// window.alert(123)

// Prompt
// const input = prompt('What\'s your name?');
// alert(input);

// Confirm
// if (confirm('Are you sure?')) {
//     console.log('YES')
// }

// let val;

// val = window.location;
// val = window.location.hostname;
// val = window.location.host;
// val = window.location.href;
// val = window.location.search;

// val = window.navigator;
// val = window.navigator.platform;

// console.log(val);

// Redirect
// window.location.href = 'http://google.com';
// Reload
// window.location.reload();

// History Object
// window.history.go(-1);
// window.history.go(1);
// let val = window.history.length;
// console.log(val);

// Navigator Object
// let val;
// // val = window.navigator
// val = window.navigator.vendor;
// console.log(val);

// 9.SCOPE










const mixed = [new Date(), true, undefined, {a: 1, b: 2,}];
let val;

val = Array.isArray(mixed);
val = mixed.length;
val = mixed.indexOf(Object);

console.log(val);
