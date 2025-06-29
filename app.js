/*
let images = ["image /chicken.png", "image /egg.png", "image /chick.png","image /frontchick.png","image /leftchick.png","image /leg.png","image /roll.png"];

let current = 0;

function nextImage() {
  if (current < images.length) {
    document.getElementById("image").src = images[current];
    current++;
  }
}
function reset() {
  current = 0;
  document.getElementById("image").src = "";
}

*/


let images = ["image /chicken.png", "image /egg.png", "image /chick.png","image /frontchick.png","image /leftchick.png","image /leg.png","image /roll.png"];

let current = 0;

function nextImage() {
  if (current <= images.length) {
    document.querySelector("#image").src = images[current];
    current++;
  }
}
function reset() {
  current = 0;
  document.querySelector("#image").src = "";
}



