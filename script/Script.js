const menutop= document.getElementById("menutop");
const cancleicon=document.getElementById("cancleicon");
const menuicon= document.getElementById("menuicon");
const prevbtn=document.getElementById("prev-btn");
const prevbtn1=document.getElementById("prev-btn1");
const nextbtn=document.getElementById("next-btn");
const nextbtn1=document.getElementById("next-btn1")
function menudisplay(){
  menutop.style.display="block";
  cancleicon.style.display="block";
  menuicon.style.display="none";

  prevbtn.style.display="none";
  prevbtn1.style.display="none";
  nextbtn.style.display="none";
  nextbtn1.style.display="none";
}
function menuhide(){
  menutop.style.display="none";
  cancleicon.style.display="none";
  menuicon.style.display="block"
  prevbtn.style.display="inline";
  prevbtn1.style.display="inline";
  nextbtn.style.display="inline";
  nextbtn1.style.display="inline";
}
function homemenu(){
menutop.style.display="none";
cancleicon.style.display="none";
menuicon.style.display="block"
prevbtn.style.display="inline";
  prevbtn1.style.display="inline";
  nextbtn.style.display="inline";
  nextbtn1.style.display="inline";
}

// cursol
let slideindex = 1;
showslides(slideindex);
function plusSlides(n) {
showslides((slideindex += n));
}
function currentSlide(n) {
showslides((slideindex = n));
}
function showslides(n) {
let i;
let slides = document.getElementsByClassName("myproject");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) {
  slideindex = 1;
}
if (n < 1) {
  slideindex = slides.length;
}
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideindex - 1].style.display = "block";
dots[slideindex - 1].className +=" active";
}


let slideindex1 = 1;
viewlides(slideindex1);
function addSlides(n) {
viewlides((slideindex1 += n));
}
function newSlide(n) {
viewlides((slideindex1 = n));
}
function viewlides(n) {
let i;
let slides = document.getElementsByClassName("myproject2");
let dots = document.getElementsByClassName("dot1");
if (n > slides.length) {
  slideindex1 = 1;
}
if (n < 1) {
  slideindex1 = slides.length;
}
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active1", "");
}
slides[slideindex1 - 1].style.display = "block";
dots[slideindex1 - 1].className +=" active1";
}

