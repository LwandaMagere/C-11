// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListener();

// Load all event listeners
function loadEventListener() {
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task events
    taskList.addEventListener('click', removeTask);
    // Clear Tasks
    clearBtn.addEventListener('click', clearTasks);
    // Filter Task Events
    filter.addEventListener('keyup', filterTasks)
}

// Add Task
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add Task!');
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
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // Append the li to the ul
    taskList.appendChild(li);

    // Clear input
    taskList.value = '';

    e.preventDefault();
}

// Remove Task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove();
    }
}

// Clear Task
function clearTasks() {
    // taskList.innerHTML = '';

    //Faster
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }
}

// Filter Task
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    // console.log(text);
   document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1) {
        task.style.display = 'block';
    } else {
        task.style.display = 'none';
    }
   });
}