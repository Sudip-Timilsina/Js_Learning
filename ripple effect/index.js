const effect= document.querySelector("#btn")
effect.addEventListener("mousemove",(event)=>{
   const xPos= (event.pageX-effect.offsetLeft);
   const yPos=(event.pageY-effect.offsetTop);
   effect.style.setProperty("--x", xPos+ "px");
   effect.style.setProperty("--y", yPos+ "px");
})