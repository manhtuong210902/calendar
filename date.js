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
