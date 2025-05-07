import { debounce } from "./helpers.js";

export default function initNavbar() {
  const body = document.body;
  const navbar = document.querySelector("[data-navbar]");
  const toggleMenuButton = document.querySelector(
    "[data-navbar-toggle-menu-button]"
  );

  const toggleMenu = () => {
    body.classList.toggle("lock");
    body.classList.contains("menu-open")
      ? toggleMenuButton.setAttribute("aria-expanded", "false")
      : toggleMenuButton.setAttribute("aria-expanded", "true");
    body.classList.toggle("menu-open");
  };

  const shrink = () => {
    window.scrollY > 0
      ? navbar.classList.add("shrink")
      : navbar.classList.remove("shrink");
  };

  shrink();

  toggleMenuButton.addEventListener("click", toggleMenu);
  window.addEventListener("scroll", shrink);
  window.addEventListener(
    "resize",
    debounce(() => {
      if (window.innerWidth >= 992) {
        body.classList.remove("lock");
        body.classList.remove("menu-open");
        toggleMenuButton.setAttribute("aria-expanded", "false");
      }
    })
  );
}
