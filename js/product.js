$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});

const aboutAuthor = document.querySelector("#aboutAuthor");
const stickyBar = document.querySelector("#stickyBuyBar");

window.addEventListener("scroll", function () {

    const triggerPoint = aboutAuthor.offsetTop;

    if (window.scrollY >= triggerPoint) {
        stickyBar.classList.add("show");
    } else {
        stickyBar.classList.remove("show");
    }

});