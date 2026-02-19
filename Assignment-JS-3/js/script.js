// DOM Elements Selection
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

/**
 * Function to add a new task to the list
 */
function addTask() {
    const taskTextValue = taskInput.value.trim();

    // Validation: Check if input is empty
    if (taskTextValue === "") {
        alert("Please enter a task!");
        return;
    }

    // 1. Create the main list item (li)
    const li = document.createElement('li');
    li.classList.add('task-item'); // Add class for styling

    // 2. Create the text span
    const span = document.createElement('span');
    span.classList.add('task-text');
    span.textContent = taskTextValue;

    // 3. Create a container for the action buttons
    const actionsDiv = document.createElement('div');

    // 4. Create the Complete/Toggle Button
    const checkBtn = document.createElement('button');
    checkBtn.classList.add('action-btn', 'btn-check-task');
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    checkBtn.title = "Mark as Completed";

    // Add Event Listener for Toggling Completed State which acts as text strikethrough
    checkBtn.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    // 5. Create the Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('action-btn', 'btn-delete-task');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.title = "Delete Task";

    // Add Event Listener for Deleting the Task
    deleteBtn.addEventListener('click', function () {
        // Animation effect before removal (optional, but good for UX)
        li.style.opacity = '0';
        li.style.transform = 'translateY(10px)';
        setTimeout(() => {
            li.remove(); // Use .remove() as required
        }, 300);
    });

    // Append buttons to the actions container
    actionsDiv.appendChild(checkBtn);
    actionsDiv.appendChild(deleteBtn);

    // Append text and actions container to the list item
    li.appendChild(span);
    li.appendChild(actionsDiv);

    // Append the new list item to the unordered list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
    taskInput.focus();
}

// Event Listener for the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Event Listener for the "Enter" key in the input field
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
