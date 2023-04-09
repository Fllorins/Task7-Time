//выбрать цитату рандом
const quoteAr = Array.from(document.getElementById('quote').children);

function activeQuote() {
  let index = Math.floor(Math.random() * quoteAr.length);
  return quoteAr[index];
}

let active = activeQuote();
document.querySelector('.date-cart__active').innerHTML = active.innerHTML;

document.querySelector('.card__btn').addEventListener('click', () => {
  let active = activeQuote();
  document.querySelector('.date-cart__active').innerHTML = active.innerHTML;
});

//date
const DateTime = luxon.DateTime;

let hour = DateTime.local().toFormat('H');
const dt = DateTime.local().setLocale('en-GB').toFormat('ZZZZ');

const fd = DateTime.fromISO(DateTime.local(), {
  locale: 'en-GB',
}).toFormat('ZZZZZ');
// console.log(fd);

const nowCycle = setInterval(function nowTime() {
  const now = DateTime.local().toFormat('t').toString();
  document.querySelector('.date-head__header').textContent = now;
}, 1000);
//time zone
document.querySelector('.date-zone__text').textContent = dt;

//good day
const pic = document.getElementById('top_good');
const pi = document.getElementById('wrapper');
const ton = document.getElementById('ton');

const textMin = {
  0: {
    textContent: 'Good night',
    style: 'background: url("../../assets/images/moon.svg") no-repeat',
    // с 12 ночи до 6',
  },
  6: {
    textContent: 'Good morning',
    style: 'background: url("../../assets/images/sun.svg") no-repeat',
    // с 6 до 10',
  },
  10: {
    textContent: 'Good afternoon',
    style: 'background: url("../../assets/images/sun.svg") no-repeat',
    // с 10 до 16',
  },
  16: {
    textContent: 'Good evening',
    style: 'background: url("../../assets/images/moon.svg") no-repeat',
    // с 16 до 22',
  },
  22: {
    textContent: 'Good night',
    style: 'background: url("../../assets/images/moon.svg") no-repeat',
  },
};

const text = {
  0: {
    textContent: 'Good night, it’s currently',
    style: 'background: url("../../assets/images/moon.svg") no-repeat',
    // с 12 ночи до 6',
  },
  6: {
    textContent: 'Good morning, it’s currently',
    style: 'background: url("../../assets/images/sun.svg") no-repeat',
    // с 6 до 10',
  },
  10: {
    textContent: 'Good afternoon, it’s currently',
    style: 'background: url("../../assets/images/sun.svg") no-repeat',
    // с 10 до 16',
  },
  16: {
    textContent: 'Good evening, it’s currently',
    style: 'background: url("../../assets/images/moon.svg") no-repeat',
    // с 16 до 22',
  },
  22: {
    textContent: 'Good night, it’s currently',
    style: 'background: url("../../assets/images/moon.svg") no-repeat',
  },
};

const image = {
  0: {
    style:
      "background: url('../../assets/images/night.jpg') no-repeat; background-size: cover",
  },
  6: {
    style:
      "background: url('../../assets/images/loch.jpg') no-repeat; background-size: cover",
    // с 6 до 10',
  },
  10: {
    style:
      "background: url('../../assets/images/loch.jpg') no-repeat; background-size: cover",

    // с 10 до 16',
  },
  16: {
    style:
      "background: url('../../assets/images/night.jpg') no-repeat; background-size: cover",
  },
  22: {
    style:
      "background: url('../../assets/images/night.jpg') no-repeat; background-size: cover",
  },
};

const tone = {
  0: {
    style: 'background: rgba(0, 0, 0, 0.75); backdrop-filter: blur(20.3871px)',
    // с 12 ночи до 6',
  },
  6: {
    style:
      'background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(20.3871px); color: #303030',
    // с 6 до 10',
  },
  10: {
    style:
      'background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(20.3871px); color: #303030',
    // с 10 до 16',
  },
  16: {
    style: 'background: rgba(0, 0, 0, 0.75); backdrop-filter: blur(20.3871px)',
    // с 16 до 22',
  },
  22: {
    style: 'background: rgba(0, 0, 0, 0.75); backdrop-filter: blur(20.3871px)',
  },
};

hour = hour >= 22 ? 22 : hour >= 16 ? 16 : hour >= 10 ? 10 : hour >= 6 ? 6 : 0;

if (window.matchMedia('screen and (max-width: 1000px)').matches) {
  pic.textContent = textMin[hour].textContent;
  pic.style = textMin[hour].style;
} else {
  pic.textContent = text[hour].textContent;
  pic.style = text[hour].style;
}

pi.style = image[hour].style;
ton.style = tone[hour].style;

//hidden
document.querySelector('.date-btn').addEventListener('click', () => {
  document.querySelector('.date-img__img').classList.toggle('active');
  document.querySelector('.hide').classList.toggle('active');
  document.querySelector('.quote').classList.toggle('active');
});

const timeZone = DateTime.local().toFormat('z').toString();
document.querySelector('.date-hidden__local-zone').textContent = timeZone;

const dayYear = DateTime.local().ordinal.toString();
document.querySelector('.date-hidden__dayofyear-zone').textContent = dayYear;

const dayWeek = DateTime.local().weekday.toString();
document.querySelector('.date-hidden__dayofweek-zone').textContent = dayWeek;

const weekNumber = DateTime.local().weekNumber.toString();
document.querySelector('.date-hidden__weeknumber-zone').textContent =
  weekNumber;

//itmeZone
