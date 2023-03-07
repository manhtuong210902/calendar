const container = document.querySelector(".wrapper");
const source = document.querySelector(".source-video");
const video = document.querySelector("video");

let startX = 0;
let startY = 0;
let isCheckdown = false;

window.onload = () => {
    video.load();
    video.play();
};

const listVideos = ["./videos/video1.mp4", "./videos/video2.mp4", "./videos/video3.mp4"];
let currentVideo = 0;
container.addEventListener(
    "touchstart",
    function (event) {
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
        isCheckdown = true;
    },
    false
);

container.addEventListener("touchmove", function (event) {
    // calculate the distance moved
    const distX = event.touches[0].clientX - startX;
    const distY = event.touches[0].clientY - startY;

    // detect horizontal left swipe
    if (Math.abs(distX) > Math.abs(distY) && distX < -50 && isCheckdown) {
        currentVideo += 1;
        if (currentVideo === listVideos.length) {
            currentVideo = 0;
        }
        source.setAttribute("src", listVideos[currentVideo]);
        video.load();
        video.play();
        isCheckdown = false;
    }
});
