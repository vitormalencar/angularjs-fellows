$('.main-nav a').on('click', function(e){
  e.preventDefault();
  var target = $($(this).attr('href'));
  $(this).addClass('actived').parent().siblings('li').find('a').removeClass('actived');
  $('body').animate({
    scrollTop: target.offset().top-120
  }, 700).removeClass('show-menu');
});

$('.burger-menu').on('click', function(e){
  e.preventDefault();
  $('body').toggleClass('show-menu');
});