var nav = document.querySelector('.nav');
var navMenuBtn = document.querySelector('.nav__menu-btn');
var labelName = document.querySelector('[name=name]');
var labelWeight = document.querySelector('[name=weight]');
var labelEmail = document.querySelector('[name=email]');
var labelTel = document.querySelector('[name=Tel]');
var form = document.querySelector('.form__form');

nav.classList.remove('nav--nojs');

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if(!labelName.value) {
    evt.preventDefault();
labelName.classList.remove("input-invalide");
   labelName.offsetWidth = labelName.offsetWidth;
    labelName.classList.add("form__input--invalid");
  }
  if(!labelWeight.value) {
    evt.preventDefault();
    labelWeight.classList.add("form__input--invalid");
  }
  if(!labelEmail.value) {
    evt.preventDefault();
    labelEmail.classList.add("form__input--invalid");
  }
  if(!labelTel.value) {
    evt.preventDefault();
    labelTel.classList.add("form__input--invalid");
  }
});

navMenuBtn.addEventListener('click', function () {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
  } else {
    nav.classList.add('nav--closed');
    nav.classList.remove('nav--opened');
  }
});
