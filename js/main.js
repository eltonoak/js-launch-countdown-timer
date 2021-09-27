//Time to launch 14 Days ins seconds
let timeToLaunch = 1209600;

let days = document.querySelector(".days span");
let hours = document.querySelector('.hours span');
let minutes = document.querySelector('.minutes span');
let seconds = document.querySelector('.seconds span');


window.setInterval(countdown, 1000);
window.clearInterval(countdown, 1000);

function countdown() {
  days.textContent = parseInt((timeToLaunch / 86400));
  hours.textContent = parseInt((timeToLaunch % 86400) / 3600);
  minutes.textContent = parseInt(((timeToLaunch % 86400) % 3600) / 60);
  seconds.textContent = ((timeToLaunch % 86400) % 3600) % 60;
  if (timeToLaunch > 0)
    timeToLaunch -= 1;
}