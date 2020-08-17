function doResize() {
  if (screenWidth <= mobileWidth) {
  $('.dirrections__tabs-list').slick({
    variableWidth: true,
    appendArrows: $('.dirrections__buttons-wrapper'),
    centerMode: true
  });
  $('.dirrections__tabs-list').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $NeurologySection.removeClass("tabs-section--active");
    $MassageSection.removeClass("tabs-section--active");
    $RheumatologySection.removeClass("tabs-section--active");
  })
}
  else {
    $('.dirrections__tabs-list').slick('unslick');
  }
}

$(document).ready(function(){
  doResize();
  $(window).on('resize', doResize);
});
