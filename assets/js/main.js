$(document).ready(function() {
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 50) {
            $(".header-full-area").removeClass("scroll-header");
        } else {
            $(".header-full-area").addClass("scroll-header");
        }
    });

    $(".hide-btn").click(function() {
        $(".navigation-item-area ul").hide('fast');
    });
    $(".hide-btn").click(function() {
        $(".hide-btn").hide('fast');
    });
    $(".hide-btn").click(function() {
        $(".show-btn").show('fast');
    });
    $(".show-btn").click(function() {
        $(".navigation-item-area ul").show('fast');
    });
    $(".show-btn").click(function() {
        $(".show-btn").hide('fast');
    });
    $(".show-btn").click(function() {
        $(".hide-btn").show('fast');
    });
});