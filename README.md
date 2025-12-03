# Event Management Functions

A collection of reusable JavaScript functions for managing programming event logistics.

## Author
- Muhtar C

## Functions

### 1. generateBadge(name, role)
Generates a formatted attendee badge.

**Parameters:**
- `name` (string): The attendee's name
- `role` (string): The attendee's role (e.g., "speaker", "attendee")

**Returns:** String in format "Name: [name], Role: [role]"

**Example:**
```javascript
generateBadge("Alice", "speaker");
// Output: "Name: Alice, Role: Speaker"
```

### 2. calculateCost(attendees, costPerAttendee)
Calculates total event cost with automatic discount for large events.

**Parameters:**
- `attendees` (number): Number of attendees
- `costPerAttendee` (number): Cost per attendee

**Returns:** Number representing total cost (with 10% discount if attendees > 100)

**Example:**
```javascript
calculateCost(120, 25);
// Output: 2700
```

### 3. validateEmail(email)
Validates email addresses for registration.

**Parameters:**
- `email` (string): Email address to validate

**Returns:** Boolean (true if valid, false otherwise)

**Example:**
```javascript
validateEmail("test@example.com");
// Output: true
```

## How to Run

### Option 1: Node.js (Command Line)
```bash
# Run tests
node tests.js
```

### Option 2: Browser
Open `index.html` in your web browser and check the console (F12).

## Project Structure
```
event-management/
├── README.md          # This file
├── functions.js       # Main function implementations
├── tests.js          # Test cases (Node.js)
└── .gitignore        # Git ignore file
```

## Design Decisions

1. **Single Responsibility**: Each function performs one specific task
2. **Clear Parameters**: Function names and parameters are self-documenting
3. **Consistent Returns**: Each function returns a predictable type
4. **Input Formatting**: generateBadge capitalizes roles for consistency

## Testing Approach

Test cases cover:
- Standard use cases
- Edge cases (exactly 100 attendees, empty strings)
- Various input formats (uppercase, mixed case)

Total: 17 test cases across all functions
