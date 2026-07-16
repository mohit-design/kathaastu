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

const images = document.querySelectorAll(".zoom-image");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.querySelector(".close");

images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.classList.add("show");
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("show");
});

lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
        lightbox.classList.remove("show");
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        lightbox.classList.remove("show");
    }
});