// slider
// document.addEventListener("DOMContentLoaded", function() {
//   var elems = document.querySelectorAll(".slider");
//   var instances = M.Slider.init(elems);
// });

function init() {
  var mySwiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "vertical",
    loop: true,

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },

    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },

    effect: "flip",
    grabCursor: true

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
}
