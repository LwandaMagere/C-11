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
// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);

// // Change styling
// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '5px';

// // Change content
// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'Dado';
// document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>';

// // 2. document.querySelector() -- it's much powerful we can select them by anything instead of class or id

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// DOM SELECTORS FOR MULTIPLE ELEMENTS

// 1. getElementsByClassName()

// const items = document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// const lis = document.getElementsByTagName('li');

// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// 2. document.querySelectorAll() node list

// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index){
//     item.textContent = `${index}: Hello`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index){
//     li.style.background = '#ccc';
// })

// console.log(items);

// ..........................................................................................................

// Traversing the DOM
let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes -- this includes the text(spaces) -- returns node list
val  = list.childNodes;
val  = list.childNodes[1];
val  = list.childNodes[0].nodeName;
val  = list.childNodes[1].nodeType; // 1 2 3 8 9 10

/**
 * 1.Element node
 * 2.Attribute (deprected)
 * 3.Text node
 * 8.Comment
 * 9.Document itself
 * 10.Doctype
 */

// Get the children element nodes -- this doesn't include text(space) -- returns the html collection
// val = list.children;

// val = list.children[3].children[0];
// // first child
// val = list.firstChild;
// val = list.firstElementChild;

// // last child
// val = list.lastChild;
// val = list.lastElementChild;

// // Count child element
// val = list.childElementCount;

// // Get  parent nodes
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// // Get next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling;
// val = listItem.nextElementSibling.nextElementSibling;

// // Get prev sibling
// val = listItem.previousSibling;
// val = listItem.nextElementSibling;
// val = listItem.previousElementSibling;

// console.log(val);

// CREATING ELEMENTS

// Creat elements
const li = document.createElement('li');

// Add class
li.className = 'collection-item';
// Add id
li.id = 'new-item';
// Add Attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));
// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

// Create link
const link = document.createElement('a');
// Add class
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';
// Append link to li
li.appendChild(link);
// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);









