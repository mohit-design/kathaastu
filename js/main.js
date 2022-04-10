$(function() {
  // Mobile Burger Menu JS
  $(".burger-menu").click(function() {
    $(this).toggleClass("active");
    $("body").toggleClass("active");
    $(".bg-blur").toggleClass("active");
    $(".fixed-sidebar").toggleClass("active");
  });
});