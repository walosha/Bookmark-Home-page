// TOGGLE HAMBURGER MENU TO OPEN AND CLOSE MOBILE NAVIGATION MENU
document
  .querySelector(".hamburger-menu__icon")
  .addEventListener("click", function() {
    document.querySelector(".menu__backdrop").classList.toggle("remove-nav");
  });
