// define variables
var startBtn = document.querySelector("#start");
var timeEl = document.querySelector("#timer");
var welcomeEl = document.getElementById("welcome");
var formEl = document.querySelector("#form")

var secondsLeft = 60;

var pEl = document.querySelector("#question");
var labelA = document.getElementById("option-a");
var labelB = document.getElementById("option-b");
var labelC = document.getElementById("option-c");
var labelD = document.getElementById("option-d");

var myScore = 0;

// start quiz function
function startQuiz () {
    console.log("started quiz");

    // start timer
    setTime();
    function setTime() {

        // set time interval
        var timerInterval = setInterval(function() {
            secondsLeft--;
            timeEl.textContent = "Timer: " + secondsLeft;
            
            // if timer hits zero, end quiz
            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                alert("Times up! Click OK to see your score.")
                timerInterval.textContent = "Timer: " + secondsLeft;
            }
            askQuestions();
        }, 1000); // every second run this code block
    }

    function askQuestions() {
        welcomeEl.setAttribute("style", "display: none;")
        formEl.setAttribute("style", "display: block")
        pEl.textContent = "Commonly used data types DO NOT include:";
        labelA.textContent = "strings";
        labelB.textContent = "booleans";
        labelC.textContent = "alerts";
        labelD.textContent = "numbers";

        if (labelC.checked) {
            myScore = myScore + 1;
        }
        
    }
}

console.log("hey, good luck! Hope you studied..");

// start button to begin quiz
startBtn.addEventListener("click", startQuiz);