// Define our UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');



// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // DOM Load Event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear Task Event
  clearBtn.addEventListener('click', clearTasks);
  // Filter task events
  filter.addEventListener('keyup', filterTasks);
}

// Get task from local storage
function getTasks() {
     
}


 
 // Add task
 function addTask(e) {
        if(taskInput.value === '') {
            alert('Add a task');
        }

        // Create li element
        const li = document.createElement('li');
        // Add Class
        li.className = 'collection-item';
        // Create text node and append to the li
        li.appendChild(document.createTextNode(taskInput.value));
        // Create new link element
        const link = document.createElement('a');
        // Add class
        link.className = 'delete-item secondary-content';
        // Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>'
        // Append the link to the li
        li.appendChild(link);
        // Append li to ul
        taskList.appendChild(li);

        // Store in local Storage
        storeTaskInLocalStorage(taskInput.value);

        // Clear input
        taskInput.value = '';


        e.preventDefault();
 }

 // Store in local Storage
function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('task'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}



 // Remove Task
 function removeTask(e) {

    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
    }}
    e.preventDefault();
 }

 // Clear tasks
 function clearTasks() {

    // taskList.innerHTML = ''; // 1

    // Faster
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild)
    }
 }

 // Filter Tasks
 function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent;
        if (item.toLocaleLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })

    // console.log(text);
 }
