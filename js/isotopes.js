
var $items = $('.items').isotope({
  // options
  itemSelector: '.item',
  layoutMode: 'masonry',
  masonry: {
    columnWidth: 0.5
  }
});
var filters = $('.button-group').on('click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  // $(this).toggleClass('active');
  filters.find('.active').removeClass('active');
  $(this).addClass('active');
  $items.isotope({filter: filterValue});
});

