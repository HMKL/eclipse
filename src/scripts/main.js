/* eslint-disable linebreak-style */
(function () {
  'use strict';
  // Your custom JavaScript goes here


  const getHamburger = document.querySelector('.hamburger');
  const getHamburgerSpan = document.querySelectorAll('.hamburger > span');
  const getEclipseMobileMenu = document.querySelector('.eclipse-menu-mobile');

  const modifySpan = () => {
    getHamburger.addEventListener('click', () => {
      getEclipseMobileMenu.classList.toggle('show-mobile-menu');
      getHamburgerSpan.forEach(element => {
        element.classList.toggle('show');
      });
    });
  }
  modifySpan();




})();


