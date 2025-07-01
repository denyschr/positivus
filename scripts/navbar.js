import { throttle } from "./utils.js";

const initNavbar = () => {
  const body = document.body;
  const navbar = document.querySelector("[data-navbar]");
  const toggleMenuButton = document.querySelector(
    "[data-navbar-toggle-menu-button]"
  );
  const mediaQuery = window.matchMedia("(max-width: 61.99875em)");

  const toggleMenu = () => {
    body.classList.toggle("lock");
    body.classList.contains("menu-open")
      ? toggleMenuButton.setAttribute("aria-expanded", "false")
      : toggleMenuButton.setAttribute("aria-expanded", "true");
    body.classList.toggle("menu-open");
  };

  const updateMenu = (mq) => {
    if (!mq.matches) {
      body.classList.remove("lock");
      body.classList.remove("menu-open");
      toggleMenuButton.setAttribute("aria-expanded", "false");
    }
  };

  const shrink = throttle(() => {
    window.scrollY > 0
      ? navbar.classList.add("shrink")
      : navbar.classList.remove("shrink");
  });

  shrink();
  updateMenu(mediaQuery);
  toggleMenuButton.addEventListener("click", toggleMenu);
  mediaQuery.addEventListener("change", updateMenu);
  window.addEventListener("scroll", shrink);
};

export default initNavbar;
