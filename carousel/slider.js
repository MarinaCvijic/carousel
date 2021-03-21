
var imagePaths = ['./img/one.jpg', './img/two.jpg', './img/three.jpg', './img/four.jpg'];


var images = document.querySelectorAll(".slider img");

var thumbnails = document.querySelectorAll(".thumbnails img");

images.forEach(function(element, index) {
  element.setAttribute("src", imagePaths[index]);
});

thumbnails.forEach(function(element, index) {
  element.setAttribute("src", imagePaths[index]);
});


function changeImage() {
  var imagesToChange = document.querySelectorAll(".slider img");


  var currentPhoto = imagesToChange[0];
  imagesToChange[imagesToChange.length - 1].after(currentPhoto);


  var nextPhotoSrc = imagesToChange[1].getAttribute("src");

  thumbnails.forEach(function(element, index) {
    if (nextPhotoSrc == element.getAttribute("src")) {
       element.classList.add("active");
    } else {
      element.classList.remove("active");
  }
});
} 
var counter = 0;
function activeThumbnail() {
  thumbnails[counter].style.border = "none";

  if (counter < thumbnails.length - 1) {
    counter++;
  } else counter = 0;

  thumbnails[counter].style.border = "2px solid #c0c0c0";
  thumbnails[counter].style.borderRadius = "5px";
  console.log(thumbnails[0]);
}

setInterval(changeImage, 5000);
setInterval(activeThumbnail, 5000);
