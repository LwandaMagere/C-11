// Define our UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all Event Listeners
loadEventListeners();

// Load all Event Listeners
function loadEventListeners() {
    // Add task event
    form.addEventListener('submit', addTask);
}

// Add Tasks
function addTask(e) {

    if(taskInput.value === '') {
        alert('Add Task');
    }

    // Create li element
    const li = document.createElement('li');
    li.className = 'collection-item'
    // Create text node and append to the li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>'; // It uses innerHTML not appendChild
    // Append the link to the li
    li.appendChild(link);
    console.log(li);
    // Append li to ul
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';


    e.preventDefault();
}

/*

 
 
 */