// Sample data for burndown chart (replace with actual data)
const burndownData = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
    datasets: [{
      label: 'Ideal Burndown',
      data: [100, 80, 60, 40, 20],
      borderColor: 'blue',
      fill: false
    }, {
      label: 'Actual Burndown',
      data: [100, 90, 70, 50, 30],
      borderColor: 'red',
      fill: false
    }],
  };

  // Create burndown chart
  const ctx = document.getElementById('burndownChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: burndownData
  });

  // Sample activity feed items (replace with actual data)
  const activityFeed = document.getElementById('activityFeed');
  const activities = [
    'John Doe updated task "Implement login feature"',
    'Jane Smith completed task "Design user interface"',
    'New sprint started: Sprint 3'
  ];
  activities.forEach(activity => {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = activity;
    activityFeed.appendChild(li);
  });

  const productBacklogItems = [
    { id: 1, title: 'User authentication', description: 'Implement user login and registration', priority: 'High', status: 'To Do' },
    { id: 2, title: 'Product listing', description: 'Display list of products with filters', priority: 'Medium', status: 'In Progress' },
    { id: 3, title: 'Shopping cart', description: 'Allow users to add items to cart', priority: 'High', status: 'Done' }
  ];

  function showProductBacklog() {
    const productBacklogTable = document.getElementById('productBacklogItems');
    productBacklogTable.innerHTML = ''; // Clear existing items

    productBacklogItems.forEach(item => {
      const row = productBacklogTable.insertRow();
      row.insertCell().textContent = item.id;
      row.insertCell().textContent = item.title;
      row.insertCell().textContent = item.description;
      row.insertCell().textContent = item.priority;
      row.insertCell().textContent = item.status;
    });

    $('#productBacklogModal').modal('show');
  }

   // Sample sprint backlog items (replace with actual data)
   const sprintBacklogItems = [
    { id: 1, task: 'Implement login API', assignee: 'John Doe', status: 'In Progress', estimatedTime: '8 hours' },
    { id: 2, task: 'Design login page', assignee: 'Jane Smith', status: 'To Do', estimatedTime: '4 hours' },
    { id: 3, task: 'Test login functionality', assignee: 'Peter Jones', status: 'Done', estimatedTime: '2 hours' }
  ];

  function showSprintBacklog() {
    const sprintBacklogTable = document.getElementById('sprintBacklogItems');
    sprintBacklogTable.innerHTML = ''; // Clear existing items

    sprintBacklogItems.forEach(item => {
      const row = sprintBacklogTable.insertRow();
      row.insertCell().textContent = item.id;
      row.insertCell().textContent = item.task;
      row.insertCell().textContent = item.assignee;
      row.insertCell().textContent = item.status;
      row.insertCell().textContent = item.estimatedTime;
    });

    $('#sprintBacklogModal').modal('show');
  }

  // Sample team members data (replace with actual data)
  const teamMembers = [
    { name: 'John Doe', role: 'Developer', contact: 'john.doe@example.com' },
    { name: 'Jane Smith', role: 'Designer', contact: 'jane.smith@example.com' },
    { name: 'Peter Jones', role: 'Tester', contact: 'peter.jones@example.com' }
  ];

  function showTeamMembers() {
    const teamMembersTable = document.getElementById('teamMembersList');
    teamMembersTable.innerHTML = ''; // Clear existing items

    teamMembers.forEach(member => {
      const row = teamMembersTable.insertRow();
      row.insertCell().textContent = member.name;
      row.insertCell().textContent = member.role;
      row.insertCell().textContent = member.contact;
    });

    $('#teamMembersModal').modal('show');
  }