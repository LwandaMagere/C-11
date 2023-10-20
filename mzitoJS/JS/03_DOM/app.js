// DOM

// let val;

// val = document;
// val = document.all;
// val = document.all[0];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain; // loop back address
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0]['method'];

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;

// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let arrayScrips = Array.from(scripts);

// arrayScrips.forEach(function(script){
//     console.log(script.getAttribute('src'));
// });

// console.log(val);

//................................................................................

// DOM SELECTORS FOR SINGLE ELEMENTS

// 1. document.getElementById()
console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);

// Change styling
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '5px';

// Change content
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'Dado';
document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector() -- it's much powerful we can select them by anything instead of class or id

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';







