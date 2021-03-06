$(function() {
  // Read and Explore Stories Slick Slider JS
  $(".slick-slider-read-stories-cp, .slick-slider-explore-stories-cp").slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 1400,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });
});