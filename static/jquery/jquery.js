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

        if ($(window).scrollTop() < home1) {
            $('.nav-bar').removeClass('rise')
            $('.nav-bar').removeClass('pos')
            $('.nav-item').removeClass('rotateli')
            $('.nav-list').removeClass('rotateul')
            $('.nav-list a').removeClass('change-color')
            $('body').children().first().removeClass('test')
            $('.nav-bar').addClass('rise-reverse')
            $('.nav-item').addClass('rotateli-reverse')
            $('.nav-list').addClass('rotateul-reverse')
            $('.nav-list a').addClass('change-color-reverse')
            $('body').children().first().addClass('test-reverse')
        } else {
            $('.nav-bar').removeClass('rise-reverse')
            $('.nav-item').removeClass('rotateli-reverse')
            $('.nav-list').removeClass('rotateul-reverse')
            $('.nav-list a').removeClass('change-color-reverse')
            $('body').children().first().removeClass('test-reverse')
            $('.nav-bar').addClass('rise')
            $('.nav-bar').addClass('pos')
            $('.nav-item').addClass('rotateli')
            $('.nav-list').addClass('rotateul')
            $('.nav-list a').addClass('change-color')
            $('body').children().first().addClass('test')
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


    $(window).scroll(function () {
        // NAV LINK ACTIVE SWITCHER
        var scrollBarLocation = $(this).scrollTop();
        var index = $(".nav-item").index(this);
        $('nav a').each(function () {
            var sectionOffset = $(this.hash).offset().top - 30;
            if (sectionOffset <= scrollBarLocation) {
                $(this).parent().parent().children().not(index).removeClass('highlight');
                if ($(this).parent().index() == 0) {
                    $(this).parent().removeClass('highlight');
                }
                else {
                    $(this).parent().addClass('highlight');
                }
            }
        });

    });

    $(".card-head").hover(function () {
        $(this).addClass('white-disc')
    }, function () {
        $(this).removeClass('white-disc')
    })


})