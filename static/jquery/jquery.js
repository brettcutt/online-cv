$(document).ready(function () {

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

    $(".timeline-item").eq(0).addClass('white-disc')
    $(".timeline-item").eq(0).children().last().addClass('line')
    $(".timeline-item").eq(0).children().first().addClass('verticle-line')

    $(".timeline-item").hover(function () {
        var index = $(".timeline-item").index(this);


        $(this).addClass('white-disc');
        $(this).children().last().addClass('line')
        $(this).children().first().addClass('verticle-line')

        $('.history-description').hide()
        $('.history-description').eq(index).show()

        if (index == 0) {
            $(".timeline-item").eq(0).addClass('white-disc')
            $(".timeline-item").eq(0).children().last().addClass('line')
        } else {
            $(".timeline-item").eq(0).removeClass('white-disc')
            $(".timeline-item").eq(0).children().last().removeClass('line')
        }

    }, function () {

        $(this).removeClass('white-disc');
        $(this).children().last().removeClass('line')
        $(this).children().first().removeClass('verticle-line')
        $('.history-description').hide()
        $('.history-description').eq(0).show()

        if ($('.history-description').not(':eq(0)').is(':visible')) {
            $(".timeline-item").eq(0).removeClass('white-disc')
            $(".timeline-item").eq(0).children().last().removeClass('line')
        } else {

            $(".timeline-item").eq(0).addClass('white-disc')
            $(".timeline-item").eq(0).children().last().addClass('line')
        }
    });



})