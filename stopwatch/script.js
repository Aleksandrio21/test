const minutesBlock = document.querySelector('.minutes');
const secondsBlock = document.querySelector('.seconds');
const millisecondsBlock = document.querySelector('.milliseconds');
const btnStart = document.querySelector('.start');
const btnReset = document.querySelector('.reset');
const btnStop = document.querySelector('.stop');


let seconds = 0;
let minutes = 0;
let count = 0;
let interval;

const startTimer = () => {
    count++;
    millisecondsBlock.innerHTML = count;

    if (count <= 99) {
        millisecondsBlock.innerHTML = count;
    }
    if (count == 100) {
        millisecondsBlock.innerHTML = '00';
    }
    if (count < 10) {
        millisecondsBlock.innerHTML = '0' + count;
    }

    if (count > 99) {
        seconds++;
        secondsBlock.innerHTML = '0' + seconds;
        count = 0;
    }
    if (seconds > 9) {
        secondsBlock.innerHTML = seconds;
    }

    if (seconds > 59) {
        minutes++;
        minutesBlock.innerHTML = '0' + minutes;
        seconds = 0;
        secondsBlock.innerHTML = '0' + seconds;
    }

    if (minutes > 9) {
        minutesBlock.innerHTML = minutes;
    }
}


btnStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});

btnStop.addEventListener('click', () => {
    clearInterval(interval);
});

btnReset.addEventListener('click', () => {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    count = 0;

    minutesBlock.innerHTML = '00';
    secondsBlock.innerHTML = '00';
    millisecondsBlock.innerHTML = '00';
});

