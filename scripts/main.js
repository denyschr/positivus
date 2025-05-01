import { debounce } from "./helpers.js";

const body = document.body;
const navbarToggleButton = document.querySelector(
  "[data-navbar-toggle-button]"
);

navbarToggleButton.addEventListener("click", () => {
  body.classList.toggle("lock");
  body.classList.contains("menu-open")
    ? navbarToggleButton.setAttribute("aria-expanded", "false")
    : navbarToggleButton.setAttribute("aria-expanded", "true");
  body.classList.toggle("menu-open");
});

window.addEventListener(
  "resize",
  debounce(() => {
    if (window.innerWidth >= 992) {
      body.classList.remove("lock");
      body.classList.remove("menu-open");
      navbarToggleButton.setAttribute("aria-expanded", "false");
    }
  })
);
