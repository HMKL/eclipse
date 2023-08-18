let layoutHandler;

(function ($) {
    'use strict';
    let LayoutHandler = function () {
        let self = this;

        this.ready = function () {
            this.handleDOM();
            this.handleEvents();
        };

        this.handleDOM = function () {

        };

        this.handleEvents = function () {

        };
    };

    layoutHandler = new LayoutHandler();

    $(document).ready(function () {
        layoutHandler.ready();










        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            // centeredSlides: true,
            // loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                    // centeredSlides: true,
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30
                }
            }
        });














    });
})(jQuery);

/* eslint-disable linebreak-style */
(function () {
  'use strict';
  // Your custom JavaScript goes here


  const getHamburger = document.querySelector('.hamburger');
  const getHamburgerSpan = document.querySelectorAll('.hamburger > span');
  const getEclipseMobileMenu = document.querySelector('.eclipse-menu-mobile');
  const getBody = document.querySelector('body');
  const getHoverMenu = document.querySelector('.hover-menu');
  const getEclipseMenuHeader = document.querySelector('.eclipse-menu-header');
  const getInfoH = document.querySelectorAll('.info > ul > li > span');
  const getLargeInfo = document.querySelectorAll('.large-info > div');





  function showMenuHeader() {

    getInfoH[0].addEventListener('mouseenter', () => {
      getLargeInfo[0].classList.add('show-div');
      getLargeInfo[1].classList.remove('show-div');
    });




    getInfoH[1].addEventListener('mouseenter', () => {
      getLargeInfo[1].classList.add('show-div');
      getLargeInfo[0].classList.remove('show-div');
    });







    // getInfoH.forEach(element => {
    //   element.addEventListener('mouseleave', () => {
    //     getLargeInfo.forEach(element => {
    //       element.classList.remove('show-div');
    //     });
    //   })
    // });

  }
  showMenuHeader();











  //Add class to main menu
  const addClassToMenuHeader = () => {
    getHoverMenu.addEventListener('mouseenter', () => {
      getEclipseMenuHeader.classList.add('show-menu');
    });
  }

  addClassToMenuHeader();




  const removeClassToMenuHeader = () => {
    getEclipseMenuHeader.addEventListener('mouseleave', () => {
      getEclipseMenuHeader.classList.remove('show-menu');
    });
  }

  removeClassToMenuHeader();

  //End class to main menu






  const modifySpan = () => {
    getHamburger.addEventListener('click', () => {
      getEclipseMobileMenu.classList.toggle('show-mobile-menu');
      getBody.classList.toggle("over-body")

      getHamburgerSpan.forEach(element => {
        element.classList.toggle('show');
      });
    });
  }
  modifySpan();












  var btn = $('.back-top');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show-btn-top');
    } else {
      btn.removeClass('show-btn-top');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });
















})();


