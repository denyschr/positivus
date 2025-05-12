import initNavbar from "./navbar.js";
import initMarquees from "./marquees.js";
import initSliders from "./sliders.js";

initNavbar();

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  initMarquees();
}

initSliders();
