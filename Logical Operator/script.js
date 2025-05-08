// JavaScript Logical Operators Example

let x = true;
let y = false;

console.log("x && y (AND):", x && y);   // false - both must be true
console.log("x || y (OR):", x || y);    // true  - at least one is true
console.log("!x (NOT):", !x);           // false - negation of true is false
console.log("!y (NOT):", !y);           // true  - negation of false is true

// Practical example
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Allowed to enter.");
} else {
  console.log("Not allowed to enter.");
}
