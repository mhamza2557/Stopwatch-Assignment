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
        sec++;
        getSec.innerHTML = sec;
        msec = -1;
    } else if (sec >= 59) {
        sec = -1;
        min++;
        getMin.innerHTML = min;
    }
}

function start() {
    interval = setInterval(timer, 10);
    document.getElementById('start').disabled = true;
    document.getElementById('pause').disabled = false;
}

function pause() {
    clearInterval(interval);
    document.getElementById('start').disabled = false;
    document.getElementById('pause').disabled = true;
}

function reset() {
    clearInterval(interval)
    min = 0;
    sec = 0;
    msec = 0;
    getMin.innerHTML = min;
    getSec.innerHTML = sec;
    getMsec.innerHTML = msec;

    document.getElementById('start').disabled = false;
    document.getElementById('pause').disabled = false;
}