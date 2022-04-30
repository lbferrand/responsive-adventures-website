const openMenuIcon = document.getElementById("menu-toggle-open");
const closeMenuIcon = document.getElementById("menu-toggle-close");
const mobileMenu = document.getElementById("mobile-menu");
const headerOverlay = document.getElementById("header");

openMenuIcon.addEventListener("click", () => {
  mobileMenu.classList.add("menu-opened");
  headerOverlay.classList.add("menu-opened");
});

closeMenuIcon.addEventListener("click", () => {
  mobileMenu.classList.remove("menu-opened");
  headerOverlay.classList.remove("menu-opened");
});
