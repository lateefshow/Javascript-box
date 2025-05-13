// Write a simple number guessing game. Provide a secret number and a guess. Based on those numbers give players clues if their guess is higher, lower or correct.


// Generate a random secret number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Function to start the game
function guessNumber() {
    let guess;
    while (guess !== secretNumber) {
        guess = parseInt(prompt("Guess a number between 1 and 100:"));

        if (isNaN(guess)) {
            alert("Please enter a valid number.");
        } else if (guess < secretNumber) {
            alert("Too low! Try again.");
        } else if (guess > secretNumber) {
            alert("Too high! Try again.");
        } else {
            alert(`Congratulations! You guessed the number: ${secretNumber}`);
        }
    }
}

// Start the game
guessNumber();
