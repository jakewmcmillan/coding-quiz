function timer() {
    var sec = 75;
    var timer = setInterval(function() {
        document.querySelector('.time-left') .textContent='Time Left:' +sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

timer()