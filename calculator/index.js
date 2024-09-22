const display=document.getElementById("number");

function toDisplay(num){
 display.value+=num;
}
function displayClear(){
    display.value=" ";
}
 function calculate(){
    try{
    display.value=eval(display.value);
    }
    catch{
        display.value="Error"
    }

 }

