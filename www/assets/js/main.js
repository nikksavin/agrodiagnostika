$(document).ready(function() {


    const swiper = new Swiper('.banner__slider', {
        // Optional parameters
        // direction: 'horisontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.banner__slider-pagination.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.banner__slider .arrow.arrow__right',
          prevEl: '.banner__slider .arrow.arrow__left',
        },
      
    });


});