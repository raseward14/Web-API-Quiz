// define variables
var startBtn = document.querySelector("#start");
var timeEl = document.querySelector("#timer");
var mainEl = document.getElementById("main");
var secondsLeft = 60;

// start quiz function
function startQuiz () {
    console.log("started quiz");

    // start timer
    setTime();
    function setTime () {

        // set time interval
        var timerInterval = setInterval(function() {
            secondsLeft--;
            timeEl.textContent = "Timer: " + secondsLeft;

            // if timer hits zero, end quiz
            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                sendMessage();
                timerInterval.textContent = "Timer: " + secondsLeft;
            }
        }, 1000); // every second run this code block
    }

    sendMessage();
    function sendMessage () {
        alert("Times up! Click the start button to try again!")
    }
}

console.log("hey, good luck! Hope you studied..");

// start button to begin quiz
startBtn.addEventListener("click", startQuiz);