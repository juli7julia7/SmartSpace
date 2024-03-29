
'use script';

const swiper = new Swiper('.slider-hero ', {
  // Optional parameters
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});


document.addEventListener('click', documentClick);

function documentClick(e) {
  const targetItem = e.target;

  if (targetItem.closest('.icon-menu')) {
    document.documentElement.classList.toggle('menu-open')
  }
}

