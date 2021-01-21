// define variables
var startBtn = document.querySelector("#start");
var timeEl = document.querySelector("#timer");
var welcomeEl = document.getElementById("welcome");
var question1El = document.querySelector("#question1");
var question2El = document.querySelector("#question2");
var question3El = document.querySelector("#question3");
var question4El = document.querySelector("#question4");
var question5El = document.querySelector("#question5");


var secondsLeft = 60;

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
        welcomeEl.setAttribute("style", "display: none;");
        question1El.setAttribute("style", "display: block");

        if (labelC.checked) {
            myScore = myScore + 1;
            question1El.setAttribute("style", "display: none");
            question2El.setAttribute("style", "display: block");
        } else {
            secondsLeft = secondsLeft - 6;
            question1El.setAttribute("style", "display: none");
            question2El.setAttribute("style", "display: block");
        }

        if (labelC.checked) {
            myScore = myScore + 1;
            question2El.setAttribute("style", "display: none");
            question3El.setAttribute("style", "display: block");
        } else {
            secondsLeft = secondsLeft - 6;
            question2El.setAttribute("style", "display: none");
            question3El.setAttribute("style", "display: block");
        }

        if (labelC.checked) {
            myScore = myScore + 1;
            question3El.setAttribute("style", "display: none");
            question4El.setAttribute("style", "display: block");
        } else {
            secondsLeft = secondsLeft - 6;
            question3El.setAttribute("style", "display: none");
            question4El.setAttribute("style", "display: block");
        }

        if (labelC.checked) {
            myScore = myScore + 1;
            question4El.setAttribute("style", "display: none");
            question5El.setAttribute("style", "display: block");
        } else {
            secondsLeft = secondsLeft - 6;
            question4El.setAttribute("style", "display: none");
            question5El.setAttribute("style", "display: block");
        }


    }
}

console.log("hey, good luck! Hope you studied..");

// start button to begin quiz
startBtn.addEventListener("click", startQuiz);