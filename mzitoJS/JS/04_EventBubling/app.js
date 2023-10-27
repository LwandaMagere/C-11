// EVENT BUBBLING - The bubbling up of events through the DOM

// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//     console.log('card ');
// });

// document.querySelector('.col').addEventListener('click', function(){
//     console.log('col');
// });

// EVENT DELAGATION

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

// function deleteItem() {
//     console.log('delete item');
// }
//.......
// document.body.addEventListener('click', deleteItem);

// function deleteItem(e) {
//     // if (e.target.className === 'fa fa-remove') {
//     //     console.log('delete item');
//     // }
//     // if(e.target.parentElement.classList.contains('delete-item')) {
//     //     console.log('delete item');
//     // }
//     // if(e.target.parentElement.classList.contains('delete-item')){
//     //     e.target.parentElement.parentElement.remove();
//     // }
// }

// LOCAL STORAGE  -- the local storage API -- what you set as a value has to be a string

// set local storage item -- will stay untill u manually clear it out
// localStorage.setItem('name', 'Dado');
// localStorage.setItem('age', '30');

// // set session storage item -- goes away when you close the browser
// sessionStorage.setItem('name', 'Steven');

// // remove from the storage
// // localStorage.removeItem('name');

// // get from storage
// const name = localStorage.getItem('name');
// const age  = localStorage.getItem('age');
// console.log(name);

// // clear local storage
// localStorage.clear();

// console.log(name, age);

// document.querySelector('form').addEventListener('submit', function(e) {
//     const task = document.getElementById('task').value;
//     console.log(task);
//     localStorage.setItem('task', task);
//     alert('task saved')

//     e.preventDefault();
// })........1

document.querySelector('form').addEventListener('submit', function(e){

    const task = document.getElementById('task').value;

    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task)

    localStorage.setItem('tasks', JSON.stringify(tasks));

    // alert('Task Saved');

    e.preventDefault();
})

const tasks  = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(task){
    console.log(task);
})






