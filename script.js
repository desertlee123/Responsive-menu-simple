const iconMenu = document.getElementById("icon-menu");
const menuNav = document.getElementById("menu-nav");

// Una forma de mostrar el menú

iconMenu.addEventListener("click", () =>
  menuNav.classList.toggle("menu-nav--show")
);

// Otra forma de mostrar el menú

/* iconMenu.addEventListener("click", () => {
  menuNav.classList.contains("menu-nav--show")
    ? menuNav.classList.remove("menu-nav--show")
    : menuNav.classList.add("menu-nav--show");
}); */
