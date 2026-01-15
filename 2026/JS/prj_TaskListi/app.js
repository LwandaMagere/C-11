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
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', removeTask);
    // Clear Task Events
    clearBtn.addEventListener('click', clearTasks);
    // Filter tasks events
    filter.addEventListener('keyup', filterTasks);


}

// Add task
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
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    // // Append the li to the ul
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';

    e.preventDefault();
}

// Remove task
function removeTask(e) {
   if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove(); 
        }
   }

}

//Clear Tasks
function clearTasks() {
    // taskList.innerHTML = '';

    // Faster
    while (taskList.firstElementChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

// Filter task events
function filterTasks(e) {
    const text = e.target.value.toLowerCase();// Don't be confused here. All items have been collected

    document.querySelectorAll('.collection-item').forEach(function(task){
        // const item = task.firstElementChild.textContent;
        // const item = task.firstChild.textContent;
        const item = task.textContent;


        console.log(item); // Show all items on console

        if(item.toLocaleLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }

    });

}



