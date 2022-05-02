$(function() {
  // Smooth Animation JS
  $(".banner-read-more-info > a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      },700);
    }
  });
  $(".scroll-to-top").click(function(event) {
    event.preventDefault();
    $('html,body').animate({scrollTop: 0},4000);
  });
  // Latest and Trending Stories Section, Popular Stories Slick Slider JS
  $(".slick-slider-latest-trending-stories-home, .slick-slider-popular-stories-home").slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 1400,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
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
  // Recommended Stories Slick Slider JS
  $(".slick-slider-recommended-stories-home").slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 1400,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
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
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
  // New Stories on Kathaastu Slider JS
  $(".slick-slider-new-stories-home").slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 1400,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
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
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
  // Scroll To Top JS
  var duration = 1400;
  $(window).on('scroll', function() {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
      $(".scroll-to-top").addClass("active");
    } else {
      $(".scroll-to-top").removeClass("active");
    }
  });
});