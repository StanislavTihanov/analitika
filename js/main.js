
  $(function(){
//------------------------------------------------------------------------Анимация
  wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animate__animated', // default
      offset: 0,          // default
      mobile: true,       // default
      live: true        // default
    }
  )
  wow.init();
//------------------------------------------------------------------------Анимация

//------------------------------------------------------------------------Спойлеры
  $('.question__box-title',).click(function(event){
    if($('.question__block').hasClass('one')){
      $('.question__box-title').not($(this)).removeClass('active');
      $('.question__item-text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });


  $('.conditions__item-title',).click(function(event){
    if($('.conditions__box').hasClass('one')){
      $('.conditions__item-title').not($(this)).removeClass('active');
      $('.conditions__box-title').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });
  
  });
//------------------------------------------------------------------------Спойлеры

"use strict"

//------------------------------------------------------------------------Меню-Бургер

const burgerMenu = document.querySelector('.header__burger');
const menuBody= document.querySelector('.header__menu');
if(burgerMenu) {
    burgerMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      burgerMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
    });
}



//Прокрутка при клике

const menuLinks = document.querySelectorAll('.header__menu-link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
        
        if(burgerMenu.classList.contains('_active')){
          document.body.classList.remove('_lock');
          burgerMenu.classList.remove('_active');
          menuBody.classList.remove('_active');
        }
      window.scrollTo({
        top:gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}
//------------------------------------------------------------------------Меню-Бургер


$('.quality__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  responsive: [
    {
      breakpoint: 770,
      settings: {
        arrows: false
      }
    },
  ]
});


