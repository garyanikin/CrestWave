const headerNavElMenu = document.querySelector('.header__nav-element_menu');
const dropDownMenu = document.querySelector('.drop-down-menu');
const arrow = document.querySelector('.header__link-arrow');

const headerBurger = document.querySelector('.header__burger');
const burger = document.querySelector('.burger');

function toogleMenu() {
  dropDownMenu.classList.toggle('drop-down-menu_active');

  if (dropDownMenu.classList.contains('drop-down-menu_active')) {
    arrow.src = '/coolicon-up.svg';
    headerNavElMenu.setAttribute('style', 'border-bottom: 1px solid #080E2C')
  } else {
    arrow.src = '/coolicon-down.svg';
    headerNavElMenu.removeAttribute('style', 'border-bottom: 1px solid #080E2C')
  }
}

function toggleBurger() {
  burger.classList.toggle('burger_active');

  if (burger.classList.contains('burger_active')) {
    headerBurger.src = '/close.svg'
  } else {
    headerBurger.src = '/burger.svg'
  }
}

headerNavElMenu.addEventListener('click', toogleMenu);

headerBurger.addEventListener('click', toggleBurger);