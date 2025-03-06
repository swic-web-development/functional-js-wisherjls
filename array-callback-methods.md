# Array Callback Methods: `find`

## What's `find`?
The `find` method gets the **first item** in an array that matches a condition. If nothing matches, it returns `undefined`.

### Syntax:
```javascript
array.find(callback(element, index, array));
```
- **callback**: A function to test each item.
  - `element`: The current item.
  - `index`: The position of the current item.
  - `array`: The full array.

### Quick Facts:
- Stops at the first match.
- Just like `map` `find` does not change the array.

## Example:
```javascript
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

// Find first user older than 30
const result = users.find((user, index) => user.age > 30);
console.log(result); // { id: 3, name: "Charlie", age: 35 }

// Find user named "Bob" and log their index
const bob = users.find((user, index) => {
  console.log(`Checking index: ${index}`);
  return user.name === "Bob";
});
console.log(bob); 
//Checking index: 0
//Checking index: 1
//{ id: 2, name: "Bob", age: 30 }

// No user younger than 20
const underage = users.find(user => user.age < 20);
console.log(underage); // undefined
```

### How’s It Different From `map`?
- `map` makes a new array with results for all items.
- `find` only gives the first match.

