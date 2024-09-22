function update(){

const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("second");
const ampm1 = document.getElementById("ampm");
updateTime()
function updateTime() {
    let h = new Date().getHours();

    let m = new Date().getMinutes();
    
    let s = new Date().getSeconds();
    
    let ampm = "AM"
    if (h > 12) {
        h = h - 12;
        ampm = "PM"

    }
    h= h <10 ? "0"+h:h
    m= m <10 ? "0"+m:m
    s= s <10 ? "0"+s:s
    hours.innerText = h;
    minutes.innerText = m;
    second.innerText = s;
    ampm1.innerHTML = ampm;
    setTimeout(() => {
        updateTime();
    }, 1000);

}}

update()
