// Sample product backlog items (replace with actual data)
let productBacklogItems = [
    {
        id: 1, title: 'User authentication', description: 'Implement user login and registration',
        acceptanceCriteria: '- Users can register with email and password\n- Users can login with valid credentials',
        priority: 'High', status: 'To Do', assignee: 'John Doe', votes: 5
    },
    {
        id: 2, title: 'Product listing', description: 'Display list of products with filters',
        acceptanceCriteria: '- Products are displayed in a grid\n- Users can filter products by category\n- Users can sort products by price',
        priority: 'Medium', status: 'In Progress', assignee: 'Jane Smith', votes: 3
    },
    {
        id: 3, title: 'Shopping cart', description: 'Allow users to add items to cart',
        acceptanceCriteria: '- Users can add products to cart\n- Cart displays the total number of items and price\n- Users can remove items from cart',
        priority: 'High', status: 'Done', assignee: 'Peter Jones', votes: 8
    }
];

// Sample team members (for assignee dropdown)
const teamMembers = [
    { name: 'John Doe', id: 1 },
    { name: 'Jane Smith', id: 2 },
    { name: 'Peter Jones', id: 3 }
];

// Populate assignee dropdowns in modals
const pbiAssigneeSelect = document.getElementById('pbiAssignee');
const filterAssigneeSelect = document.getElementById('filterAssignee');
teamMembers.forEach(member => {
    const option = document.createElement('option');
    option.value = member.id;
    option.textContent = member.name;
    pbiAssigneeSelect.appendChild(option);
    filterAssigneeSelect.appendChild(option.cloneNode(true)); // Clone for filter dropdown
});

// Function to render product backlog items in the table
function renderProductBacklogItems() {
    const productBacklogTable = document.getElementById('productBacklogItems');
    productBacklogTable.innerHTML = ''; // Clear existing items

    // Apply filtering
    const filteredItems = productBacklogItems.filter(item => {
        const statusFilter = document.getElementById('filterStatus').value;
        const priorityFilter = document.getElementById('filterPriority').value;
        const assigneeFilter = document.getElementById('filterAssignee').value;

        return (statusFilter === '' || item.status === statusFilter) &&
            (priorityFilter === '' || item.priority === priorityFilter) &&
            (assigneeFilter === '' || item.assignee === parseInt(assigneeFilter)); // Assignee ID is an integer
    });

    // Apply sorting (you can add more sorting options here)
    // ...

    filteredItems.forEach(item => {
        const row = productBacklogTable.insertRow();
        row.classList.add('draggable');
        row.setAttribute('data-pbi-id', item.id); // Add data attribute for PBI ID

        row.insertCell().textContent = item.id;
        row.insertCell().textContent = item.title;
        row.insertCell().textContent = item.priority;
        row.insertCell().textContent = item.status;
        row.insertCell().textContent = getAssigneeNameById(item.assignee);
        row.insertCell().textContent = item.votes;

        const actionsCell = row.insertCell();
        const viewButton = document.createElement('button');
        viewButton.classList.add('btn', 'btn-sm', 'btn-info');
        viewButton.textContent = 'View';
        viewButton.addEventListener('click', () => showViewEditPBIModal(item.id));
        actionsCell.appendChild(viewButton);
    });

    // Make table rows draggable using Sortable.js
    new Sortable(productBacklogTable, {
        animation: 150,
        onEnd: function (evt) {
            // Update PBI order in the array after dragging
            const newOrder = Array.from(productBacklogTable.querySelectorAll('.draggable')).map(row => parseInt(row.getAttribute('data-pbi-id')));
            productBacklogItems = productBacklogItems.sort((a, b) => newOrder.indexOf(a.id) - newOrder.indexOf(b.id));
            // You might want to save the new order to your backend here
        }
    });
}

// Function to get assignee name by ID
function getAssigneeNameById(id) {
    const assignee = teamMembers.find(member => member.id === id);
    return assignee ? assignee.name : '';
}

// Function to show the Create PBI modal
function showCreatePBIModal() {
    $('#createPBIModal').modal('show');
}

// Function to show the View/Edit PBI modal
function showViewEditPBIModal(pbiId) {
    const pbi = productBacklogItems.find(item => item.id === pbiId);
    if (!pbi) return;

    const modalTitle = document.getElementById('viewEditPBIModalTitle');
    modalTitle.textContent = `Product Backlog Item: ${pbi.title}`;

    const pbiDetailsDiv = document.getElementById('pbiDetails');
    pbiDetailsDiv.innerHTML = `
        <p><strong>Description:</strong> ${pbi.description}</p>
        <p><strong>Acceptance Criteria:</strong> ${pbi.acceptanceCriteria}</p>
        <p><strong>Priority:</strong> ${pbi.priority}</p>
        <p><strong>Status:</strong> ${pbi.status}</p>
        <p><strong>Assignee:</strong> ${getAssigneeNameById(pbi.assignee)}</p>
        <p><strong>Votes:</strong> ${pbi.votes}</p>
        <!-- Add attachments if needed -->
    `;

    $('#viewEditPBIModal').modal('show');

    // Add event listeners for Edit and Delete buttons (implement these functions)
    document.getElementById('editPBIButton').addEventListener('click', () => editPBI(pbiId));
    document.getElementById('deletePBIButton').addEventListener('click', () => deletePBI(pbiId));
}

// Function to handle PBI voting (replace with your actual logic)
function voteForPBI(pbiId) {
    const pbi = productBacklogItems.find(item => item.id === pbiId);
    if (pbi) {
        pbi.votes++;
        renderProductBacklogItems(); // Re-render the table after voting
    }
}

// Function to handle editing a PBI (implement this function)
function editPBI(pbiId) {
    // ... (logic to edit the PBI)
}

// Function to handle deleting a PBI (implement this function)
function deletePBI(pbiId) {
    // ... (logic to delete the PBI)
}

// Initial rendering of product backlog items
renderProductBacklogItems();

// Add event listeners for filtering and sorting (if you implement sorting)
document.getElementById('filterStatus').addEventListener('change', renderProductBacklogItems);
document.getElementById('filterPriority').addEventListener('change', renderProductBacklogItems);
document.getElementById('filterAssignee').addEventListener('change', renderProductBacklogItems);
// ... (add event listeners for sorting options)