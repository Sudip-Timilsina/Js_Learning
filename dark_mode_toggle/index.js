function darkMode(){
const input= document.querySelector("#input");
const body=document.querySelector("body");
input.checked = JSON.parse(localStorage.getItem("mode"));

function updateColor(){
    if(input.checked){
        body.style.background="black"
    }
    else{
        body.style.background="white"
    }
}
input.addEventListener("input",()=>{
    updateColor();
    updateLocalStorage();
})
function updateLocalStorage(){
    localStorage.setItem("mode",JSON.stringify(input.checked));
}
updateColor();
}
darkMode();
