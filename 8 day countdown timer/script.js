const inputTime = document.getElementById("input");
const hh = document.getElementById("hours");
const mm = document.getElementById("minutes");
const ss = document.getElementById("seconds");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

let Currenttimer; // global

startBtn.addEventListener("click", () => {
  console.log("clicked me");

  let totalSeconds = parseInt(inputTime.value);

  if (isNaN(totalSeconds) || totalSeconds <= 0) {
    alert("Please enter a valid time in seconds");
    return;
  }

  clearInterval(Currenttimer); // pehle se chal raha ho to stop karo

  Currenttimer = setInterval(() => {
    totalSeconds--;

    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    hh.innerHTML = hours.toString().padStart(2, "0");
    mm.innerHTML = minutes.toString().padStart(2, "0");
    ss.innerHTML = seconds.toString().padStart(2, "0");

    if (totalSeconds <= 0) {
      clearInterval(Currenttimer);
      alert("Time’s up!");
    }
  }, 1000);

  inputTime.value = "";
});

stopBtn.addEventListener("click", () => {
  clearInterval(Currenttimer);
  alert("⏹ Timer Stopped!");
});
