var min = 0;
var sec = 0;
var msec = 0;

var getMin = document.getElementById('min');
var getSec = document.getElementById('sec');
var getMsec = document.getElementById('msec');

var interval;

function timer() {
    msec++;
    getMsec.innerHTML = msec;

    if (msec >= 99) {
        msec = 0;
        getMsec.innerHTML = msec;
        sec++;
        getSec.innerHTML = sec;
    } else if (sec >= 60) {
        sec = 0;
        getSec.innerHTML = sec;
        min++;
        getMin.innerHTML = min;
    }
}

function start() {
    interval = setInterval(timer, 10);

    document.getElementById('min').classList.remove('blinking');
    document.getElementById('sec').classList.remove('blinking');
    document.getElementById('msec').classList.remove('blinking');

    document.getElementById('start').disabled = true;
    document.getElementById('pause').disabled = false;
}

function pause() {
    clearInterval(interval);

    document.getElementById('min').classList.add('blinking');
    document.getElementById('sec').classList.add('blinking');
    document.getElementById('msec').classList.add('blinking');

    document.getElementById('start').disabled = false;
    document.getElementById('pause').disabled = true;
}

function reset() {
    clearInterval(interval)

    document.getElementById('min').classList.remove('blinking');
    document.getElementById('sec').classList.remove('blinking');
    document.getElementById('msec').classList.remove('blinking');

    min = 0;
    sec = 0;
    msec = 0;
    getMin.innerHTML = min;
    getSec.innerHTML = sec;
    getMsec.innerHTML = msec;

    document.getElementById('start').disabled = false;
    document.getElementById('pause').disabled = false;
}