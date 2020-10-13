$('.slider__main').slick({
  autoplay: true,
  imfinite: true,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  asNavFor: '.slider__row',
});

$('.slider__row').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.slider__main',
  arrows: false,
  focusOnSelect: true,
});
