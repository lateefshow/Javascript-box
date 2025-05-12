const amountInput = prompt("Enter the purchase amount:");
const amount = parseFloat(amountInput);

function calculateDiscount(amount) {
  let discount;

  if (amount >= 100) {
    discount = 20;
  } else if (amount >= 50) {
    discount = 10;
  } else {
    discount = 0;
  }

  return discount;
}

if (!isNaN(amount)) {
  const discount = calculateDiscount(amount);
  const finalPrice = amount - discount;

  alert(`Original amount: $${amount.toFixed(2)}\nDiscount: $${discount.toFixed(2)}\nFinal price: $${finalPrice.toFixed(2)}`);
} else {
  alert("Invalid input. Please enter a valid number.");
}
