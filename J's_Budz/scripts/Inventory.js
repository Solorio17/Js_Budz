var imagesq = [
 "images/dank5.jpg",
 "images/dank9.jpg",
 "images/dank4.jpg",
 "images/dank11.jpg",
 "images/dankone.jpg",
 "images/danktwo.jpg",
 "images/dankthree.jpg"
 ];
 //Start at Zero
 var num = 0;
//Function next() Moves Images to Next One
function next() {
 var slider = document.getElementById("slider");
 num++;
 if(num >= imagesq.length) {
   num = 0;
 }
 slider.src = imagesq[num];
 }
//Function prev() Moves Images to Previous One
function prev() {
 var slider = document.getElementById("slider");
 num--;
 if(num < 0) {
   num = imagesq.length-1;
 }
 slider.src = imagesq[num];
}


var imagesx = [
 "images/dab3.jpg",
 "images/dab2.jpeg",
 "images/dab5.jpg",
 "images/dab4.jpg",
 "images/dabone.jpg",
 "images/dabtwo.jpg",
 "images/dabthree.jpg"
 ];
 //Start at Zero
 var num = 0;
//Function next() Moves Images to Next One
function nexti() {
 var slider = document.getElementById("sliders");
 num++;
 if(num >= imagesx.length) {
   num = 0;
 }
 slider.src = imagesx[num];
 }
//Function prev() Moves Images to Previous One
function previ() {
 var slider = document.getElementById("sliders");
 num--;
 if(num < 0) {
   num = imagesx.length-1;
 }
 slider.src = imagesx[num];
}


var imagesxx = [
    "images/edibles.jpg",
    "images/edible1.jpg",
    "images/edible2.jpg",
    "images/edible3.jpg",
    "images/edible4.jpg"
];
//Start at Zero
var num = 0;
//Function next() Moves Images to Next One
function nextis() {
    var slider = document.getElementById("sliderss");
    num++;
    if (num >= imagesxx.length) {
        num = 0;
    }
    slider.src = imagesxx[num];
}
//Function prev() Moves Images to Previous One
function previs() {
    var slider = document.getElementById("sliderss");
    num--;
    if (num < 0) {
        num = imagesxx.length - 1;
    }
    slider.src = imagesxx[num];
}


var imagesxxx = [
    "images/accessories.jpg",
    "images/acc1.JPG",
    "images/acc2new.jpg",
    "images/acc3.jpg",
    "images/acc4.jpg",
    "images/acc5.jpg",
    "images/acc6new.jpg"
];
//Start at Zero
var num = 0;
//Function next() Moves Images to Next One
function nextit() {
    var slider = document.getElementById("slidersss");
    num++;
    if (num >= imagesxxx.length) {
        num = 0;
    }
    slider.src = imagesxxx[num];
}
//Function prev() Moves Images to Previous One
function previt() {
    var slider = document.getElementById("slidersss");
    num--;
    if (num < 0) {
        num = imagesxxx.length - 1;
    }
    slider.src = imagesxxx[num];
}