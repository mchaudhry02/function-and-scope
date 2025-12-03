// tests.js
// Test Cases for Event Management Functions

// Import functions (Node.js)
const { generateBadge, calculateCost, validateEmail } = require('./functions.js');

// Test helper function
function runTest(testName, actual, expected) {
  const passed = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${passed ? '✓' : '✗'} ${testName}`);
  if (!passed) {
    console.log(`  Expected: ${expected}`);
    console.log(`  Got: ${actual}`);
  }
}

console.log("=== TESTING generateBadge ===\n");

// Test Set 1
runTest("Test 1.1: Speaker role", 
  generateBadge("Alice", "speaker"), 
  "Name: Alice, Role: Speaker"
);

runTest("Test 1.2: Attendee role", 
  generateBadge("Bob", "attendee"), 
  "Name: Bob, Role: Attendee"
);

// Test Set 2
runTest("Test 1.3: Uppercase role", 
  generateBadge("Charlie", "ORGANIZER"), 
  "Name: Charlie, Role: Organizer"
);

runTest("Test 1.4: Mixed case role", 
  generateBadge("Diana", "VoLuNtEeR"), 
  "Name: Diana, Role: Volunteer"
);

// Test Set 3
runTest("Test 1.5: Name with spaces", 
  generateBadge("John Doe", "speaker"), 
  "Name: John Doe, Role: Speaker"
);

console.log("\n=== TESTING calculateCost ===\n");

// Test Set 1
runTest("Test 2.1: Example from assignment (120 attendees)", 
  calculateCost(120, 25), 
  2700
);

runTest("Test 2.2: No discount (50 attendees)", 
  calculateCost(50, 25), 
  1250
);

// Test Set 2
runTest("Test 2.3: Exactly 100 attendees (no discount)", 
  calculateCost(100, 25), 
  2500
);

runTest("Test 2.4: Just over 100 (101 attendees)", 
  calculateCost(101, 20), 
  1818
);

// Test Set 3
runTest("Test 2.5: Large event (500 attendees)", 
  calculateCost(500, 30), 
  13500
);

runTest("Test 2.6: Small event (10 attendees)", 
  calculateCost(10, 50), 
  500
);

console.log("\n=== TESTING validateEmail ===\n");

// Test Set 1
runTest("Test 3.1: Valid email", 
  validateEmail("test@example.com"), 
  true
);

runTest("Test 3.2: Missing @ symbol", 
  validateEmail("invalid.email"), 
  false
);

// Test Set 2
runTest("Test 3.3: Missing dot", 
  validateEmail("invalid@email"), 
  false
);

runTest("Test 3.4: Valid email with subdomain", 
  validateEmail("user@mail.example.com"), 
  true
);

// Test Set 3
runTest("Test 3.5: Email with numbers", 
  validateEmail("user123@example.co.uk"), 
  true
);

runTest("Test 3.6: Empty string", 
  validateEmail(""), 
  false
);

console.log("\n=== TEST SUMMARY COMPLETE ===");