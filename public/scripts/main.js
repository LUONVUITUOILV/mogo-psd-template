"use strict";var menuToggle=document.querySelector(".header-toggle"),menuHeader=document.querySelector(".header-menu"),expandClass="is-expand";menuToggle.addEventListener("click",function(){menuHeader.classList.toggle(expandClass)}),window.addEventListener("click",function(e){menuHeader.classList.contains(e.target)||e.target.matches(".header-toggle")||menuHeader.classList.remove(expandClass)}),$(document).ready(function(){$(".quote-container").slick({prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",responsive:[{breakpoint:767,settings:{arrows:!1}}]})});