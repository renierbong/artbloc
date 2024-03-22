'use strict';

/*
 transparent to solid navbar
*/
const headerEl = document.querySelector('.header');   

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    headerEl.classList.add('header-scrolled');
  } else if (window.scrollY <= 100) {
    headerEl.classList.remove('header-scrolled');
  }
  
});


/*
 navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const menuCloseBtn = document.querySelector("[data-nav-close-btn]");
const menuOpenBtn = document.querySelector("[data-nav-open-btn]");

const elemArr = [overlay, menuCloseBtn, menuOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/*
 back to top button
 */

/* if the user scrolls down the page by 100 pixels or more the button will show */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/* 
 this for the pop out image :)
 */


// get  modal
var modal = document.getElementById("myModal");

// get image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;

}

var img = document.getElementById("myImg2");
var modalImg = document.getElementById("img01");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;

}

var img = document.getElementById("myImg3");
var modalImg = document.getElementById("img01");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;

}

var img = document.getElementById("myImg4");
var modalImg = document.getElementById("img01");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;

}

var img = document.getElementById("myImg5");
var modalImg = document.getElementById("img01");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;

}

var img = document.getElementById("myImg6");
var modalImg = document.getElementById("img01");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;

}

var img = document.getElementById("myImg7");
var modalImg = document.getElementById("img01");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;

}

var img = document.getElementById("myImg8");
var modalImg = document.getElementById("img01");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;

}

var img = document.getElementById("myImg9");
var modalImg = document.getElementById("img01");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;

}

// get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// if the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}