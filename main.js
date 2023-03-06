const today = document.querySelector(".today");

function getToDay() {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();

    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    second = second < 10 ? "0" + second : second;

    let currentDay = `Ngày ${day}/${month}, ${hours}:${minutes}:${second} ${ampm}`;
    today.innerHTML = currentDay;
}

setInterval(getToDay, 1000);

let canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");
let ballLink = document.getElementById("ball");

let ball = {
    x: 200,
    y: 200,
    dx: 2,
    dy: -2,
    radius: 50,
};

function drawBall() {
    // hide the canvas element
    canvas.style.display = "none";
    // show the link element
    ballLink.style.display = "block";
    ballLink.style.left = ball.x - ball.radius + "px";
    ballLink.style.top = ball.y - ball.radius + "px";
}

function moveBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;
}

function checkCollision() {
    if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
        ball.dx = -ball.dx;
    }
    if (ball.y + ball.dy > canvas.height - ball.radius || ball.y + ball.dy < ball.radius) {
        ball.dy = -ball.dy;
    }
    ballLink.style.left = ball.x - ball.radius + "px";
    ballLink.style.top = ball.y - ball.radius + "px";
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    moveBall();
    checkCollision();
}

setInterval(draw, 10);
