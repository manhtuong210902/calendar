const today = document.querySelector(".today");

function getToDay() {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let hours = date.getHours();
    let minutes = date.getMinutes();

    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;

    let currentDay = `Ngày ${day}/${month}, ${hours}:${minutes} ${ampm}`;
    return currentDay;
}

today.innerText = getToDay();
