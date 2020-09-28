var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }
});

$("#desktop-menu").click(function(){
  $("#desktop-nav").toggle();
});

$(".decrease").click(function(){
  var value = parseInt($(this).next().val());
  if(value >0){
    value = value -1;
    $(this).next().val(value);
  }
})

$(".increase").click(function(){
  var value = parseInt($(this).prev().val());
  value = value +1;
  $(this).prev().val(value);
});

$(".more-info-pill").click(function(){
  $(".more-info-wrapper").toggle();
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 10) {
      $('.navbar').addClass("sticky colored");
  } 
  else{
      $('.navbar').removeClass("sticky colored");
  }
});