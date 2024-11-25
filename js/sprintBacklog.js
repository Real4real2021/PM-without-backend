// Sample sprint backlog items (replace with actual data)
let sprintBacklogItems = [
    {
        id: 1, task: 'Implement login API', pbi: 1, assignee: 1, status: 'In Progress',
        estimatedTime: 8, timeSpent: 4
    },
    {
        id: 2, task: 'Design login page', pbi: 1, assignee: 2, status: 'To Do',
        estimatedTime: 4, timeSpent: 0
    },
    {
        id: 3, task: 'Test login functionality', pbi: 1, assignee: 3, status: 'Done',
        estimatedTime: 2, timeSpent: 2
    }
]
;

// Sample product backlog items (for PBI dropdown) - You might already have this from the Product Backlog page
const productBacklogItems = [
    { id: 1, title: 'User authentication' },
    { id: 2, title: 'Product listing' },
    { id: 3, title: 'Shopping cart' }
];

// Sample team members (for assignee dropdown) - You might already have this from the Team Members page
const teamMembers = [
    { name: 'John Doe', id: 1 },
    { name: 'Jane Smith', id: 2 },
    { name: 'Peter Jones', id: 3 }
];

// Populate PBI and assignee dropdowns in modals
const taskPBIselect = document.getElementById('taskPBI');
const taskAssigneeSelect = document.getElementById('taskAssignee');
productBacklogItems.forEach(pbi => {
    const option = document.createElement('option');
    option.value = pbi.id;
    option.textContent = pbi.title;
    taskPBIselect.appendChild(option);
});
teamMembers.forEach(member => {
    const option = document.createElement('option');
    option.value = member.id;
    option.textContent = member.name;
    taskAssigneeSelect.appendChild(option);
});

// Function to render sprint backlog items in the table
function renderSprintBacklogItems() {
    const sprintBacklogTable = document.getElementById('sprintBacklogItems');
    sprintBacklogTable.innerHTML = ''; // Clear existing items

    sprintBacklogItems.forEach(item => {
        const row = sprintBacklogTable.insertRow();

        row.insertCell().textContent = item.id;
        row.insertCell().textContent = item.task;
        row.insertCell().textContent = getPBINameById(item.pbi);
        row.insertCell().textContent = getAssigneeNameById(item.assignee);
        row.insertCell().textContent = item.status;
        row.insertCell().textContent = item.estimatedTime;
        row.insertCell().textContent = item.timeSpent;

        const actionsCell = row.insertCell();
        const viewButton = document.createElement('button');
        viewButton.classList.add('btn', 'btn-sm', 'btn-info');
        viewButton.textContent = 'View';
        viewButton.addEventListener('click', () => showViewEditTaskModal(item.id));
        actionsCell.appendChild(viewButton);
    });
}

// Function to get PBI name by ID
function getPBINameById(id) {
    const pbi = productBacklogItems.find(item => item.id === id);
    return pbi ? pbi.title : '';
}

// Function to get assignee name by ID (you might already have this from other pages)
function getAssigneeNameById(id) {
    const assignee = teamMembers.find(member => member.id === id);
    return assignee ? assignee.name : '';
}

// Function to show the Create Task modal
function showCreateTaskModal() {
    $('#createTaskModal').modal('show');
}

// Function to show the View/Edit Task modal
function showViewEditTaskModal(taskId) {
    const task = sprintBacklogItems.find(item => item.id === taskId);
    if (!task) return;

    const modalTitle = document.getElementById('viewEditTaskModalTitle');
    modalTitle.textContent = `Task: ${task.task}`;

    const taskDetailsDiv = document.getElementById('taskDetails');
    taskDetailsDiv.innerHTML = `
        <p><strong>PBI:</strong> ${getPBINameById(task.pbi)}</p>
        <p><strong>Assignee:</strong> ${getAssigneeNameById(task.assignee)}</p>
        <p><strong>Status:</strong> ${task.status}</p>
        <p><strong>Estimated Time:</strong> ${task.estimatedTime} hours</p>
        <p><strong>Time Spent:</strong> ${task.timeSpent} hours</p>
        <!-- Add time tracking controls or other details here -->
    `;

    $('#viewEditTaskModal').modal('show');

    // Add event listeners for Edit and Delete buttons (implement these functions)
    document.getElementById('editTaskButton').addEventListener('click', () => editTask(taskId));
    document.getElementById('deleteTaskButton').addEventListener('click', () => deleteTask(taskId));
}

// Function to handle editing a task (implement this function)
function editTask(taskId) {
    // ... (logic to edit the task)
}

// Function to handle deleting a task (implement this function)
function deleteTask(taskId) {
    // ... (logic to delete the task)
}

// Initial rendering of sprint backlog items
renderSprintBacklogItems();