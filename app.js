const desktopDP = document.querySelector(".headline");
const desktopDpParent = document.querySelector(".nav-list")

if(desktopDP && desktopDpParent) {
    desktopDP.addEventListener("click",
        (e) => {
        e.preventDefault();
        desktopDpParent.classList.toggle("active");
    });

}

// JavaScript to toggle hamburger menu and nav links visibility
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hambugger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close hamburger menu when a nav link is clicked
  const navLinkElements = document.querySelectorAll('.nav-links a');
  navLinkElements.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
});

// Cart functionality
let cart = [];
const cartCount = document.getElementById('cart-count');
const cartIcon = document.querySelector('.cart-icon');

// Add to cart function
function addToCart(name, price) {
  const item = { name, price: parseFloat(price) };
  cart.push(item);
  updateCartCount();
  alert(`${name} added to cart!`);
}

// Update cart count
function updateCartCount() {
  cartCount.textContent = cart.length;
}

// Event listeners for add to cart buttons
document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const name = button.getAttribute('data-name');
      const price = button.getAttribute('data-price');
      addToCart(name, price);
    });
  });
});

//   // Cart display on click
//   cartIcon.addEventListener('click', () => {
//     displayCart();
//   });

// // Display cart in a simple alert (can be improved to modal)
// function displayCart() {
//   if (cart.length === 0) {
//     alert('Your cart is empty.');
//     return;
//   }
//   let cartItems = 'Your Cart:\n';
//   let total = 0;
//   cart.forEach((item, index) => {
//     cartItems += `${index + 1}. ${item.name} - $${item.price}\n`;
//     total += item.price;
//   });
//   cartItems += `\nTotal: $${total.toFixed(2)}`;
//   alert(cartItems);
// }

