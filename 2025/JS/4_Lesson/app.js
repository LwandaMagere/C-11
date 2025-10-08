// 1 EVENT BUBBLING AND EVENT DELEGATION

/**
 * Event bubbling is the bubbling up of events through the DOM
 * When an event happens on a particular element in the DOM, it will actually bubble up through its parent.
 * 
 * Event delegation is almost the opposite of event bubbling, it's where we put the listener on one of the parent elements n then we use logic inside the event handler to target the element that we actually want that click for whatever type of event we want
 */

// Event Bubbling

// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('card title');
// })

// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('card content');
// })

// document.querySelector('.card').addEventListener('click', function(){
//     console.log('card');
// })

// document.querySelector('.col').addEventListener('click', function(){
//     console.log('col');
// })

// Event Delegation
// document.body.addEventListener('click',deleteItem)

// function deleteItem(e) {
//     // if (e.target.className === 'fa fa-remove') {
//     //     console.log('delete item')
//     // }

//     // if(e.target.parentElement.className === 'delete-item secondary-content') {
//     //     console.log('delete-item');
//     // }

//     if(e.target.parentElement.classList.contains('delete-item')) {
//         console.log('delete item');
//         e.target.parentElement.parentElement.remove();
//     }
// }

// 2. LOCAL AND SESSION STORAGE

// Set local storage item -- local storage will stay until u clear it manually
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// Set session storage item
sessionStorage.setItem('name', 'Beth');

// Remove from storage
// localStorage.removeItem('name');

// Get from storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

// clear local storage
localStorage.clear();

console.log(name, age);


