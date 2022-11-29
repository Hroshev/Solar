import Swiper from "swiper/bundle";

const categoriesSection = new Swiper(".meta__swiper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // breakpoints: {
  //   576: {
  //     slidesPerView: 2,
  //     spaceBetween: 30,
  //   },
  //   992: {
  //     slidesPerView: 4,
  //     spaceBetween: 30,
  //   },
  // },
});