const container = document.querySelector(".wrapper");
const source = document.querySelector(".source-video");
const video = document.querySelector("video");

let startX = 0;
let startY = 0;
let isCheckdown = false;

container.addEventListener("mousedown", function (event) {
    console.log("touchstart");
    startX = event.clientX;
    startY = event.clientY;
    isCheckdown = true;
});

container.addEventListener("mousemove", function (event) {
    console.log("touchmove");
    // calculate the distance moved
    const distX = event.clientX - startX;
    const distY = event.clientY - startY;

    // detect horizontal left swipe
    if (Math.abs(distX) > Math.abs(distY) && distX < -50 && isCheckdown) {
        const filename = source.src.split("/").pop();
        if (filename === "mmm.mp4") {
            source.setAttribute("src", "./videos/video.mp4");
        } else {
            source.setAttribute("src", "./videos/mmm.mp4");
        }
        video.load();
        video.play();
        isCheckdown = false;
    }
});
