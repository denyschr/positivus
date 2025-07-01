const initMarquees = () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }
  const containers = document.querySelectorAll("[data-marquee]");
  containers.forEach((container) => {
    container.setAttribute("data-animated", "true");

    const inner = container.querySelector("[data-marquee-inner]");
    const elements = Array.from(inner.children);

    elements.forEach((element) => {
      const clone = element.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      inner.appendChild(clone);
    });
  });
};

export default initMarquees;
