// 1. TEMPLATE LITERALS

// const name = 'John';
// const age = 30;
// const job = 'web developer';
// const city = 'Miami';
// let html;

// function hello() {
//     return 'hello';
// }

// // With template strings / literal
// html = `
// <ul>
//     <li>Name: ${name}</li>
//     <li>Age: ${age}</li>
//     <li>Job: ${job}</li>
//     <li>City: ${city}</li>
//     <li>${2 + 2}</li>
//     <li>${hello()}</li>
//     <li>${age > 30 ? 'over 30' : 'under 30'}</li>
// </ul>
// `;

// document.body.innerHTML = html;

// 2. ARRAYS AND ARRAY METHODS ////////////////////////////////////

// // create some arrays
// const numbers = [43,56, 33, 23, 44, 36, 5];
// const numbers2 = new Array(22,45,33,75, 54);
// const fruit = ['apple', 'banana', 'apple', 'pear'];
// const mixed = [22, 'hello', true, undefined, null, {a: 1, b: 2}, new Date()];

// let val;

// // Get array length
// val = numbers.length;
// // Check if is array
// val = Array.isArray(numbers);
// // Find index of value
// val = numbers.indexOf(36);

// // Mutating Arrays

// // // Add on to end
// // numbers.push(250);
// // // Add on to front
// // numbers.unshift(120);
// // // Take off from end
// // numbers.pop();
// // // Take off from front
// // numbers.shift();
// // // Splice
// // numbers.splice(1,1);
// // // Reverse
// // numbers.reverse();

// // Concatenate arrays
// val = numbers.concat(numbers2);

// // Sorting arrays
// val = fruit.sort()

// // Use the "compare function"
// val = numbers.sort(function(x, y){
//     return x - y;
// });

// // Find
// function under50(num) {
//     return num < 50;
// }

// val = numbers.find(under50);


// console.log(numbers);
// console.log(val);

// 3. OBJECT LITERALS ///////////////////////////////

const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@gmail.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Nairobi',
        state: 'Florida'
    },
    getBirthYear: function(){
        return 1987;
    }
}

let val;

val = person;

// Get specific value
val = person.firstName;


console.log(val);
