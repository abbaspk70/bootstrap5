var $navlinks = $('.navbar-nav').on('click', 'a', function() {
    
    $navlinks.find('.active').removeClass('active');
    $(this).addClass('active');
   
  });
  