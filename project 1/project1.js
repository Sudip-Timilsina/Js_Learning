let count=0;
document.getElementById("b1").onclick=function(){
    count++;
    document.getElementById("p1").innerHTML=count;

}
document.getElementById("b2").onclick=function(){
    count--;
    document.getElementById("p1").innerHTML=count;
    
}
document.getElementById("r1").onclick=function(){
    count=0;
    document.getElementById("p1").innerHTML=count;
}