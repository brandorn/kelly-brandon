$(document).ready(function(){
  $('.thumbs li').click(function() {
  var thumbClass = $(this).attr('class');
  
  $('.details li').not('.' + thumbClass).css('display','none');
  $('.thumbs li').not('.' + thumbClass).removeClass('thumb-default, thumb-focused');
  
  if($('.details li').hasClass(thumbClass) && $('.details li.' + thumbClass).css('display') == 'block'){
      $('.details li').fadeOut('fast');
      $('.thumbs li').addClass('thumb-default');
    } else {
      $('.details li.' + thumbClass).fadeIn('fast').css('display','block');
      $('.thumbs li.' + thumbClass).addClass('thumb-focused');
      $('html,body').animate({
          scrollTop: $(this).offset().top - 20
      });
    }
  })

  $('.close').click(function() {
    var thisDetails = $(this).closest('li');
    var thisOrder = $(this).closest('li').prop('className');

    if (thisDetails.css('display') == 'block') {
      thisDetails.fadeOut('fast');
    }

    if ($('.thumbs li').hasClass(thisOrder)) {
      $('.thumbs li').removeClass('thumb-focused');
    }

  })

});