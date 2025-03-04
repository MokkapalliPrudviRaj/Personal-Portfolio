// JavaScript to handle the menu icon functionality
document.addEventListener("DOMContentLoaded", function () {
  // Get the menu icon, close icon, and navigation menu container
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");
  const navigationMenuContainer = document.getElementById(
    "navigationMenuContainer"
  );

  // When the menu icon is clicked, show the menu
  menuIcon.addEventListener("click", function () {
    navigationMenuContainer.style.display = "block"; // Show the menu
  });

  // When the close icon is clicked, hide the menu
  closeIcon.addEventListener("click", function () {
    navigationMenuContainer.style.display = "none"; // Hide the menu
  });

  // Optionally, close the menu when clicking outside of the menu
  window.addEventListener("click", function (e) {
    if (e.target === navigationMenuContainer) {
      navigationMenuContainer.style.display = "none"; // Hide the menu
    }
  });
});

// dheader animation 
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".Dheader");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// dheader animation for logo
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".Dheader");
  let logoImage = document.getElementById("logo-image");

  // Check scroll position
  if (window.scrollY > 50) {
    // Adjust this value to when you want the logo change
    navbar.classList.add("scrolled");
    logoImage.src = "images/personal-light.svg"; // Path to the logo for when scrolled
  } else {
    navbar.classList.remove("scrolled");
    logoImage.src = "images/personal.svg"; // Original logo path
  }
});



window.addEventListener("load", () => {
  const typingElements = document.querySelectorAll('.typing-effect');
  typingElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, index * 1000); // Delays for each element
  });
});
