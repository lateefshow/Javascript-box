// Write a program that greets the user based on the time of day. Display good morning, good afternnon or good evening based on the time of day when you run the code.


const now = new Date();
const hour = now.getHours();

let greeting;

if (hour >= 5 && hour < 12) {
  greeting = "Good morning!";
} else if (hour >= 12 && hour < 18) {
  greeting = "Good afternoon!";
} else {
  greeting = "Good evening!";
}

alert(greeting);
