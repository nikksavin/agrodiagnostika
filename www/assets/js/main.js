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

  // PAGE SIDEBAR NAV MOBILE

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

  function addYaMaps() {
    var myMap;
    ymaps.ready(init);
    function init() {
      (myMap = new ymaps.Map("map", {
        center: [55.623676, 37.617312],
        zoom: 16,
        controls: [],
      })),
        (myPlacemark = new ymaps.Placemark(
          [55.623676, 37.617312],
          {
            balloonContentHeader: "ООО «АгроДиагностика» Россия",
            balloonContentBody:
              "117587, г. Москва, вн. тер. г. муниципальный округ Чертаново Северное, Варшавское ш, д.125Ж, к.6, этаж 3, помещ. 5",
            balloonContentFooter:
              "+7-495-727-60-71<br>+7-985-727-60-71<br>agrodiagnostica@bk.ru",
          },
          {
            // iconLayout: 'default#image',
            // iconImageHref: '<?= SITE_TEMPLATE_PATH ?>/images/map-marker-edited.png',
            // iconImageSize: [28, 37],
            // iconImageOffset: [-37, -45],
            // balloonOffset:[-25, -5]
          }
        ));
      myMap.geoObjects.add(myPlacemark);
      ymapsTouchScroll(myMap, { preventScroll: true, preventTouch: true });
    }
  }
  addYaMaps();

  // Header mobile menu
  $(".button-menu").on("click", function () {
    if ($(this).hasClass("opened")) {
      $(".header-top").removeClass("mobile-menu");
      $(".submenu__mobile").slideUp();
      $("body").removeClass("overflow-hidden");
      $(".header-nav-bar").removeClass("mobile-menu");
      $(".header-nav").removeClass("show");
      $(this).removeClass("opened");
    } else {
      $(this).addClass("opened");
      $(".header-top").addClass("mobile-menu");
      $(".header-nav-bar").addClass("mobile-menu");
      $(".header-nav").addClass("show");
      $("body").addClass("overflow-hidden");
    }
  });


  // if ($(window).width() < 744) {
    // NAV ACCORDION IF WIDTH < 720
  $(".header__link").click(function () {
    $(this).next().slideToggle();
    $(this).find("i").toggleClass("rotate");
  });
  // }

  $('#open-popup').magnificPopup({
    type: 'inline',
    midClick: true,
    mainClass: 'site__popup'
  });


});
