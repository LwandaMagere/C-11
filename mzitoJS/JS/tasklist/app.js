// Define UI Var
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
    // Add task event
    form.addEventListener('submit', addTask)
}

// Add Task
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add Task');
    }

    // Create li element
    const li = document.createElement('li');
    // Add Class
    li.className = 'collection-item';
    // Create the text node and append to the li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add class Name
    link.className = 'delete-item seconday content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the child link

    e.preventDefault();
}