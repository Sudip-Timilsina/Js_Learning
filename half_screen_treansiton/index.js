const cont=document.querySelector(".container")
const leftE1=document.querySelector(".left")
const rightE1=document.querySelector(".right")

leftE1.addEventListener("mousemove",()=>{
    cont.classList.add("active-left")
})
leftE1.addEventListener("mouseleave",()=>{
    cont.classList.remove("active-left")
})
rightE1.addEventListener("mouseover",()=>{
    cont.classList.add("active-right")
})
rightE1.addEventListener("mouseleave",()=>{
    cont.classList.remove("active-right")
})