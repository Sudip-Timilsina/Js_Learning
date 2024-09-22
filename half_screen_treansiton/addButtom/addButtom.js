var can=document.querySelector("h5");
var add=document.querySelector("#add");
var count=0;
add.addEventListener("click",function(){
  if(count==0){
    can.innerHTML="Friend"
    can.style.color="green"
    add.innerHTML="Cancel Request"
    add.style.backgroundColor="red"
    
    count=1;
}
else{
    can.innerHTML="Stranger"
    can.style.color="red"
    add.innerHTML="Add Friend"
    add.style.backgroundColor="cadetblue"
    count=0;

}}
)
  