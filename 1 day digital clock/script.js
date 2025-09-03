const clock = document.querySelector('.clock');

function getClock() {
    const data = new Date();

    let hours = data.getHours();
    let mints = data.getMinutes();
    let second = data.getSeconds();

    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? "0" + hours : hours;
    mints = mints < 10 ? "0" + mints : mints;
    second = second < 10 ? "0" + second : second;

    clock.textContent = `${hours}: ${mints}: ${second} ${ampm}`

};
setInterval(getClock, 1000);
getClock();
