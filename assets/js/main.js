/* ===================================================================
    Author          : ModinaTheme
    Version         : 1.0
* ================================================================= */

(function($) {
    "use strict";

    $(document).ready( function() {

    //>> Mobile Menu Js Start <<//
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "1199",
        meanExpand: ['<i class="far fa-plus"></i>'],
    });

    //>> Sidebar Toggle Js Start <<//
    $(".offcanvas__close,.offcanvas__overlay").on("click", function() {
        $(".offcanvas__info").removeClass("info-open");
        $(".offcanvas__overlay").removeClass("overlay-open");
    });
    $(".sidebar__toggle").on("click", function() {
        $(".offcanvas__info").addClass("info-open");
        $(".offcanvas__overlay").addClass("overlay-open");
    });

    //>> Body Overlay Js Start <<//
    $(".body-overlay").on("click", function() {
        $(".offcanvas__area").removeClass("offcanvas-opened");
        $(".df-search-area").removeClass("opened");;
        $(".body-overlay").removeClass("opened");
    });

    //>> Sticky Header Js Start <<//

    $(window).scroll(function() {
        if ($(this).scrollTop() > 250) {
            $("#header-sticky").addClass("sticky");
        } else {
            $("#header-sticky").removeClass("sticky");
        }
    });

    //>> Hero-1 Slider Start <<//
    const sliderActive2 = ".hero-slider";
    const sliderInit2 = new Swiper(sliderActive2, {
        loop: true,
        slidesPerView: 1,
        effect: "fade",
        speed: 3000,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        pagination: {
        el: ".dot2",
        clickable: true,
    },
        navigation: {
            nextEl: ".array-prev",
            prevEl: ".array-next",
        },
    });
    function animated_swiper(selector, init) {
        const animated = function animated() {
            $(selector + " [data-animation]").each(function () {
                let anim = $(this).data("animation");
                let delay = $(this).data("delay");
                let duration = $(this).data("duration");
                $(this)
                    .removeClass("anim" + anim)
                    .addClass(anim + " animated")
                    .css({
                        webkitAnimationDelay: delay,
                        animationDelay: delay,
                        webkitAnimationDuration: duration,
                        animationDuration: duration,
                    })
                    .one("animationend", function () {
                        $(this).removeClass(anim + " animated");
                    });
            });
        };
        animated();
        init.on("slideChange", function () {
            $(sliderActive2 + " [data-animation]").removeClass("animated");
        });
        init.on("slideChange", animated);
    }
    animated_swiper(sliderActive2, sliderInit2);
    //>> Banner Animation <<//

    $('.hero-3 .hero-slider-active-2').slick({
    autoplay: true,
    speed: 1500,
    lazyLoad: 'progressive',
    arrows: true,
    fade: true,
    dots: false,
    prevArrow: $('.hero-nav-prev'),
    nextArrow: $('.hero-nav-next'),
    }).slickAnimation();
    

    //>> Video Popup Start <<//
    $(".img-popup").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        },
    });

    $('.video-popup').magnificPopup({
        type: 'iframe',
        callbacks: {
        }
    });
    
    //>> Counterup Start <<//
    $(".count").counterUp({
        delay: 15,
        time: 4000,
    });

    //>> Wow Animation Start <<//
    // new WOW().init();

    //>> Nice Select Start <<//
    $('select').niceSelect();

    //>> Service Slider Start <<//
    if($('.service-slider').length > 0) {
        const serviceSlider = new Swiper(".service-slider", {
            spaceBetween: 10,
            speed: 1500,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
    }
     
    // Brand Logo Swiper Slide Start <<//
    if($('.brand-slider').length > 0) {
        const brandSlider = new Swiper(".brand-slider", {
        spaceBetween: 30,
        speed: 1000,
        loop: "true",
        speed: 1500,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".dot",
            clickable: true,
        },
        breakpoints: {
            475: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
            1199: {
                slidesPerView: 5,
            },
        },
    });
    }
      
    //>> testimonial Slider Start <<//
    if($('.testimonial-swiper').length > 0) {
    const testimonialSwiper = new Swiper(".testimonial-swiper", {
        spaceBetween: 30,
        speed: 2000,
        loop: true,
        centeredSlides: false,
        slidesPerGroupSkip: 3,
        grabCursor: true,
        keyboard: {
        enabled: true,
        },
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".dot",
            clickable: true,
        },
        breakpoints: {
            1199: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
    }

    if($('.testimonial-slider-2').length > 0) {
    const testimonialSlider2 = new Swiper(".testimonial-slider-2", {
        speed: 1500,
        loop: true,
        spaceBetween: 30,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".array-prev",
            prevEl: ".array-next",
        },
        breakpoints: {
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 1,
            },

            575: {
                slidesPerView: 1,
            },

            0: {
                slidesPerView: 1,
            },
        },

    });
    }

    //>> Case Studies Carousel Start <<//
    if($('.case-studies-carousel-active').length > 0) {
    $('.case-studies-carousel-active').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 800,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1, 
        dots: false,
        dotsClass: 'slide-dots',
        responsive: [
            {
                breakpoint: 1699,
                settings: {
                slidesToShow: 4,
                }
            },
            {
                breakpoint: 1499,
                settings: {
                slidesToShow: 3,
                }
            },
            {
                breakpoint: 1191,
                settings: {
                slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 2,
                center: true,
                }
            },
            {
                breakpoint: 700,
                settings: {
                slidesToShow: 1
                }
            }
        ],

    });
    }

    //>> Project Slider Start <<//
    if($('.project-slider').length > 0) {
        const projectSlider = new Swiper(".project-slider", {
            spaceBetween: 30,
            speed: 1500,
            loop: true,
            autoplay: {
                delay: 1500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".dot",
                clickable: true,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                650: {
                    slidesPerView: 2,
                },
        
                575: {
                    slidesPerView: 1,
                },
        
                0: {
                    slidesPerView: 1,
                },
            },
            });
    }

    //>> Shop Slider Start <<//
    if($('.shop-slider').length > 0) {
        const shopSlider = new Swiper(".shop-slider", {
            spaceBetween: 30,
            speed: 1500,
            loop: true,
            autoplay: {
                delay: 1500,
                disableOnInteraction: false,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                650: {
                    slidesPerView: 2,
                },
        
                575: {
                    slidesPerView: 1,
                },
        
                0: {
                    slidesPerView: 1,
                },
            },
            });
    }


    //>> Testimonial Carousel Start <<//
    if($('.testimonial-slider').length > 0) {
    const testimonialSlider = new Swiper(".testimonial-slider", {
        spaceBetween: 30,
        speed: 3000,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1199: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
    }

    //>> News Slider Start <<//
    if($('.news-slider').length > 0) {
    const newsSlider = new Swiper(".news-slider", {
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
    },
    breakpoints: {
        1199: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },

        575: {
            slidesPerView: 1,
        },

        0: {
            slidesPerView: 1,
        },
    },
    });
    }
      
    //>> Team Hover Image Show Slider Start <<//
    const teamItems = document.querySelectorAll(".team-items");

    function followImageCursor(event, teamItems) {
        const contentBox = teamItems.getBoundingClientRect();
        const dx = event.clientX - contentBox.x;
        const dy = event.clientY - contentBox.y;
        teamItems.children[2].style.transform = `translate(${dx}px, ${dy}px) rotate(0)`;
    }
      
    teamItems.forEach((item, i) => {
        item.addEventListener("mousemove", (event) => {
            setInterval(followImageCursor(event, item), 1000);
        });
    });

    //>>Background image Start <<//
    $("[data-background").each(function () {
        $(this).css(
            "background-image",
            "url( " + $(this).attr("data-background") + "  )"
        );
    });

    //>>Image Class Add Start <<//
    $(document).on("mouseenter", ".changeImage2", function () {
        let newImage = $(this).data("image");
        let fadeDuration = 200;

        $("#myImage2").fadeOut(fadeDuration, function () {
            $("#myImage2").attr("src", newImage);
            $("#myImage2").fadeIn(fadeDuration);
        });

        $(this).addClass("clicked");
        $(".changeImage2").not(this).removeClass("clicked");
    });

    // Team Js
    const getslide = $('.main-box li').length - 1;

    const slidecal = 100 / getslide + '%';

    $('.box').css({
        "width": slidecal
    });

    $('.box').hover(function() {
        $('.box').removeClass('active');
        $(this).addClass('active');
    });

    //>> Quantity Js Start <<//
    $(".quantity").on("click", ".plus", function (e) {
    let $input = $(this).prev("input.qty");
    let val = parseInt($input.val(), 10); // Specify base 10
    $input.val(val + 1).change();
    });

    $(".quantity").on("click", ".minus", function (e) {
        let $input = $(this).next("input.qty");
        let val = parseInt($input.val(), 10); // Specify base 10
        if (val > 0) {
            $input.val(val - 1).change();
        }
    });

    //>> Quantity Cart Js Start <<//
    let quantity = 0;
    let price = 0;
    $(".cart-item-quantity-amount, .product-quant").html(quantity);
    $(".total-price, .product-pri").html(price.toFixed(2));
    $(".cart-increment, .cart-incre").on("click", function() {
        if (quantity <= 4) {
            quantity++;
            $(".cart-item-quantity-amount, .product-quant").html(quantity);
            let basePrice = $(".base-price, .base-pri").text();
            $(".total-price, .product-pri").html((basePrice * quantity).toFixed(2));
        }
    });

    $(".cart-decrement, .cart-decre").on("click", function() {
        if (quantity >= 1) {
            quantity--;
            $(".cart-item-quantity-amount, .product-quant").html(quantity);
            let basePrice = $(".base-price, .base-pri").text();
            $(".total-price, .product-pri").html((basePrice * quantity).toFixed(2));
        }
    });

    $(".cart-item-remove>a").on("click", function() {
        $(this).closest(".cart-item").hide(300);
    });

    //>> PaymentMethod Js Start <<//
    const paymentMethod = $("input[name='pay-method']:checked").val();
    $(".payment").html(paymentMethod);
    $(".checkout-radio-single").on("click", function() {
        let paymentMethod = $("input[name='pay-method']:checked").val();
        $(".payment").html(paymentMethod);
    });

    //>> Search Popup Start <<//
    const $searchWrap = $(".search-wrap");
    const $navSearch = $(".nav-search");
    const $searchClose = $("#search-close");

    $(".search-trigger").on("click", function (e) {
        e.preventDefault();
        $searchWrap.animate({ opacity: "toggle" }, 500);
        $navSearch.add($searchClose).addClass("open");
    });

    $(".search-close").on("click", function (e) {
        e.preventDefault();
        $searchWrap.animate({ opacity: "toggle" }, 500);
        $navSearch.add($searchClose).removeClass("open");
    });

    function closeSearch() {
        $searchWrap.fadeOut(200);
        $navSearch.add($searchClose).removeClass("open");
    }

    $(document.body).on("click", function (e) {
        closeSearch();
    });

    $(".search-trigger, .main-search-input").on("click", function (e) {
        e.stopPropagation();
    });

    //>> Mouse Cursor Start <<//
    function mousecursor() {
        if ($("body")) {
            const e = document.querySelector(".cursor-inner"),
                t = document.querySelector(".cursor-outer");
            let n,
                i = 0,
                o = !1;
            (window.onmousemove = function(s) {
                o ||
                    (t.style.transform =
                        "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                    (e.style.transform =
                        "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                    (n = s.clientY),
                    (i = s.clientX);
            }),
            $("body").on("mouseenter", "a, .cursor-pointer", function() {
                    e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
                }),
                $("body").on("mouseleave", "a, .cursor-pointer", function() {
                    ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
                    (e.classList.remove("cursor-hover"),
                        t.classList.remove("cursor-hover"));
                }),
                (e.style.visibility = "visible"),
                (t.style.visibility = "visible");
        }
    }
    $(function() {
        mousecursor();
    });

    // Back to top btn area start here ***
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $("#back-top").addClass("show");
        } else {
            $("#back-top").removeClass("show");
        }
    });
    $("#back-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });
    // Back to top btn area end here ***
    

    // circle-progress
    $(".circle-bar").loading();


    }); // End Document Ready Function

    // Progressbar Start
    $.fn.loading = function() {
    const DEFAULTS = {
        backgroundColor: '#b3cef6',
        progressColor: '#4b86db',
        percent: 75,
        duration: 2000
    };

    $(this).each(function() {
        let $target = $(this);

        const opts = {
            backgroundColor: $target.data('color') ? $target.data('color').split(',')[0] : DEFAULTS.backgroundColor,
            progressColor: $target.data('color') ? $target.data('color').split(',')[1] : DEFAULTS.progressColor,
            percent: $target.data('percent') ? $target.data('percent') : DEFAULTS.percent,
            duration: $target.data('duration') ? $target.data('duration') : DEFAULTS.duration
        };
        // console.log(opts);

        $target.append('<div class="background"></div><div class="rotate"></div><div class="left"></div><div class="right"></div><div class=""><span>' + opts.percent + '%</span></div>');

        $target.find('.background').css('background-color', opts.backgroundColor);
        $target.find('.left').css('background-color', opts.backgroundColor);
        $target.find('.rotate').css('background-color', opts.progressColor);
        $target.find('.right').css('background-color', opts.progressColor);

        const $rotate = $target.find('.rotate');
        setTimeout(function() {
            $rotate.css({
                'transition': 'transform ' + opts.duration + 'ms linear',
                'transform': 'rotate(' + opts.percent * 3.6 + 'deg)'
            });
        }, 1);

        if (opts.percent > 50) {
            let animationRight = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-end';
            let animationLeft = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-start';
            $target.find('.right').css({
                animation: animationRight,
                opacity: 1
            });
            $target.find('.left').css({
                animation: animationLeft,
                opacity: 0
            });
        }
    });
  }

    function loader() {
      $(window).on('load', function() {
          // Animate loader off screen
          $(".preloader").addClass('loaded');
          $(".preloader").delay(600).fadeOut();
      });
    }
    loader();
        

})(jQuery); // End jQuery

