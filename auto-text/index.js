const  letter=document.querySelector("#letter");
const change=['Youtuber','Gamer','Coder','Web-Developer','Freelancer','Educator'];

let letterIndex=0;
let characterIndex=0;

update();

function update(){
    characterIndex++;
    letter.innerHTML=`<h1>I Am  ${change[letterIndex].slice(0,1)==='E'?"An" : "A"} ${change[letterIndex].slice(0,characterIndex)}</h1>`
    
    setTimeout(update,400);
    if(characterIndex===change[letterIndex].length){
        characterIndex=0;
        letterIndex++;
       
    }
    if(letterIndex===change.length){
        letterIndex=0;
    }
}


