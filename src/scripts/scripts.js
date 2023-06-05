$(document).ready(function(){

  // Shadowbox thumbs
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
  });

  // Shadowbox "close" button
  $('.close').click(function() {
    var thisDetails = $(this).closest('li');
    var thisOrder = $(this).closest('li').prop('className');

    if (thisDetails.css('display') == 'block') {
      thisDetails.fadeOut('fast');
    }

    if ($('.thumbs li').hasClass(thisOrder)) {
      $('.thumbs li').removeClass('thumb-focused');
    }
  });

  // Algins nav with top of intro
  $(function() {
    var introTop = $('.intro').offset().top;

    $('nav').css('top', introTop);
  });

  // Fixes nav on scroll
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var nav = $('nav');

    if (scroll > 160 ) {
      nav.addClass('fixed');
    } else {
      nav.removeClass('fixed');
    }
  });

  // Highlights active section in fixed nav
  const anchors = document.querySelectorAll('h2');
  const links = document.querySelectorAll('nav > ol > li');

  window.addEventListener('scroll', (event) => {
    if (typeof(anchors) != 'undefined' && anchors != null && typeof(links) != 'undefined' && links != null) {
      let scrollTop = window.scrollY;
      
      // highlight the last scrolled-to: set everything inactive first
      links.forEach((link, index) => {
        link.classList.remove("active");
      });
      
      // then iterate backwards, on the first match highlight it and break
      for (var i = anchors.length-1; i >= 0; i--) {
        if (scrollTop > anchors[i].offsetTop - 64) {
          links[i].classList.add('active');
          break;
        }
      }
    }
  });

}) // doc.ready