'use strict'

@@include('plugins/_slick.min.js');
@@include('_sliders.js');

const mainHeader = document.querySelector('.main-header');
const headerItems = document.querySelectorAll('.main-header__item');
const headerToogle = document.querySelector('.menu-header__toogle');
const footerItems = document.querySelectorAll('.footer__item');

window.onload = function () {
  document.addEventListener('click', documentActions);

  function documentActions(e) {
    const targetElement = e.target;

    if (targetElement.classList.contains('menu-header__toogle')) {
      mainHeader.classList.toggle('_active');
      targetElement.classList.toggle('_active');

      if (!mainHeader.classList.contains('_active')) {
        headerItems.forEach(item => {
          item.classList.remove('_active');
        });
      }
    }

    if (window.innerWidth < 1024 && targetElement.classList.contains('main-header__arrow')) {
      targetElement.closest('.main-header__item').classList.toggle('_active');
    }

    if (window.innerWidth < 1024 && targetElement.classList.contains('footer__button')) {
      targetElement.closest('.footer__item').classList.toggle('_active');
    }
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      mainHeader.classList.remove('_active');
      headerToogle.classList.remove('_active');
      headerItems.forEach(item => {
        item.classList.remove('_active');
      });
      footerItems.forEach(item => {
        item.classList.remove('_active');
      });
    }
  });
}