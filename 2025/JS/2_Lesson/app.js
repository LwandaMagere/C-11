// 1. TEMPLATE LITERALS
// 2.ARRAY METHODS
// 3.OBJECT LITERALS
// 4.DATE N TIME
// 5.IF STATEMENT


// 1. TEMPLATE LITERALS

// const name = 'John';
// const age = 30;
// const job = 'web developer';
// const city = 'Miami';
// let html;

// function hello(){
//     return 'Hello';
// }

// // With template strings
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

// document.body.innerHTML = html;

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
// const person = {
//     firstPerson: 'Steve',
//     lastName: 'Smith',
//     age: 30,
//     email: 'steve@aol.com',
//     hobbies: ['music','spirt'],
//     address: {
//         city: 'Miami',
//         state: 'FL'
//     },
//     getBirthYear: function() {
//         return 1987
//     }
// }

// let val;

// val = person;
// //Get a specific value
// val = person.firstPerson;
// val = person.hobbies[1];
// val = person.getBirthYear();

// console.log(val);

// 4.DATE N TIME

// 5.IF STATEMENT


