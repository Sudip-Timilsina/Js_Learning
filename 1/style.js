var body = document.getElementsByTagName("body")[0]
function setColor(name){
    body.style.backgroundColor=name;
}
function random (){
    var red= Math.round(Math.random()*255);
    var green= Math.round(Math.random()*255);
    var blue= Math.round(Math.random()*255);
    var color= `rgb(${red},${green},${blue})`;
    body.style.backgroundColor=color;
}