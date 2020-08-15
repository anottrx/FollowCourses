const clockContainer = document.querySelector(".js-clock");
dayTitle = clockContainer.querySelector("h2");
clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth();
  const dates = date.getDate();
  const day = date.getDay();
  var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  dayTitle.innerText = `${year}-${month}-${dates} (${days[day]})`;

  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  // 한 자리 수일 때는 0과 함께 두 자리 수로 만들기
}

function init() {
  getTime();
  setInterval(getTime, 1000); // 초 단위로 변화
}

init();
