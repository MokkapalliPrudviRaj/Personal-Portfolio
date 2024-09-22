
// var container = document.getElementById("container");
// if (container) {
//     container.addEventListener("click", function () {
//         var popup = document.getElementById("navigationMenuContainer");
//         if (!popup) return;
//         var popupStyle = popup.style;
//         if (popupStyle) {
//             popupStyle.display = "flex";
//             popupStyle.zIndex = 100;
//             popupStyle.backgroundColor = "rgba(113, 113, 113, 0.3)";
//             popupStyle.alignItems = "center";
//             popupStyle.justifyContent = "center";
//         }
//         popup.setAttribute("closable", "");

//         var onClick = popup.onClick || function (e) {
//             if (e.target === popup && popup.hasAttribute("closable")) {
//                 popupStyle.display = "none";
//             }
//         };
//         popup.addEventListener("click", onClick);
//     });
// }





// JavaScript to handle the menu icon functionality
document.addEventListener("DOMContentLoaded", function () {
    // Get the menu icon, close icon, and navigation menu container
    const menuIcon = document.querySelector(".material-symbolsmenu-icon");
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
  