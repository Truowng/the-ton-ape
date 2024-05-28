AOS.init();

const menuBtn = document.querySelector("#header .menu-button");
const closeBtn = document.querySelector(
  "#header .header-link-list .close-button"
);
const menu = document.querySelector("#header .header-link-list");

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

const bannerSlide = new Swiper(".banner-slider .slide-1", {
  direction: "horizontal",
  speed: 1000,
  slidesPerView: 2,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 3,
    },
  },
});

const bannerSlide2 = new Swiper(".banner-slider .slide-2", {
  direction: "horizontal",
  speed: 1000,
  slidesPerView: 2,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
    reverseDirection: true,
  },
  loop: true,
  breakpoints: {
    576: {
      slidesPerView: 3,
    },
  },
});

const teamSlide = new Swiper(".team-slider .swiper", {
  direction: "horizontal",
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
  },
  loop: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 4,
    },
  },
});
