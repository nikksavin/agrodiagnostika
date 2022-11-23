$(document).ready(function () {
  // HERO SLIDER

  const swiper = new Swiper(".banner__slider", {
    // Optional parameters
    // direction: 'horisontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: ".banner__slider-pagination.swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".banner__slider .arrow.arrow__right",
      prevEl: ".banner__slider .arrow.arrow__left",
    },
  });

  // PAGE NAV MOBILE

  if ($(window).width() < 744) {
    $(".page__sidebar-nav").on("click", function () {

      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(".page__sidebar-list").slideUp();
      } else {
        $(this).addClass("active");
        $(".page__sidebar-list").slideDown();
      }
  
      $(".select-option").on("click", function () {
        $(".select-option").removeClass("selected");
        $(this).addClass("selected");
        $(".page__sidebar--selected span").text($(this).text());
      });
  
    });
  }


 
});
