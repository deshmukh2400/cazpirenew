$(function() {
    "use strict";

//**** Remove comments when launching full site index-full-site.html
	
    $(window).on("load", function() {
        setTimeout(function() {
            $(".fadeIn-element").delay(500).css({
                display: "none"
            }).fadeIn(700);
        }, 0);
    });
	/*
    // navigation page scroll
    $(".page-scroll").on("click", function(e) {
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top - 55
        }, 1500, 'easeInOutExpo');
        e.preventDefault();
    });

    // highlight navigation
    $("body").scrollspy({
        target: ".navbar",
        offset: 65
    });

    // close mobile menu
    $(".navbar-collapse ul li a").on("click", function() {
        $(".navbar-toggle:visible").click();
    });

    // highlight navigation
    $(".link-underline-menu").on("click", function() {
        $(".link-underline-menu").removeClass("active");
        $(this).addClass("active");
    });

    $(window).on("scroll", function() {
        // collapse navigation
        if ($(".navbar").offset().top > 50) {
            $(".navbar-bg-switch").addClass("main-navigation-bg");
        } else {
            $(".navbar-bg-switch").removeClass("main-navigation-bg");
        }

        // home fadeOut animation
        $("h1.home-page-title, h2.home-page-title, .the-button, .the-button-light").css("opacity", 1 - $(window).scrollTop() / 500);
    });
*/
    // slick slider
    $(".slick-auto").slick({
        arrows: true,
        initialSlide: 0,
        infinite: true,
        //prevArrow: "<i class='slick-prev fas fa-arrow-circle-left'></i>",
        //nextArrow: "<i class='slick-next fas fa-arrow-circle-right'></i>",
        prevArrow: "",
        nextArrow: "",
        fade: false,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease",
        speed: 600,
        dots: true
    });	
});
