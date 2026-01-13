/**
 *  1. DOM
 *  2. DOM SELECTORS 
 *  3. TRAVERSING THE DOM
 *  4. CREATING ELEMENTS ADD INTO IT AND INSERT INTO THE DOM
 *  5. REMOVING AND REPLACING ELEMENTS
 *  6. CLASSESS AND ATTRIBUTES
 *  7. EVENT LISTENERS, THE EVENT OBJECT
 */

// 1. WHAT IS THE DOM (Document Object Model) ?

/* 

-A structured representation of an html document.
-Tree of nodes/elements created by the browser.
-Object Oriented representation
-Javascript can be used to read/write/manipulate the dom

-Properties of the DOM
-Window object is the global object of the browser environment
-Document is a property of window object.

*/

// let val;

// val = document;
// val = document.all;
// val = document.all[9];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.URL;
// val = document.domain;
// val = document.characterSet;
// val = document.contentType;
// val = window.document;
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;
// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList;
// val = document.links[0].classList[0];

// val = document.images;
// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// console.log(val);

////// ***** END 1 ******* /////


/* 2.DOM SELECTORS FOR SINGLE ELEMENTS */

// 2.1 document.getElementById() // In the whole document grab me an element with an id of task-title
// console.log(document.getElementById('task-title'));
// // -- Get things from the element
// console.log(document.getElementById('task-title').id);

// You can put it in a variable to keep the code cleaner
// const taskTitle = document.getElementById('task-title'); 

// // -- Change styling
// document.getElementById('task-title').style.background = '#333'; 
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';

// // --Change content
// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'My Tasks';
// document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>';

// -- you can select any element with querySelector
// 2.2 document.querySelector()
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'red';
// document.querySelector('li:last-child').style.color = 'red'; 
// document.querySelector('li:nth-child(3)').style.color = 'green'
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#f4f4'


////// ***** END 2.1 ******* /////


// 3.DOM SELECTORS FOR MULTIPLE ELEMENT --Return html collection or nodeList

// 3.1 document.getElementsByClassName() HTMLCollection
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red'; 
// items[3].textContent = 'Helo';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// 3.2 document.getElementsByTagName() Html collection 
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hi';

// // Convert HTML collection into an Array
// lis = Array.from(lis);
// lis.reverse()

// lis.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent = `${index}:Hello`;
// });

// 3.3 document.querySelectorAll() NodeList

// const items = document.querySelectorAll('ul.collection li.collection-item');
// console.log(items);

// items.forEach(function(item, index){
//     item.textContent = `${index}:Hello`
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// console.log(liOdd);

// liOdd.forEach(function(li){
//     li.style.background = '#ccc';
// });

// for (let i = 0; i < liEven.length; i++) {
//     liEven[i].style.background = '#f4f4f4'
// }

/**
 * 1.getElementById()
 * 2.querySelector() 
 * 3.getElementsByClassName()
 * 4.getElementsByTagName()
 * 5.querySelectorAll() -- Nodelist
 */

////// ***** END 3  ******* /////