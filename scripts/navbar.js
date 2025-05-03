import { debounce } from "./helpers.js";

export default function initNavbar() {
  const body = document.body;
  const navbar = document.querySelector("[data-navbar]");
  const toggleButton = document.querySelector("[data-navbar-toggle-button]");

  const toggleMenu = () => {
    body.classList.toggle("lock");
    body.classList.contains("menu-open")
      ? toggleButton.setAttribute("aria-expanded", "false")
      : toggleButton.setAttribute("aria-expanded", "true");
    body.classList.toggle("menu-open");
  };

  toggleButton.addEventListener("click", toggleMenu);

  window.addEventListener("scroll", () => {
    window.scrollY > 0
      ? navbar.classList.add("shrink")
      : navbar.classList.remove("shrink");
  });

  window.addEventListener(
    "resize",
    debounce(() => {
      if (window.innerWidth >= 992) {
        body.classList.remove("lock");
        body.classList.remove("menu-open");
        toggleButton.setAttribute("aria-expanded", "false");
      }
    })
  );
}
