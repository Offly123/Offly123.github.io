$(document).ready(function() {
  $('.my-gallery').slick({
    dots: true,
    centerMode: true,
    slidesToShow: 3,
    centerPadding: '5px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: true,
        }
      }
    ]
  });
});