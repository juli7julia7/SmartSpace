
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
    document.documentElement.classList.toggle('menu-open');
    document.querySelector('html').classList.toggle('scroll-off');
  }
}


// Таби

const tabNavItems = document.querySelectorAll('.tabs-deals__button');
const tabItems = document.querySelectorAll('.item-tabs');

document.addEventListener('click', function (e) {
    const targetElement = e.target;
    let currentActiveIndex = null;
    let newActiveIndex = null;
    if (targetElement.closest('.tabs-deals__button')) {
        tabNavItems.forEach((tabNavItem, index) => {
            if (tabNavItem.classList.contains('active')) {
                currentActiveIndex = index;
                tabNavItem.classList.remove('active');
            }
            if (tabNavItem === targetElement) {
                newActiveIndex = index;
            }

        });
        targetElement.classList.add('active');
        tabItems[currentActiveIndex].classList.remove('active');
        tabItems[newActiveIndex].classList.add('active');
    }
})

