// Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
    // DOM Load event
    document.addEventListener('DOMContentLoaded', getTasks);
    // Add task events
    form.addEventListener('submit', addTask);
    // Remove task events
    taskList.addEventListener('click', removeTask);
    // Clear task events
    clearBtn.addEventListener('click',clearTasks);
    // Filter task events
    filter.addEventListener('keyup', filterTasks);

}

// Get tasks from local storage
function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task) {
         // Create li element
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        // Create text node and append to the li
        li.appendChild(document.createTextNode(task));
        // Create new link element
        const link = document.createElement('a');
        // Add class
        link.className = 'delete-item secondary-content';
        // Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>'
        // Append link to li
        li.appendChild(link);

        taskList.appendChild(li);
    })
}

// Add Task
function addTask(e) {

    if(taskInput.value === '') {
        alert('Add a task');
    }

    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to the li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>'
    // Append link to li
    li.appendChild(link);
    
    // Append the li to the ul
    taskList.appendChild(li);

    // Store in Local Storge
    storeTaskInLocalStorage(taskInput.value);

    // Clear input
    taskInput.value = '';


    e.preventDefault();
}

// Store task
function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();

            // Remove from local storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

// Remove from local storage
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index) {
        if(taskItem.textContent === task) {
            tasks.splice(index, 1);
        }

    })

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Tasks
function clearTasks() {
    taskList.innerHTML = '';

    // Faster
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }

    // Clear from Local Storage
    clearTasksFromLocalStorage()
}

// Clear task from local storage
function clearTasksFromLocalStorage() {
    localStorage.clear();
}


// Filter tasks
function filterTasks(e) {
    const text =  e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        //  const item = task.textContent;

        // console.log(item); test

        if(item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
             task.style.display = 'none';
        }
    })
}

