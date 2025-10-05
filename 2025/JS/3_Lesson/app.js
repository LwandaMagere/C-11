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

////// ***** END 1 ******* /////


/* 2.DOM SELECTORS FOR SINGLE ELEMENTS */

// 2.1 document.getElementById()
// In the whole document grab me an element with an id of task-title
// console.log(document.getElementById('task-title'));

// // -- Get things from the element
// console.log(document.getElementById('task-title').id);

// You can put it in a variable to keep the code cleaner
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
// })


// 3.3 document.querySelectorAll() NodeList

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


/**
 * 1.getElementById()
 * 2.querySelector() 
 * 3.getElementsByClassName()
 * 4.getElementsByTagName()
 * 5.querySelectorAll() -- Nodelist
 */

////// ***** END 3  ******* /////

// 4.TRAVERSING THE DOM

// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child'); 

// val = listItem;
// val = list;

// // Get child nodes  -- returns NodeList and also gives textnodes
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[0].nodeType;

// // Get children Element nodes -- This doesn't give textnodes return HTMLCollection
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

/**
 * 1.childNodes
 * 2.children
 * 3.firstChild
 * 4.firstElementChild
 * 5.lastChild
 * 6.lastElementChild
 * 7.parentNode
 * 8.parentElement
 * 9.nextSibling
 * 10.nextElementSibling
 * 11.previousSibling
 * 12.previousElementSibling
 * 13.childElementCount
 */

////// ***** END 4  ******* /////

// 5.CREATING ELEMENTS ADD INTO IT AND INSERT INTO THE DOM

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

/**
 * 1.createElement
 * 2.setAttribute
 * 3.createTextNode
 */

////// ***** END 5  ******* /////

// 6.REMOVING AND REPLACING ELEMENTS

// Replace Element 1
// const newHeading = document.createElement('h2');

// // Add id
// newHeading.id = 'task-title';

// //New text node
// newHeading.appendChild(document.createTextNode('Task List'));

// // Get the old Heading
// const oldHeading = document.getElementById('task-title');
// // Parent
// const cardAction = document.querySelector('.card-action');
// // Replace
// cardAction.replaceChild(newHeading, oldHeading);

// console.log(newHeading);

// // Remove Element 2
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// // Remove list items
// lis[0].remove();

// // Remove Child element
// list.removeChild(lis[3]);

/**
 * 1.replaceChild()
 * 2.remove()
 * 3.removeChild()
 */

////// ***** END 6  ******* /////


// // 7.CLASSESS AND ATTRIBUTES

// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let val;

// val = link.className;
// val = link.classList;
// val = link.classList[0];

// // Add a class using class list
// link.classList.add('test');
// val = link;

// // Remove a class
// link.classList.remove('test');

// // Attributes
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// // Check to see if there is attribute
// val = link.hasAttribute('href');
// link.removeAttribute('title');


// console.log(val);


// 8.EVENT LISTENERS, THE EVENT OBJECT

// document.querySelector('.clear-tasks').addEventListener('click', function(e) {
//     console.log('Hello World!');
//     e.preventDefault();
// });

// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e) {
//     console.log('clicked');

//     let val;
//     val = e;
//     // console.log(e);

//     // Event target element
//     val = e.target;
//     val = e.target.id;
//     val = e.target.className;
//     val = e.target.classList;

//     e.target.innerText = 'Hello';

//     //Event Type
//     val = e.type;

//     // Timestamp
//     val = e.timeStamp;

//     // Coord of events relative to the window
//     val = e.clientY;
//     val = e.clientX;

//     // Coord of events relative to the element
//     val = offSetY;
//     val = offSetX;

//     console.log(val);

//     e.preventDefault();
// }


// MOUSE EVENTS
// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);
// Double click
// clearBtn.addEventListener('dblclick', runEvent);
// Mouse Down
// clearBtn.addEventListener('mousedown', runEvent);
// Mouse Up
// clearBtn.addEventListener('mouseup', runEvent);
// Mouse Enter
// card.addEventListener('mouseenter', runEvent);
// Mouse Leave
// card.addEventListener('mouseleave', runEvent);
// Mouse Over
// card.addEventListener('mouseover', runEvent);
// Mouse Out
// card.addEventListener('mouseout', runEvent);
// Mouse Move
// card.addEventListener('mousemove', runEvent);





// Event Handler
// function runEvent(e) {
//     console.log(`EVENT TYPE: ${e.type}`);

//     heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
    
//     e.preventDefault();
// }

// KEYBOARD INPUT EVENTS

// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');
// Clear input
// taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown
// taskInput.addEventListener('keydown', runEvent);
// Keyup
// taskInput.addEventListener('keyup', runEvent);
// Keypress
// taskInput.addEventListener('keypress', runEvent);
// Focus
// taskInput.addEventListener('focus', runEvent);
// Blur
// taskInput.addEventListener('blur', runEvent);
// Cut
// taskInput.addEventListener('cut', runEvent);
// Paste
// taskInput.addEventListener('paste', runEvent);


// function runEvent(e) {
//     console.log(`EVENT TYPE: ${e.type}`)

//     // console.log(e.target.value)

//     // heading.innerText = e.target.value;
//     //Get input value
//     // console.log(taskInput.value);

//     // e.preventDefault();
// }

////// ***** END ******* /////



























