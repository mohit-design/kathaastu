$(function() {
  // Mobile Burger Menu JS
  $(".burger-menu").click(function() {
    $(this).toggleClass("active");
    $("body").toggleClass("active");
    $(".bg-blur").toggleClass("active");
    $(".fixed-sidebar").toggleClass("active");
  });
  // Scroll To Top JS
  $(window).on('scroll', function() {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
      $(".scroll-to-top").addClass("active");
    } else {
      $(".scroll-to-top").removeClass("active");
    }
  });
  $(".scroll-to-top").click(function(event) {
    event.preventDefault();
    $('html,body').animate({scrollTop: 0}, 4000);
  });
  // When the user scrolls the page, Scroll width ( progress ) Increase 
  window.addEventListener("scroll", event => {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let progress = 100*scrollTop/scrollHeight;
    document.querySelector(".display-progress").style.width = progress + "%";
  });
});