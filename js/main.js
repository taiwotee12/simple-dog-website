const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear

// Hamburger menu toggle for nav links
const hambugger = document.getElementById('hambugger');
const navLinks = document.querySelector('.nav-links');

hambugger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hambugger.classList.toggle('active');
});