$(document).ready(function() {
  // Story Accordion JS
  $('.tab-listing > li > a').click(function(event){
    event.preventDefault();
    var active_tab_selector = $('.tab-listing > li.active > a').attr('href');
    var actived_nav = $('.tab-listing > li.active');
    actived_nav.removeClass('active');
    $(this).parents('li').addClass('active');
    $(active_tab_selector).removeClass('active');
    $(active_tab_selector).addClass('hide');
    var target_tab_selector = $(this).attr('href');
    $(target_tab_selector).removeClass('hide');
    $(target_tab_selector).addClass('active');
  });
  $(".accordion-1 > div").hide();
  $(".accordion-1 > h4").click(function() {
    $(this).next("div").slideToggle("slow").siblings("div:visible").slideUp("slow");
    $(this).toggleClass("active");
    $(this).siblings("h4").removeClass("active");
  });
  // Custom Select Dropdown JS
  const select = document.querySelectorAll('.selectBtn');
  const option = document.querySelectorAll('.option');
  let index = 1;
  select.forEach(a => {
    a.addEventListener('click', b => {
      const next = b.target.nextElementSibling;
      next.classList.toggle('toggle');
      next.style.zIndex = index++;
    })
  })
  option.forEach(a => {
    a.addEventListener('click', b => {
      b.target.parentElement.classList.remove('toggle');
      const parent = b.target.closest('.select').children[0];
      parent.setAttribute('data-type', b.target.getAttribute('data-type'));
      parent.innerText = b.target.innerText;
    })
  });
});