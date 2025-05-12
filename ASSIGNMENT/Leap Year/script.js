// Write a program that determines if a year is a leap year.


const yearInput = prompt("Enter a year:");
const year = parseInt(yearInput);

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

if (!isNaN(year)) {
  if (isLeapYear(year)) {
    alert(`${year} is a leap year.`);
  } else {
    alert(`${year} is not a leap year.`);
  }
} else {
  alert("Invalid input. Please enter a valid year.");
}
