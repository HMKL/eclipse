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
                    slidesPerView: 1.2,
                    spaceBetween: 20
                },
                480: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30
                }
            }
        });














    });
})(jQuery);
