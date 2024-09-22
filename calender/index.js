const year=document.getElementById("year");
const month= document.getElementById("month");
const date=document.getElementById("date");
const day=document.getElementById("day");

const time=new Date();
console.log(time);
console.log(time.getFullYear());

year.innerHTML=time.toLocaleString("en",{
    month:"long"
})
month.innerHTML=time.getFullYear();
date.innerHTML=time.getDate();
day.innerHTML=time.toLocaleString("en",{
    day:"long"
});