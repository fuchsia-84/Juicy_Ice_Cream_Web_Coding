$(function() {
    $('.nav_toggle_sp').on('click', function() {
     $('#header').toggleClass('open_nav');
    });

    $('#page_menu li a').on('click', function() {
        if ( $('#header').hasClass('open_nav') ) {
            $('#header').removeClass('open_nav');
        }
    });
 });