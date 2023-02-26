document.addEventListener("DOMContentLoaded", () => {

    // Wow JS
    (function() {
        new WOW().init();
    }());


    // Fancybox settings
    (function() {
        Fancybox.bind("[data-fancybox]", {
            autoFocus: false,
            dragToClose: false
        });
    }());


    // Form validation
    (function() {
        $('form').each(function() {
            jQuery.validator.addMethod("checkMask", function (e, t) {
                return /.\d..\d{3}..\d{3}.\d{2}.\d{2}/g.test(e);
            });

            $(this).validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2,
                        maxlength: 50
                    },
                    phone: {
                        required: true,
                        checkMask: true
                    },
                    email: {
                        required: true,
                        minlength: 2,
                        maxlength: 50,
                        email: true
                    }
                },
            });
        });

        let elements = document.querySelectorAll('input[name="phone"]');
        let maskOptions = {
            mask: '+{7} (000) 000-00-00',
            lazy: false
        };
        elements.forEach(element => {
            element.addEventListener('focus', () => {
                let mask = IMask(element, maskOptions);
            }); 
        });
    }());


    // Sliders
    (function() {
        new Splide('.promo__blocks-slider .splide', {
            arrows: true,
            pagination: true,
            gap: '50px',
            width: '100%',
            height: '100%',
            breakpoints: {
                600: {
                    arrows: false
                }
            }
        }).mount();

        document.querySelectorAll('.ware .splide').forEach(item => {
            new Splide(item, {
                arrows: false,
                pagination: true,
                gap: '30px',
            }).mount();
        });

        (function() {
            let splide = new Splide('.about .splide', {
                arrows: true,
                pagination: false,
                gap: '35px',
                breakpoints: {
                    991: {
                        width: '678px'
                    },
                    767: {
                        arrows: false
                    }
                }
            });
            let bar    = splide.root.querySelector( '.my-carousel-progress-bar' );
            
            splide.on('mounted move', function () {
                let end  = splide.Components.Controller.getEnd() + 1;
                let rate = Math.min( ( splide.index + 1 ) / end, 1 );
                bar.style.width = String( 100 * rate ) + '%';
            } );
            
            splide.mount();
        }());

        (function() {
            let splide = new Splide('.stock .splide', {
                arrows: true,
                pagination: false,
                gap: '50px',
                breakpoints: {
                    767: {
                        arrows: false
                    }
                }
            });
            let bar    = splide.root.querySelector( '.my-carousel-progress-bar' );
            
            splide.on('mounted move', function () {
                let end  = splide.Components.Controller.getEnd() + 1;
                let rate = Math.min( ( splide.index + 1 ) / end, 1 );
                bar.style.width = String( 100 * rate ) + '%';
            } );
            
            splide.mount();
        }());
    }());

    
    // Tabs
    (function() {
        const tabs = document.querySelectorAll('.discount__tabs-item');
        const items = document.querySelectorAll('.discount__items');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(tab => {
                    tab.classList.remove('discount__tabs-item_active');
                });
                tab.classList.add('discount__tabs-item_active');
                items.forEach(item => {
                    item.classList.remove('discount__items_active');
                    if (tab.getAttribute('data-tab') == item.getAttribute('data-tab')) {
                        item.classList.add('discount__items_active');
                    }
                })
            });
        });
    }());


    // Показываем модальное окно при уходе со страницы
    // (function() {
    //     function t() {
    //         Fancybox.show(
    //             [
    //                 {
    //                     src: '#modal2',
    //                 },
    //             ],
    //             {
    //                 autoFocus: false,
    //                 dragToClose: false
    //             }
    //         );
    //     }

    //     $(document).one("mouseleave", function (e) {
    //         $("#pageMain").length && e.clientY < 10 && t();
    //     });
    // }());


    // Header fixed
    (function() {
        let header = document.querySelector('.index-header'),
            main = document.querySelector('.index-main'),
            headerHeight = getComputedStyle(header).height;

        main.style.marginTop = headerHeight;
    }());


    // Устанавливаем текущий год в футере
    (function() {
        let span = document.querySelectorAll('[data-year]');
        let year = new Date().getFullYear();
        span.forEach(item => {
            item.textContent = year;
        });
    }());

});