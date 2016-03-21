$('.btn-date').click(
  function(){
    var theLink = $($(this).attr('href'));
    if (theLink.hasClass('active')) {
      theLink.fadeOut(250).removeClass('active');
    } else {
      $('.active').fadeOut(250).removeClass('active');
      theLink.fadeIn(250).addClass('active');
    }
  }
)
