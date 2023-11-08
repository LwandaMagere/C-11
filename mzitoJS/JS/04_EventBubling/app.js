// EVENT BUBBLING - The bubbling up of events through the DOM..Bubbling up to it's parent
// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//     console.log('col');
// });
//...................................................................

// EVENT DELAGATION -- opposite of event bubbling, put the event listener on the parent then we go down

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

// document.body.addEventListener('click', deleteItem);

// function deleteItem(e) {
//     // console.log(e.target);

//     // if (e.target.className === 'fa fa-remove') {
//     //     console.log('delete item');
//     // }

//     // if (e.target.parentElement.className == 'delete-item secondary-content') {
//     //     console.log('delete item');
//     // }

//     // if (e.target.parentElement.classList.contains('delete-item')) {
//     //     console.log('delete item');
//     // }

//     if (e.target.parentElement.classList.contains('delete-item')) {
//         console.log('delete item');
//         e.target.parentElement.parentElement.remove()
//     }
// }
//..............................................................................................

// LOCAL SESSION STORAGE - local storage api -- key value pairs -- what you set as a value has to be a string

// set local storage item -local storage will stay until cleared manually
// localStorage.setItem('name', 'Dado');

// set session storage item
// sessionStorage.setItem('name','Steven');

// remove from storage
// localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');
// console.log(name);

// // clear local storage
// localStorage.clear();

// document.querySelector('form').addEventListener('submit', function(e){
//     // console.log(123);
//     const task = document.getElementById('task').value;
//     localStorage.setItem('task', task);
//     alert('Task saved');
//     // console.log(task);

//     e.preventDefault();
// })

// document.querySelector('form').addEventListener('submit', function(e) {
//     const task = document.getElementById('task').value;

//     let tasks;

//     if (localStorage.getItem('tasks') === null) {
//         tasks = [];
//     } else {
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }

//     tasks.push(task);

//     localStorage.setItem('tasks', JSON.stringify(tasks));

//     alert('task saved');

//     e.preventDefault();
// })

//// NOTES NOTES NOTES EXTRA NOTES

//// e.target.parentElement.classList.contains('delete-item')

// 1. localStorage.seItem('name', 'Dado');
// 2. sessionStorage.seItem('name', 'Beth');
// 3. localStoreage.removeItem('name');
// 4. const name = localStorage.getItem('name');
// 5. localStorage.clear();















