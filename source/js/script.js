var nav = document.querySelector('.nav');
var navMenuBtn = document.querySelector('.nav__menu-btn');

nav.classList.remove('nav--nojs');

navMenuBtn.addEventListener('click', function () {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
  } else {
    nav.classList.add('nav--closed');
    nav.classList.remove('nav--opened');
  }
});
