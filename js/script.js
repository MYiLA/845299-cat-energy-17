var nav=document.querySelector(".nav"),navMenuBtn=document.querySelector(".nav__menu-btn"),labelName=document.querySelector("[name=name]"),labelWeight=document.querySelector("[name=weight]"),labelEmail=document.querySelector("[name=email]"),labelTel=document.querySelector("[name=Tel]"),form=document.querySelector(".form__form");nav.classList.remove("nav--nojs"),form.addEventListener("submit",function(e){e.preventDefault(),labelName.value||(e.preventDefault(),labelName.classList.remove("input-invalide"),labelName.offsetWidth=labelName.offsetWidth,labelName.classList.add("form__input--invalid")),labelWeight.value||(e.preventDefault(),labelWeight.classList.add("form__input--invalid")),labelEmail.value||(e.preventDefault(),labelEmail.classList.add("form__input--invalid")),labelTel.value||(e.preventDefault(),labelTel.classList.add("form__input--invalid"))}),navMenuBtn.addEventListener("click",function(){nav.classList.contains("nav--closed")?(nav.classList.remove("nav--closed"),nav.classList.add("nav--opened")):(nav.classList.add("nav--closed"),nav.classList.remove("nav--opened"))});