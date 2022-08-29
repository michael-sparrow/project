let today = new Date();

const currentDateElement = document.getElementById('currentDate');
const currentDateMinusButtonElement = document.getElementById(
  'currentDateMinusButton'
);
const currentDatePlusButtonElement = document.getElementById(
  'currentDatePlusButton'
);

currentDateElement.innerHTML = formattedDate(today);

currentDateMinusButtonElement.addEventListener('click', () => {
  let yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  today = yesterday;
  currentDateElement.innerHTML = formattedDate(today);
});

currentDatePlusButtonElement.addEventListener('click', () => {
  let tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  today = tomorrow;
  currentDateElement.innerHTML = formattedDate(today);
});

function formattedDate(date) {
  return (
    date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()
  );
}

//-----------------------------------------

const abgabenPlusButtonElement = document.getElementById('abgabenPlusButton');
const abgabenMinusButtonElement = document.getElementById('abgabenMinusButton');
const abgabenCounterElement = document.getElementById('abgabenCounter');

function increaseAbgaben() {
  abgabenCounterElement.innerHTML =
    parseInt(abgabenCounterElement.textContent) + 1;
}

function decreaseAbgaben() {
  if (parseInt(abgabenCounterElement.textContent) > 0) {
    abgabenCounterElement.innerHTML =
      parseInt(abgabenCounterElement.textContent) - 1;
  }
}

abgabenPlusButtonElement.addEventListener('click', increaseAbgaben);
abgabenMinusButtonElement.addEventListener('click', decreaseAbgaben);

//-----------------------------------------

const videoPlusButtonElement = document.getElementById('videoPlusButton');
const videoMinusButtonElement = document.getElementById('videoMinusButton');
const videoCounterElement = document.getElementById('videoCounter');

function increaseVideo() {
  videoCounterElement.innerHTML = parseInt(videoCounterElement.textContent) + 1;
}

function decreaseVideo() {
  if (parseInt(videoCounterElement.textContent) > 0) {
    videoCounterElement.innerHTML =
      parseInt(videoCounterElement.textContent) - 1;
  }
}

videoPlusButtonElement.addEventListener('click', increaseVideo);
videoMinusButtonElement.addEventListener('click', decreaseVideo);
