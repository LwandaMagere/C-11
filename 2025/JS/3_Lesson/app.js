// 1. WHAT IS THE DOM (Document Object Model) ?

/* 

-A structured representation of an html document.
-Tree of nodes/elements created by the browser.

-Object Oriented representation
-Javascript can be used to read/write/manipulate the dom

*/

// let val;

// val = document;
// val = document.all;
// val = document.all[42];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.URL;
// val = document.domain;
// val = document.characterSet;
// val = document.contentType;
// val = window.document;

// console.log(val);







//A  ********************************************************************* */
/* DOM SELECTORS FOR SINGLE ELEMENTS */







// 1. document.getElementById()  11111111111111111111111111111111111111111111111111111111111111
// console.log(document.getElementById('task-title'));

// // -- Get things from the element
// console.log(document.getElementById('task-title').id);

// // const taskTitle = document.getElementById('task-title');

// // -- Change styling
// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';


// // --Change content
// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'My Tasks';
// document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>';


// 2. document.querySelector() -- you can select any element 2222222222222222222222222222222
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









/*B ************************************************************************************************************* */
// DOM SELECTORS FOR MULTIPLE ELEMENT --Return html collection or nodeList









// 1. document.getElementsByClassName() 1111111111111111111111111111111111111111111111
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Helo';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// 2. document.getElementsByTagName() Html collecton 222222222222222222222222222222222222222222222222222222
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
// })


// 3. document.querySelectorAll() NodeList 333333333333333333333333333333333333333333333333333333333333333
// const items = document.querySelectorAll('ul.collection li.collection-item');
// console.log(items);

// items.forEach(function(item, index){
//     item.textContent = `${index}:Hello`
// })


// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li){
//     li.style.background = '#ccc';
// })

// for (let i = 0; i < liEven.length; i++) {
//     liEven[i].style.background = '#f4f4f4'
// }










/* C ***************************************************************************************************** */

// TRAVERSING THE DOM
// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child'); 

// val = listItem;
// val = list;

// // Get child nodes
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[0].nodeType;

// // Get children Element nodes -- This doesn't give textnodes
// val = list.children;
// val = list.children[1];
// list.children[1].textContent = 'Hello';


// // Children of children
// val = list.children[3].children;
// val = list.children[3].children[0].id = 'test-link'
// val = list.children[3].children[0];

// // First child
// val = list.firstChild;
// val = list.firstElementChild;

// // Last child
// val = list.lastChild;
// val = list.lastElementChild;

// // count child element
// val = list.childElementCount;


// // Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// // Get next Sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling.nextElementSibling;

// // Get previous Sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;

// console.log(val);

/* D *********************************************************************** */

// CREATING ELEMENTS ADD INTO IT AND INSERT INTO THE DOM

// // Create element
// const li = document.createElement('li');

// // Add class
// li.className = 'collection-item';

// // Add id
// li.id = 'new-item';

// // Add attribute
// li.setAttribute('title', 'New Item');

// //Create Text node and Append
// li.appendChild(document.createTextNode('Hello World'));


// // Create new link element
// const link = document.createElement('a');

// // Add class
// link.className = 'delete-item secondary-content';

// // Add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';

// // Append link into li
// li.appendChild(link);

// // Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);









