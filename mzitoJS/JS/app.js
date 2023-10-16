// //BASICS

//     alert("Mzito Js");
//     console.table({a: 1, b: 2});
//     console.error("This is some error");
//     console.clear();
//     console.warn("This is some warning");
//     console.time("Hello");
//         console.log("Hello World!");
//         console.log("Hello World!");
//         console.log("Hello World!");
//         console.log("Hello World!");
//         console.log("Hello World!");
//     console.timeEnd("Hello");


//////////////////////////////////////////////////////
// const name = 'John';
// const age = 30;
// const job = 'Software Engineer';
// const city = 'Dagoreti';
// let html;

// function hello() {
//     return 'Hello!';
// }

// html = `
//     <ul>
//         <li>Name: ${name}</li>
//         <li>Age: ${age}</li>
//         <li>Job: ${job}</li>
//         <li>City: ${city}</li>
//         <li>${hello()}</li>
//     </ul>
// `;

// document.body.innerHTML = html;
///////////////////////////////////////////////////////////

// numbers = new Array(23, 20, 45, 56, 73, 46, 83, 34);
// let val = numbers.sort();
// console.log(val);
// val = numbers.reverse();
// console.log(val);

// function under50(num) {
//     return num < 50;
// }

// val = numbers.find(under50);
// console.log(val);
///////////////////////////////////////////////////////////

// (function(name){
//     console.log('Hi ' + name);
// })('Dado');
//////////////////////////////////////////////////////////

// const users = [
//     {id: 1, name: 'Dado'},
//     {id: 2, name: 'Jopadhola'},
//     {id: 3, name: 'Jokajock'}
// ];

// const ids = users.map(function(user){
//     return user.id;
// });
// const names = users.map(function(name1){
//     return name1.name;
// })

// console.log(ids);
// console.log(names);
////////////////////////////////////////////////////////////

// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// // for (let i = 0; i < cars.length; i++) {
// //     console.log(cars[i]);
// // }

// cars.forEach(function(ca, inde, arr){
//     console.log(`${inde} : ${ca}`)
//     console.log(arr);
// })
///////////////////////////////////////////////////////////

// let val  = window.location.href;

// window.location.href = 'http://google.com';

// console.log(val);
//////////////////////////////////////////////////////////

// let val = document.getElementById('nano').id;
// console.log(val);
/////////////////////////////////////////////////////

// 1.0 document.getElementById()
// Selectors for Single Elements //////////////////////////////////////////////////////////////////////////////

// console.log(document.getElementById('nano'));

// //Get things from the element
// console.log(document.getElementById('nano').id);
// console.log(document.getElementById('nano').className);

// // Change Styling
// document.getElementById('nano').style.background = 'gold';

// // Change Content
// document.getElementById('nano').textContent = 'Dado';
// document.getElementById('nano').innerHTML = 'Lenssen';
// document.getElementById('nano').innerHTML = '<span style = "color:red">Steven</span>';

// 1.1 document.querySelector()

// console.log(document.querySelector('#nano'));
// console.log(document.querySelector('.nano2'));
// console.log(document.querySelector('h1'));


// Dom Selector for multiple Elements ////////////////////////////////////////////////////////////////////////////////////
// 2.0 document.getElementsByClassName

// const items = document.getElementsByClassName('colletion-item');
// console.log(items);
// console.log(items[0]);

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// 2.1 document.getElementsByTagName

// const lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);

// lis[0].style.color = 'red';

// 2.2 document.querySelectorAll
const items = document.querySelectorAll('ul.collection li.collection-item');
console.log(items);

items.forEach(function(item, index){
    item.textContent = `${index}: Hello`;
})
console.log(items);