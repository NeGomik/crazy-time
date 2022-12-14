new Swiper('.screenshots__swiper-img', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  preventClicks: true,
  breakpoints: {
    1440: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 300,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

  },






});
