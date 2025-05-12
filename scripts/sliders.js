import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

export default function initSliders() {
  const testimonialsSlider = new Swiper("[data-testimonials-slider]", {
    centeredSlides: true,
    loop: true,
    pagination: {
      el: "[data-testimonials-slider-pagination]",
      clickable: true,
      renderBullet: function (_, className) {
        return `
          <span class="${className}">
            <svg width="14" height="14" aria-hidden="true">
              <use href="assets/icons/icons.svg#star"></use>
            </svg>
          </span>
        `;
      },
    },
    navigation: {
      nextEl: "[data-testimonials-slider-button-next]",
      prevEl: "[data-testimonials-slider-button-prev]",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    },
  });
}
