// Cart array to hold items (name and price)
let cart = [];

// Function to add item to the cart
function addToCart(itemName, itemPrice) {
  cart.push({ name: itemName, price: parseFloat(itemPrice) });
  updateCartDisplay();
}

// Function to remove item from the cart
function removeFromCart(index) {
  cart.splice(index, 1); // Remove item at the specified index
  updateCartDisplay();
}

// Update cart display and calculate total price
function updateCartDisplay() {
  const cartContainer = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("cart-total");
  
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>No items in the cart</p>";
    totalPriceElement.innerHTML = "";
  } else {
    let totalPrice = 0;
    cart.forEach((item, index) => {
      cartContainer.innerHTML += `
        <p>${index + 1}. ${item.name} - $${item.price.toFixed(2)} 
        <button class="remove-btn btn btn-primary mr-3"    style="border-radius:30px; " onclick="removeFromCart(${index})">Remove</button>
        </p>`;
      totalPrice += item.price;
    });
    totalPriceElement.innerHTML = `Total: $${totalPrice.toFixed(2)}`;
  }
}

// Event listener for cart buttons
document.addEventListener("DOMContentLoaded", function () {
  const cartButtons = document.querySelectorAll(".add-to-cart");
  cartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const itemName = this.getAttribute("data-item");
      const itemPrice = this.getAttribute("data-price");
      addToCart(itemName, itemPrice);
    });
  });

  // Proceed to Payment Button
  document.getElementById("proceed-to-payment").addEventListener("click", function () {
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items before proceeding.");
    } else {
      const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
      // Store the total price in localStorage
      localStorage.setItem("totalPrice", totalPrice.toFixed(2));
      // Redirect to the payment page
      window.location.href = "credit/credit.html";
    }
  });
});