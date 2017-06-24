var imagess = [
  "images/DenverSkyline.jpg",
 "images/weedback.jpg",
 "images/wb.jpg",
 "images/WeedBackground.jpg",
 "images/dank5.jpg"
 ];
 //Start at Zero
 var num = 0;
//Function next() Moves Images to Next One
function next() {
 var slider = document.getElementById("slider");
 num++;
 if(num >= imagess.length) {
   num = 0;
 }
 slider.src = imagess[num];
 }
//Function prev() Moves Images to Previous One
function prev() {
 var slider = document.getElementById("slider");
 num--;
 if(num < 0) {
   num = imagess.length-1;
 }
 slider.src = imagess[num];
}
setTimeout(next, 2000);
