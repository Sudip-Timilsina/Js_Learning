const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

window.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
        gsap.to(".scroll", {
            transform: "translateX(-200%)",
            duration: 20,
            repeat: -1,
            ease: "none", 
            pin:true
        })
        gsap.to(".scroll img", {
            rotation: 180
        })
    }
    
    else {
        gsap.to(".scroll", {
            transform: "translateX(0%)",
            duration: 20,
            repeat: -1,
            ease: "none",
            pin:true
        })
        gsap.to(".scroll img", {
            rotation: 0
        })
    }

})
