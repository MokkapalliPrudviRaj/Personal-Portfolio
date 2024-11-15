// JavaScript to handle the menu icon functionality
document.addEventListener("DOMContentLoaded", function () {
    // Get the menu icon, close icon, and navigation menu container
    const menuIcon = document.querySelector(".menu-icon");
    const closeIcon = document.querySelector(".close-icon");
    const navigationMenuContainer = document.getElementById("navigationMenuContainer");
  
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
  