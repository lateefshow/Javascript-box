// Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

const ageInput = prompt("Please enter your age:");

const age = parseInt(ageInput);

function getTicketPrice(age) {
  let price;

  if (age < 12) {
    price = 5;
  } else if (age < 18) {
    price = 10;
  } else if (age < 60) {
    price = 20;
  } else {
    price = 15;
  }

  return price;
}

if (!isNaN(age)) {
  const ticketPrice = getTicketPrice(age);
  alert(`The ticket price for age ${age} is $${ticketPrice}.`);
} else {
  alert("Invalid input. Please enter a valid number.");
}



/*
function getTicketPrice(age) {
  let price;

  if (age < 12) {
    price = 5;
  } else if (age < 18) {
    price = 10;
  } else if (age < 60) {
    price = 20;
  } else {
    price = 15;
  }

  return price;
}

// Example usage:
const age = 45;
const ticketPrice = getTicketPrice(age);
console.log(`The ticket price for age ${age} is $${ticketPrice}.`);
*/