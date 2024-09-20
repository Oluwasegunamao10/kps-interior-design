
document.addEventListener("DOMContentLoaded", function() {
  // Retrieve the total price from localStorage
  const totalPrice = localStorage.getItem("totalPrice");
  if (totalPrice) {
    document.getElementById("total-price").textContent = totalPrice;
  } else {
    document.getElementById("total-price").textContent = "0.00";
  }
});