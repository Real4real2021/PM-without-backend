// Sample team members data (replace with actual data)
const teamMembers = [
    { name: 'John Doe', role: 'Developer', contact: 'john.doe@example.com', id: 1 },
    { name: 'Jane Smith', role: 'Designer', contact: 'jane.smith@example.com', id: 2 },
    { name: 'Peter Jones', role: 'Tester', contact: 'peter.jones@example.com', id: 3 }
];

// Sample capacity planning data (replace with actual data)
const capacityPlanning = [
    { memberId: 1, sprint1: 40, sprint2: 35, sprint3: 45 }, // Capacity in hours per sprint
    { memberId: 2, sprint1: 30, sprint2: 40, sprint3: 30 },
    { memberId: 3, sprint1: 20, sprint2: 25, sprint3: 20 }
];

// Sample availability data for calendar (replace with actual data)
const availabilityEvents = [
    { title: 'John Doe - Vacation', start: '2024-03-15', end: '2024-03-22', color: 'red', memberId: 1 },
    { title: 'Jane Smith - Training', start: '2024-03-25', end: '2024-03-26', color: 'orange', memberId: 2 }
];

// Render team members list
function renderTeamMembers() {
    const teamMembersTable = document.getElementById('teamMembersList');
    teamMembersTable.innerHTML = ''; // Clear existing items

    teamMembers.forEach(member => {
        const row = teamMembersTable.insertRow();
        row.insertCell().textContent = member.name;
        row.insertCell().textContent = member.role;
        row.insertCell().textContent = member.contact;

        // Add Actions column (you can add edit/delete buttons here)
        const actionsCell = row.insertCell();
        // ... (add action buttons)
    });
}

// Render capacity planning table
function renderCapacityPlanning() {
    const capacityPlanningTable = document.getElementById('capacityPlanningData');
    capacityPlanningTable.innerHTML = ''; // Clear existing items

    teamMembers.forEach(member => {
        const row = capacityPlanningTable.insertRow();
        row.insertCell().textContent = member.name;

        // Add capacity data for each sprint
        capacityPlanning.forEach(capacity => {
            if (capacity.memberId === member.id) {
                row.insertCell().textContent = capacity.sprint1;
                row.insertCell().textContent = capacity.sprint2;
                row.insertCell().textContent = capacity.sprint3;
                // ... (add more sprint columns)
            }
        });
    });
}

// Initialize calendar
$(document).ready(function () {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        events: availabilityEvents,
        eventRender: function (event, element) {
            // Add member name to event title (optional)
            element.find('.fc-title').prepend(getAssigneeNameById(event.memberId) + ': ');
        }
    });
});

// Function to get assignee name by ID (you might already have this from other pages)
function getAssigneeNameById(id) {
    const assignee = teamMembers.find(member => member.id === id);
    return assignee ? assignee.name : '';
}

// Initial rendering
renderTeamMembers();
renderCapacityPlanning();