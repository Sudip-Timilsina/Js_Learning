
var img=document.querySelector('img');
window.addEventListener("load", function() {
    console.log("Image loaded or refreshed");
img.src=`img-${Math.floor(Math.random()*6+1)}.jpg`
i


});
