var nav=document.querySelector(".nav"),iframe=document.querySelector(".contacts__map-iframe"),navMenuBtn=document.querySelector(".nav__menu-btn"),labelName=document.querySelector("[name=name]"),labelWeight=document.querySelector("[name=weight]"),labelEmail=document.querySelector("[name=email]"),labelTel=document.querySelector("[name=tel]"),form=document.querySelector(".form__form");nav.classList.remove("nav--nojs"),iframe.classList.remove("contacts__map-iframe--nojs"),navMenuBtn.addEventListener("click",function(){nav.classList.contains("nav--closed")?(nav.classList.remove("nav--closed"),nav.classList.add("nav--opened")):(nav.classList.add("nav--closed"),nav.classList.remove("nav--opened"))}),form.addEventListener("submit",function(e){e.preventDefault(),labelName.value||labelName.classList.add("form__input--invalid"),labelWeight.value||labelWeight.classList.add("form__input--invalid"),labelEmail.value||labelEmail.classList.add("form__input--invalid"),labelTel.value||labelTel.classList.add("form__input--invalid")});