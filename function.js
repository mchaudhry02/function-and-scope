// Task 1: Generate Attendee Badge
function generateBadge(name, role) {
  // Capitalize first letter of role for consistent formatting
  const formattedRole = role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();
  return `Name: ${name}, Role: ${formattedRole}`;
}

// Task 2: Calculate Event Cost
function calculateCost(attendees, costPerAttendee) {
  let totalCost = attendees * costPerAttendee;
  
  // Apply 10% discount if attendees exceed 100
  if (attendees > 100) {
    totalCost = totalCost * 0.9;
  }
  
  return totalCost;
}

// Task 3: Validate Email Address
function validateEmail(email) {
  // Check if email contains both "@" and "."
  return email.includes("@") && email.includes(".");
}
