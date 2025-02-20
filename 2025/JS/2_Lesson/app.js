// const name = 'John';
// const age = 30;
// const job = 'Web developer';
// const city = 'Miami';
// let html;

// function hello() 
// {
//     return 'Hello!';
// }

// // 1. Template literals/strings
// html = `
//     <ul>
//         <li>Name: ${name}</li>
//         <li>Age: ${age}</li>
//         <li>Job: ${job}</li>
//         <li>City: ${city}</li>
//         <li>${2 + 2}</li>
//         <li>${hello()}</li>
//         <li>${age < 30 ? 'under 30' : 'over 30'}</li>
//     </ul>
// `;

// document.body.innerHTML = html;

// // 2. Create some arrays
// const numbers = [22,33,45,67,89,90,55];
// const numbers2 = new Array(22,43,76,87,21,17);
// const fruits = ['apple', 'mangoes','banana','pear'];
// const mixed = [22, 'Hello', {a: 1, b: 2}, undefined, null, new Date]

// let val;

// // Get array length
// val = numbers.length;
// // Check if is array
// val = Array.isArray(numbers);
// // Find index of value
// val = numbers.indexOf(33);

// // Mutating Arrays

// // // Add on to end
// // numbers.push(250);
// // // Add on to front
// // numbers.unshift(120);
// // // Take off from end
// // numbers.pop();
// // // Take off from front
// // numbers.shift();
// // // Splice values
// // numbers.splice(1,1);
// // // Reverse
// // numbers.reverse();

// // Concatenate
// val = numbers.concat(numbers2);
// // Sorting
// val = fruits.sort();

// // Use the compate function
// val = numbers.sort(function(x,y){
//     return x - y;
// })

// // Find
// function under50(num){
//     return num < 50;
// }

// val = numbers.find(under50)

// console.log(numbers);
// console.log(val);

// // 4. Object literals
// const person = {
//     firstName: 'Steve',
//     lastName: 'Smith',
//     age: 30,
//     email: 'dadolenssen@gmail.com',
//     Hobbies: ['music', 'sports'],
//     address: {
//         city: 'Nairobi',
//         state: 'Florida'
//     },
//     getBirthYear: function() {
//         return 1987;
//     }
// };

// let val2;
// val2 = person;

// // Get specific value
// val2 = person.firstName;
// val2 = person.getBirthYear();

// console.log(val2);

// 5. Loop through Array
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// FOREACH
cars.forEach(function(car){
    console.log(car);
})

// MAP - returns a different array
const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Sara'},
    {id: 3, name: 'Karen'}
];

const ids = users.map(function(user) {
    return user.id;
})
console.log(ids);

// For in loop
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 32
}

// for (let x in user) {
//     console.log(user);
// }

for (let x in user) {
    console.log(`${x} : ${user[x]}`)
}



