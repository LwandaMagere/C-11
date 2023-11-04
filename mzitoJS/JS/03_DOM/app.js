// DOM : The browser gives us a window object and inside that we have a document object ... then root element. Document is a property of window object

// let val;

// val = document;
// val = document.all;
// val = document.all[0];
// val = document.all.length;
// val = document.head;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;

// val = document.links;
// val = document.links[0];
// val = document.links[0].className;
// val = document.links[0].classList;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let arrayScripts = Array.from(scripts);

// arrayScripts.forEach(function(script){
//     // console.log(script);
//     console.log(script.getAttribute('src'));
// })

// console.log(val);
//..................................................................................................................................

// DOM SELECTORS - This are document object methods that allows us to pull things from the DOM. Selection and manipulation

// Single Element Selector getELementById & querySelector

// getElementById() - Only select by ID ..................................

// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// // Change styling
// document.getElementById('task-title').style.background = "#333";
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '5px';

// // Change content
// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'My Tasks';
// document.getElementById('task-title').innerHTML = '<span style= "color:red">Task List</span>';

// document.querySelector() ................................................

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'gold';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = "#ccc";
// document.querySelector('li:nth-child(even)').style.background = '#f4f4'
// .............................................................................


// DOM Selector for Multiple Elements

// document.getELementsByClassName()........................................

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello Steve';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// document.getELementsByTagName() An HTMLCollection is not an Array.............

// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[1].textContent = 'Hello';

// // Convert HTML Collection into an Array
// lis = Array.from(lis);
// lis.reverse();

// lis.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent = `${index} : Hello`;
// })

// console.log(lis);

// document.querySelectorAll() they are the same as the two above except it returns node list which counts things like text nodes that are spaces, it allows array methods and forEach without conversion................................................ you can still use length wiht an html collection...........................

// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index){
//     item.textContent = `${index} : Dado`
// })

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index){
//     li.style.background = '#ccc';
// })

// for (let i = 0; i < liEven.length; i++){
//     liEven[i].style.background = '#f4f4';
// }

// console.log(items);

//  TRAVERSING THE DOM - Parents and children of specific nodes...................

// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// // Get child nodes -- text node are line breaks
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[10].nodeName;
// val = list.childNodes[0].nodeType;

// // 1. Element
// // 2. Attribute (deprecated)
// // 3. Text Node
// // 8. comment
// // 9. Document itself
// // 10. Doctype

// // Get children element nodes -- returns html collection
// val = list.children;
// val = list.children[0];
// val = list.children[0].textContent = 'Hello';
// // Children of children
// val = list.children[3].children;
// val = list.children[3].children[0];
// val = list.children[3].children[0].id = 'test-link';

// // Fist child
// val = list.firstChild; 
// val = list.firstElementChild; // not dealing with text nodes

// // Last child
// val = list.lastChild;
// val = list.lastElementChild;

// // Count child elements
// val = list.childElementCount;

// // Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// //Get next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling;
// val = listItem.nextElementSibling.nextElementSibling;
// val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// // Get prev sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;

// console.log(val);
// ..................................................................................................................

// CREATING ELEMENTS

// let li = document.createElement('li');

// // Add class
// li.className = 'collection-item';

// // Add attribute
// li.setAttribute('title', 'New-item');

// // Create text node and append
// li.appendChild(document.createTextNode('Hello World'));

// // Create new link element
// const link = document.createElement('a');
// // Add class
// link.className = 'delete-item secondary-content';
// // Add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';
// // Append link into li
// li.appendChild(link);



// // Append li as a child to ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);

// REMOVING REPLACING ELEMENTS................................



// EVENT LISTENERS.........................................

// document.querySelector('.clear-tasks').addEventListener('click',function(e){
//     console.log('Hello World!');

//     e.preventDefault();
// });

// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e) {
//     // console.log('clicked..');
//     // e.preventDefault();

//     let val;
//     val = e;

//     // Event target element
//     val = e.target;
//     val = e.target.id;
//     val = e.target.className;
//     val = e.target.classList;
//     val = e.target.innerText = 'Hello';

//     // Event type
//     val = e.type;

//     // Time stamp
//     val = e.timeStamp;

//     // Coord relative to the window
//     val = e.clientY;
//     val = e.clientX;

//       // Coord relative to the element
//       val = e.clientY;
//       val = e.clientX;

//     console.log(val);

// }

// MOUSE EVENTS..............................................

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// // Click
// clearBtn.addEventListener('click', runEvent);
// // Double click
// clearBtn.addEventListener('dblclick', runEvent);
// //Mousedown - click and hold
// clearBtn.addEventListener('mousedown',runEvent);
// //Mouseup - click and hold
// clearBtn.addEventListener('mouseup',runEvent);
// Mouse enter - fire on parent element
// card.addEventListener('mouseenter',runEvent);
// // Mouseleave - fire on parent element
// card.addEventListener('mouseleave',runEvent);
// // Mouseover 
// card.addEventListener('mouseover',runEvent);
// // Mouseout
// card.addEventListener('mouseout',runEvent);
// Mousemove
// card.addEventListener('mousemove',runEvent);




// // Event handler
// function runEvent(e) {
//     console.log(`EVENT TYPE: ${e.type}`);

//     heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    
//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }

// FORMS & INPUT keyboard input events ..................................................



// NOTES NOTES NOTES EXTRA NOTES

// 1. document.getElementById('task-title').id;
// 2. document.querySelector('#task-title');
// 3. document.getElementsByClassName('collection-item') -html colle
// 4. document.getElementsByTagName('li')
// 5. document.querySelectorAll(ul.collection) - returns nodes list

// 1. val = list.childNodes - even text nodes
// 2. val = list.children - html collections, elements only
// 3. val = list.children[3].children;
// 4. val = list.firstChild - even text nodes
// 5. val = list.firstElementChild - element
// 6. val = list.lastElementChild - return element
// 7. val = list.childELementCount

// 1. val = list.parentNode;
// 2. val = list.parentElement;
// 3. val = list.parentElement.parentElement;

// 1. val = list.nextSibling - text node
// 2. val = list.nextELementSibling.nextELementSibling
// 3. val = list.previousSibling
// 4. val = list.previousElementSibling

// 1. const li = document.createElement('li');
// 2. li.className = 'collection-item'
// 3. li.setAttribute('title', 'New item')
// 4. li.appendChild(document.createTextNode('Helo'))

// 1. cardActon.replaceChild(newHead, oldHead);
// 2. lis[0].remove()
// 3. list.removeChild(lis[3]);

// 1. val = link.className
// 2. val = link.classList[]
// 3. link.classList.add('test'); adding class name
// 4. link.clasList.remove('test');

// 1. val = link.getAttribute('href')
// 2. val = link.setAttribute('href', 'http//google.com')
// 3. val = link.hasAttribute('title')
// -- link.setAttribute('title' 'Google')
// 4. link.removeAttribute('title')

// 1. click
// 2. dblclick
// 3. mousedown
// 4. mouseup
// 5. mouseenter
// 6. mouseleave
// 7. mouseover 
// 8. mouseout
// 9. mousemove
// 10. submit
// 11. keydown
// 12. keyup
// 13. keypress
// 14.focus
// 15. blur -- click out 
// 16. cut
// 17. paste
// 18. input
// 19. change


// Event target element
// 1. e.target;
// 2. e.target.id;
// 3. e.target.className;
// 4. e.target.classList;
// 5. e.target.innerText = 'Hello'
// 6. e.type;
// 7. e.timeStamp
// 8. e.clientY; -window
// 9. e.clientX;
// 8. e.offsetY; - relative to element
// 9. e.offsetX;

// e.target.parentElement.classList.contains('delete-item')










