// functions.js
// Event Management Functions

/**
 * Generates an attendee badge with name and role
 * @param {string} name - The attendee's name
 * @param {string} role - The attendee's role (e.g., "speaker", "attendee")
 * @returns {string} Formatted badge string
 */
function generateBadge(name, role) {
  const formattedRole = role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();
  return `Name: ${name}, Role: ${formattedRole}`;
}

/**
 * Calculates the total cost of the event
 * Applies 10% discount if attendees exceed 100
 * @param {number} attendees - Number of attendees
 * @param {number} costPerAttendee - Cost per attendee
 * @returns {number} Total cost after any applicable discount
 */
function calculateCost(attendees, costPerAttendee) {
  let totalCost = attendees * costPerAttendee;
  
  if (attendees > 100) {
    totalCost = totalCost * 0.9;
  }
  
  return totalCost;
}

/**
 * Validates an email address
 * @param {string} email - Email address to validate
 * @returns {boolean} True if email contains "@" and ".", false otherwise
 */
function validateEmail(email) {
  return email.includes("@") && email.includes(".");
}

// Export functions for testing (Node.js)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { generateBadge, calculateCost, validateEmail };
}