$(document).ready(function(){
  $('.carousel').slick({
    autoplay:true,
    slidesToScroll:1,
    speed:4000,
    arrows:false,
    draggable:false,
    pauseOnFocus:false,
    pauseOnHover:false
  });
});

// below is copied from the code of example site //
// currently not functioning as navbar is not fixed // 
var lastScrollTop = 0;
$(window).scroll(function(){
  var scrollTop = $(this).scrollTop();
  if (scrollTop - lastScrollTop > 50){
    var navHeight = $('.navbar').css('height');
    $('.navbar').animate({top: '-' + navHeight}, 150);
    lastScrollTop = scrollTop;
  } else if (lastScrollTop - scrollTop > 50) {
    $('.navbar').animate({top: '0px'}, 150);
    lastScrollTop = scrollTop;
  }
 });
});
