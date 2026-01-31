// const sayHello = function () {
//     console.log('Hello');
// }

// const sayHello = () => {
//     console.log('Hello');
// }

// const sayHello = () => console.log('Hello');

// One line returns
// const sayHello = () => 'Hello';
// console.log(sayHello())

// return object
// const sayHello = ()=> ({msg: 'Helo'})
// console.log(sayHello());

// const sayHello = name => console.log(`Hello ${name}`);

// sayHello('Dado');

const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name) {
//     return name.length;
// });

// Shorter
// const nameLengths = users.map((name) => {
//     return name.length;
// });

// Shortest
const nameLengths = users.map(name => name.length);
console.log(nameLengths);