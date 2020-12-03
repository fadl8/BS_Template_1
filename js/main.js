$(function () {
    "use strict";
    // Deal With Navbar Movement
    $(window).scroll(function () {
        var navbar = $('.navbar');
        if($(window).scrollTop() >= navbar.height()) {
            navbar.css('opacity', '0.6');
        } else {
            navbar.css('opacity', '1');
        }
    });
    //Deal With Tabs Select
    $('.tabs-switch li').click(function () {
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $('.tabs-section .tabs-content > div').hide();
        $('.' + $(this).data('tab')).show();
    });
});
