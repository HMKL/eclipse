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
  const injectYear = document.querySelector('.inject-year');




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











  //Back to top button start
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

  //Back to top button end







  //Inject date start

  const year = new Date();
  injectYear.innerHTML = `© ${year.getFullYear()} Catalin Baciu`;

  //Inject date end






})();


