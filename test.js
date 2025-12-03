console.log("=== Testing generateBadge ===");
console.log(generateBadge("Alice", "speaker")); // Expected: "Name: Alice, Role: Speaker"
console.log(generateBadge("Bob", "attendee")); // Expected: "Name: Bob, Role: Attendee"
console.log(generateBadge("Charlie", "ORGANIZER")); // Expected: "Name: Charlie, Role: Organizer"

console.log("\n=== Testing calculateCost ===");
console.log(calculateCost(120, 25)); // Expected: 2700
console.log(calculateCost(50, 25)); // Expected: 1250 (no discount)
console.log(calculateCost(100, 25)); // Expected: 2500 (exactly 100, no discount)
console.log(calculateCost(101, 20)); // Expected: 1818 (with discount)

console.log("\n=== Testing validateEmail ===");
console.log(validateEmail("test@example.com")); // Expected: true
console.log(validateEmail("invalid.email")); // Expected: false (no @)
console.log(validateEmail("invalid@email")); // Expected: false (no .)
console.log(validateEmail("@.")); // Expected: true (has both @ and .)
console.log(validateEmail("user@domain.co.uk")); // Expected: true