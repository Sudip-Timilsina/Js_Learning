const body1=document.querySelector("body");
body1.addEventListener("mousemove",()=>{
    const xPos= event.offsetX;
    const yPos= event.offsetY;
    const span1=document.createElement("span");
    body1.appendChild(span1);
    span1.style.left=xPos +"px";
    span1.style.top=yPos +"px";
    const rSize=Math.random()*100;
    span1.style.width =rSize+"px";
    span1.style.height =rSize+"px";
    span1.style.color
    setTimeout(()=>{
        span1.remove();
    },3000)
    
    

})