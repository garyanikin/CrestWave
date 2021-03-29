const headerNavElMenu = document.querySelector('.header__nav-element_menu');
const dropDownMenu = document.querySelector('.drop-down-menu');
const arrow = document.querySelector('.header__link-arrow');

function toogleMenu() {
  dropDownMenu.classList.toggle('drop-down-menu_active');

  if (dropDownMenu.classList.contains('drop-down-menu_active')) {
    arrow.src = '/images/coolicon-up.svg';
    headerNavElMenu.setAttribute('style', 'border-bottom: 1px solid #080E2C')
  } else {
    arrow.src = '/images/coolicon-down.svg';
    headerNavElMenu.removeAttribute('style', 'border-bottom: 1px solid #080E2C')
  }
}

headerNavElMenu.addEventListener('click', toogleMenu);