var images = document.querySelector(".images");
var btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    addImages();
});

function addImages() {
    // Limit the number of images added each time to prevent infinite additions
    var maxImagesToAdd = 12 ;
    for (let i = 0; i < maxImagesToAdd; i++) {
        var photo = document.createElement("img");
        photo.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        images.appendChild(photo);
    }
    
    // Animate only the newly added images
    var newImages = document.querySelectorAll(".images img:not(.animated)");
    newImages.forEach((img) => {
        gsap.from(img, {
            scale: 0,
            duration: 1,
            rotation: 360,
            scrollTrigger: {
                trigger: img,
                start: "top 80%", // Adjust the start position as needed
                end: "top 20%", // Adjust the end position as needed
                toggleActions: "play none none reverse",
            },
            onComplete: () => {
                img.classList.add("animated"); // Mark the image as animated to prevent re-animation
            },
        });
    });
}
