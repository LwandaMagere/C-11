// const name = 'Dado Steven';
// const age = '30';
// const job = 'Software Engineer';
// const city = 'Nairobi';
// let html;

// function hello() {
//     return 'Hello'
// }

// // With Template Strings (es6)

// html = `
//     <ul> 
//         <li> Name: ${name}</li>
//         <li> Age: ${age}</li>
//         <li> Job: ${job}</li>
//         <li> City:${city}</li>
//         <li>${2 + 3}</li>
//         <li>${hello()}</li>
//         <li>${age < 30 ? 'over 30' : 'under 30'}</li>

//     </ul>
// `;

// document.body.innerHTML = html;

//********************************************************************** */

// // Create some Arrays
// const numbers = [12, 23, 45, 34, 78, 71, 17, 29];
// const numbers2 = new Array(12, 28, 45, 74, 78, 71, 17, 10);
// const fruits = ['Apple', 'Banana', 'Mango', 'Pears'];
// const mixed = ['String', true, undefined, null, {a: 1, b: 2}, new Date(), Symbol()];

// let val;

// // Get Array length
// val = numbers.length;

// // Check if is Array.................................
// val = Array.isArray(numbers);
// // Find index of value .........................................
// val = numbers2.indexOf(74);

// // MUTATING ARRAYS

//     // // Add on to end ............................
//     // numbers2.push(250);
//     // // Take off from end
//     // numbers2.pop();

//     // // Add on to front ...........................
//     // numbers2.unshift(120);
//     // // Take off from front
//     // numbers2.shift();

//     // // Reverse .........................................
//     // numbers.reverse();

//     // // concat .............................................
//     // val  = numbers.concat(numbers2);
//  // Sorting Arrays
//  val = fruits.sort();
//  val = numbers2.sort();

//  // Use the compare function .............................................
//  val = numbers2.sort(function(x,y){
//     return x - y;
//  });

 // Find ...........................................................
//  function under50(num) {
//     return num <  50;
//  }

//  val = numbers2.find(under50);

// console.log(numbers2);
// console.log(val);

//********************************************************************** */

//  OBJECT LITERRAL

// const person = {
//     firstName: 'Steve',
//     address: {
//         city: 'Miami',
//         state: 'FL'
//     },
//     getBirthYear: function() {
//         return 2023 - this.age;
//     },
//     age : 30
// }

// let val;

// val = person;

// // Get specific value
// val = person.firstName;
// val = person['firstName'];
// val = person.address.city;
// val = person['address']['city'];

// console.log(val);

// DATE

//********************************************************************** */

// IF STATEMENTS, RELATION AND LOGICAL OPERATORS && || ! TERNARY

// SWITCHES -- Used to validate conditions


// FUNCTION DECLARATION

// function hello() {
//     return 'sasa';
// }

// console.log(hello);

// // Function Expression -- putting a function as a variable assignment
// const square = function(x) {
//     return x * x;
// }
// console.log(square(5));

// // Immediately Invokable Function Expression (IIFEs)
// (function(){
//     console.log('IIFE ran...');
// })();

// (function(x){
//     console.log(x);
// })(5);

// PROPERTY METHODS

// const todo = {
//     add: function todo() {
//         console.log('Add todo..')
//     },
//     add2: function(){
//         console.log('Kesho');
//     }
// }
// todo.delete = function() {
//     console.log('delete todo...');
// }

// todo.add();
// todo.add2();
// todo.delete();

//********************************************************************** */


// LOOPS AND ITERATION

// General loops (FOR, DO WHILE, WHILE)

// const cars = ['Chevy', 'Toyota', 'Honda', 'Ford'];

// //Foreach It can take three arguments but mostly need one
// cars.forEach(function(car){
//     console.log(car);
// })

// cars.forEach(function(car, index, array){
//     // console.log(`${index} : ${car}`);
//     console.log(array);
// })

// // Map
// const users = [
//     {id: 1, name: 'Steven'},
//     {id: 2, name: 'Dado'},
//     {id: 3, name: 'Lenssen'}
// ];

// const ids = users.map(function(user){
//     return user.id;
// });
// console.log(ids);
// console.log(Array.isArray(ids));

// For in loop
// const user1 = {
//     firstName: 'Dado',
//     lastName: 'Steven',
//     age: 30
// };

// for(let x in user1) {
//     console.log(`${x} : ${user1[x]}`);
// };

//********************************************************************** */

// WINDOW / METHODS / PROPERTIES / OBJECT  -- is the global object environment

// window.console.log(123);

// let val;

// val = window.outerHeight;
// val = window.outerWidth;

// val = window.innerHeight;
// val = window.innerWidth;

// // Scroll Points
// val = window.scrollX;
// val = window.scrollY;

// // Location Object
// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;

//Redirect
// val = window.location.href = 'http://google.com';
// window.location.reload();

// History Object
// window.history.go();

// Navigator Object // deal with browsers
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;

// console.log(val);

//********************************************************************** */

// SCOPE

