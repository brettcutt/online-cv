$(document).ready(function () {
    // Burger menu spinning action
    $('#menu-bars').click(function () {
        if ($(".bar1").hasClass('forwards')) {

            $("#collapse").show("blind", 1000);
            $('.bar1').removeClass('bar1-animate-r')
            $('.bar2').removeClass('bar2-animate-r')
            $('.bar3').removeClass('bar3-animate-r')
            $('.bar1').addClass('bar1-animate')
            $('.bar2').addClass('bar2-animate')
            $('.bar3').addClass('bar3-animate')
            $('#menu-bars').children().removeClass('forwards')
            $('#menu-bars').children().addClass('backwards')
        } else {
            $("#collapse").hide("blind", 1000);
            $('.bar1').removeClass('bar1-animate')
            $('.bar2').removeClass('bar2-animate')
            $('.bar3').removeClass('bar3-animate')
            $('.bar1').addClass('bar1-animate-r')
            $('.bar2').addClass('bar2-animate-r')
            $('.bar3').addClass('bar3-animate-r')
            $('#menu-bars').children().addClass('forwards')
            $('#menu-bars').children().removeClass('backwards')
        }
    })
    // Burger menu spinning action

    // blind down navmenu
    $(".mobile-nav li").click(function () {
        $("#collapse").toggle("blind", 1000);
        $('.bar1').removeClass('bar1-animate')
        $('.bar2').removeClass('bar2-animate')
        $('.bar3').removeClass('bar3-animate')
        $('.bar1').addClass('bar1-animate-r')
        $('.bar2').addClass('bar2-animate-r')
        $('.bar3').addClass('bar3-animate-r')
        $('#menu-bars').children().addClass('forwards')
        $('#menu-bars').children().removeClass('backwards')
    })
    // blind down navmenu

    // NAVBAR ANIMATION 



    $(window).scroll(function () {
        var home = $('#home').position().top;
        var home1 = $('#home1').position().top;
        var skills = $('#skills').position().top;

        if ($(window).scrollTop() < home1 && !$('.nav-bar').hasClass('first-load')) {
            $('.nav-bar').removeClass('rise')
            $('.nav-bar').removeClass('pos')
            $('.nav-item').removeClass('rotateli')
            $('.nav-list').removeClass('rotateul')
            $('.nav-list a').removeClass('change-color')
            $('body').children().first().removeClass('top-navbar')
            $('.nav-bar').addClass('rise-reverse')
            $('.nav-item').addClass('rotateli-reverse')
            $('.nav-list').addClass('rotateul-reverse')
            $('.nav-list a').addClass('change-color-reverse')
            $('body').children().first().addClass('top-navbar-reverse')
        } else if ($(window).scrollTop() > home1) {
            $('.nav-bar').removeClass('first-load')
            $('.nav-bar').removeClass('rise-reverse')
            $('.nav-item').removeClass('rotateli-reverse')
            $('.nav-list').removeClass('rotateul-reverse')
            $('.nav-list a').removeClass('change-color-reverse')
            $('body').children().first().removeClass('top-navbar-reverse')
            $('.nav-bar').addClass('rise')
            $('.nav-bar').addClass('pos')
            $('.nav-item').addClass('rotateli')
            $('.nav-list').addClass('rotateul')
            $('.nav-list a').addClass('change-color')
            $('body').children().first().addClass('top-navbar')
        }
    });

    //SMOOTH SCROLL
    $('nav a').click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });


    //SMOOTH SCROLL DOWN ARROW
    $('.arrow-scroll').click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // If the page scrolls the nav a classes will be set to 
    $(window).scroll(function () {
        // NAV LINK ACTIVE SWITCHER
        var windowTop = $(this).scrollTop();
        var index = $(".nav-item").index(this);

        $('nav a').each(function () {
            var location = $(this.hash).offset().top - 30;
            if (location <= windowTop) {
                $(this).parent().parent().children().not(index).removeClass('highlight');
                if ($(this).parent().index() == 0) {
                }
                else {
                    $(this).parent().addClass('highlight');
                }
            }
        });

    });

    // If the page refreshes and loads past the home point, the nav classes will set
    var windowTop = $(window).scrollTop()
    var home = $('#home1').position().top;

    if (windowTop > home) {
        $('.nav-bar').addClass('rise')
        $('.nav-bar').addClass('pos')
        $('.nav-item').addClass('rotateli')
        $('.nav-list').addClass('rotateul')
        $('.nav-list a').addClass('change-color')
        $('body').children().first().addClass('top-navbar')
        var windowTop = $(this).scrollTop();
        var index = $(".nav-item").index(this);

        $('nav a').each(function () {
            var location = $(this.hash).offset().top - 30;
            if (location <= windowTop) {
                $(this).parent().parent().children().not(index).removeClass('highlight');
                if ($(this).parent().index() == 0) {
                    $(this).parent().removeClass('highlight');
                }
                else {
                    $(this).parent().addClass('highlight');
                }
            }
        });
    }

    $(".card-head").hover(function () {
        $(this).addClass('white-disc')
    }, function () {
        $(this).removeClass('white-disc')
    })


})