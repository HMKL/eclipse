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




})();


