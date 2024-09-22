var content = [{
    photo: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    page: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex maiores provident vel minima velit, cupiditate qui consequuntur nam rerum totam.",
    name: "timilsina"
}
    , {
    photo: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    page: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex maiores provident vel minima velit, cupiditate qui consequuntur nam rerum totam.",
    name: "adhikari"
}
    , {
    photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    page: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex maiores provident vel minima velit, cupiditate qui consequuntur nam rerum totam.",
    name: "bhandari"
}]

const img=document.querySelector("img");
const pag=document.querySelector("p")
const na=document.querySelector("h3")
idx=0;
updateAll();
function updateAll(){
    const {photo,page,name}=content[idx];
    img.src=photo;
    na.innerText=name;
    pag.innerText=page;
    idx++;
    if(idx==content.length){
        idx=0;
    }
setTimeout(()=>{
    updateAll()
},5000)
}
