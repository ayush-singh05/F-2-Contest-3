const timeBar = document.getElementById("hour-bar");
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const result = document.getElementById('result');
const start = document.getElementById('start');

let hoursDisplay = 0;
let minutesDisplay = 0;
let secondsDisplay = 0;

let intervalId;
let timerRunning = false;

function startTimer(duration) {
    const timerDisplay = document.getElementById('result');
    let timer = duration;

    intervalId = setInterval(function () {
        const hours = Math.floor(timer / 3600);
        const minutes = Math.floor((timer % 3600) / 60);
        const seconds = timer % 60;

        hoursDisplay = String(hours).padStart(2, '0');
        minutesDisplay = String(minutes).padStart(2, '0');
        secondsDisplay = String(seconds).padStart(2, '0');
        const res = document.getElementById('clock');

        res.innerHTML = `<div class="timer-body">
                <p>Time Left :</p>
                <p id="hour-bar" >
                <span id="hra" style="border-bottom: 2px solid white;">${hoursDisplay}</span>
                <span>:</span> 
                <span id="mna" style="border-bottom: 2px solid white;">${minutesDisplay}</span>
                <span>:</span> 
                <span id="seca"  style="border-bottom: 2px solid white;">${secondsDisplay}</span>
                </p>
                <p><button onclick="onClickDelete()" id="delete" type="submit">Delete</button></p></div>
                `
        result.appendChild(res);
        if (--timer < 0) {
            clearInterval(intervalId);
            timerRunning = false;
            document.getElementById('noTimer').innerText = '';
            res.innerText = 'Time Is Up !';
            result.style.width = '600px';
            result.style.height = '5rem';
            result.style.textAlign = 'center'
            result.style.backgroundColor = '#F0F757';
            result.style.borderRadius = '50px';
            res.style.color = '#34344A';

        }
    }, 1000);
}


start.addEventListener('click', () => {

    document.getElementById('noTimer').innerText = '';
    document.getElementById('noTimer').className = 'active';
    let hr = parseInt(hour.value), mn = parseInt(minute.value), sc = parseInt(second.value);
    let duration = hr * 3600 + mn * 60 + sc;
    startTimer(duration)
});

function onClickDelete(){
    clearInterval(intervalId);
    timerRunning = false;
    document.getElementById('clock').innerText = '';
}