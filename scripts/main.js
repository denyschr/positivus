import initNavbar from "./navbar.js";
import initMarquees from "./marquee.js";

initNavbar();

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  initMarquees();
}
