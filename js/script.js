const sec = document.querySelector(".s"),
  min = document.querySelector(".m"),
  hour = document.querySelector(".h"),
  digitHour = document.querySelector(".hours"),
  digitMin = document.querySelector(".minutes");

function clock() {
  let time = new Date(),
    getMilliseconds = time.getMilliseconds(),
    getSecond = time.getSeconds(),
    getMin = time.getMinutes(),
    getHour = time.getHours();

  if (getMin < 10) {
    digitMin.innerHTML = "0" + getMin;
  } else {
    digitMin.innerHTML = getMin;
  }

  if (getHour < 10) {
    digitHour.innerHTML = "0" + getHour;
  } else {
    digitHour.innerHTML = getHour;
  }

  sec.style = ` transform: rotate(${(getSecond + getMilliseconds / 1000) / 60 * 360}deg);`;
  min.style = ` transform: rotate(${(getMin + getSecond / 100) / 60 * 360}deg);`;
  hour.style = ` transform: rotate(${(getHour + getMin / 100) / 12 * 360}deg);`;
  setTimeout(() => clock(), 1);
}
clock();

const tabsItem = document.querySelectorAll(".tabsItem");
const tabsContentItem = document.querySelectorAll(".tabsContentItem");

for (let i = 0; i < tabsItem.length; i++) {
  tabsItem[i].addEventListener("click", function () {
    for (let j = 0; j < tabsItem.length; j++) {
      tabsItem[j].classList.remove('active')
      tabsContentItem[j].classList.remove('active')
    }
    tabsItem[i].classList.add("active");
    tabsContentItem[i].classList.add("active");
  });
}

const tabsLink = document.querySelectorAll(".tabsLink");
const tabsLink__span = document.querySelectorAll(".tabsLink__span");
const stopwatch__btn = document.querySelector(".stopwatch__btn");
const stopwatch__hours = document.querySelector(".stopwatch__hours")
const stopwatch__minutes = document.querySelector(".stopwatch__minutes")
const stopwatch__seconds = document.querySelector(".stopwatch__seconds")




for (let i = 0; i < tabsContentItem.length; i++) {
  tabsContentItem[i].addEventListener("click", function () {
    for (let j = 0; j < tabsLink__span.length; j++) {
      if (i == 1) {
        tabsLink__span[j].classList.add("active")
        stopwatch__btn.innerHTML = 'stop';
        stopwatch__start()
        i++
      } else if (i == 2) {
        tabsLink__span[j].classList.add("active_clear")
        stopwatch__btn.innerHTML = 'clear';
        clearTimeout(interval)
        i++
      } else if (i == 3) {
        stopwatch__btn.innerHTML = 'start'
        stopwatch__seconds.innerHTML = 0;
        stopwatch__minutes.innerHTML = 0;
        stopwatch__hours.innerHTML = 0;
        tabsLink__span[j].classList.remove("active")
        tabsLink__span[j].classList.remove("active_clear")
        i = 0
        i++
      }
    }
  })
}

function stopwatch__start() {
  stopwatch__seconds.innerHTML++;
  if (stopwatch__seconds.innerHTML < 10) {
    stopwatch__seconds.innerHTML = 0 + stopwatch__seconds.innerHTML;
  }
  else if (stopwatch__seconds.innerHTML == 60) {
    stopwatch__seconds.innerHTML = 0;
    stopwatch__minutes.innerHTML++;
    if (stopwatch__minutes.innerHTML < 10) {
      stopwatch__minutes.innerHTML = 0 + stopwatch__minutes.innerHTML;
    }

  } else if (stopwatch__minutes.innerHTML == 60) {
    stopwatch__minutes.innerHTML = 0;
    stopwatch__hours.innerHTML++
    if (stopwatch__hours.innerHTML < 10) {
      stopwatch__hours.innerHTML = 0 + stopwatch__hours.innerHTML;
    }
  }

  interval = setTimeout(() => stopwatch__start(), 1000);
}