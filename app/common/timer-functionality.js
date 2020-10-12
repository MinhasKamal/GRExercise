var MAX_TIME = 99*60*60;
var MIN_TIME = 1;

var fullTimeInSecond = 30*60;
var remainingTimeInSecond = fullTimeInSecond;
var isTimePlaying = false;
var isTimerHidden = false;

var timerInterval = null;

function timerHide(){
    if(!isTimerHidden){
        $(".timer-hide-icon").text("add_circle_outline");
        $(".timer-hide-text").text("Show Time");
        $(".timer-edit").css("visibility","hidden");
        $(".timer-reset").css("visibility","hidden");
        $(".timer-play-pause").css("visibility","hidden");
        $(".timer-display").css("visibility","hidden");
        isTimerHidden=true;
    }else{
        $(".timer-hide-icon").text("remove_circle_outline");
        $(".timer-hide-text").text("Hide Time");
        $(".timer-edit").css("visibility","visible");
        $(".timer-reset").css("visibility","visible");
        $(".timer-play-pause").css("visibility","visible");
        $(".timer-display").css("visibility","visible");
        isTimerHidden=false;
    }
}

function timerPlayPause() {
    if(isTimePlaying) {
        pauseTimer();
    } else {
        playTimer();
    }
}

function timerEdit() {
    var timeInMin = window.prompt("Time (min)", Math.floor(fullTimeInSecond/60));

    if (timeInMin && !isNaN(timeInMin)) {
        var time = timeInMin*60;
        if (time < MIN_TIME) {
            time = MIN_TIME;
        } else if (time > MAX_TIME) {
            time = MAX_TIME;
        }

        fullTimeInSecond = time;
        timerReset();
    }
}

function timerReset() {
    pauseTimer();
    remainingTimeInSecond = fullTimeInSecond;
    showTime();
}

function playTimer() {
    timerInterval = setInterval(decreaseSecond, 1000);

    isTimePlaying = true;
    $(".timer-play-pause").text("pause_circle_outline");
}

function pauseTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    isTimePlaying = false;
    $(".timer-play-pause").text("play_circle_outline");
}

function decreaseSecond() {
    if(remainingTimeInSecond > 0) {
        remainingTimeInSecond--;
        showTime();
    } else {
        pauseTimer();
        alert("Time is up!");
    }
}

function showTime() {
    var h = Math.floor(remainingTimeInSecond / 3600);
    var H1 = h % 10;
    var H2 = Math.floor(h / 10);

    var m = Math.floor(remainingTimeInSecond / 60) % 60;
    var M1 = m % 10;
    var M2 = Math.floor(m / 10);

    var s = remainingTimeInSecond % 60;
    var S1 = s % 10;
    var S2 = Math.floor(s / 10);

    $(".timer-display").text("" + H2+H1 + ":" + M2+M1 + ":" + S2+S1);
}