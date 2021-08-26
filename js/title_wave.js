$(function() {
   $('.title_img').on('click', function() {
    $('body').addClass('scroll_on');
    $('.title_wave_pc').addClass('title_open');
   });

   $('.title_img').on('mouseover', function() {
      $('.title_wave_pc .bg_black_25').css('display', 'block');
   });

   $('.title_img').on('mouseleave', function() {
      $('.title_wave_pc .bg_black_25').css('display', 'none');
   });

});