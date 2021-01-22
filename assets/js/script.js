// define variables
var questionArray = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: {
            a: "strings",
            b: "booleans",
            c: "alerts",
            d: "numbers"
        },
        correct: "alerts"
    },
    {
        question: "To select elements within an array, we use:",
        answers: {
            a: "variables",
            b: "index",
            c: "methods",
            d: "numbers"
        },
        correct: "index"
    },
    {
        question: "The condition in an if / else statement is enclosed within:",
        answers: {
            a: "parantheses",
            b: "brackets",
            c: "opening and closing tags",
            d: "quotations"
        },
        correct: "parantheses"
    },
    {
        question: "When being assigned to variables, string values must be enclosed within:",
        answers: {
            a: "parantheses",
            b: "quotations",
            c: "curly brackets",
            d: "square brackets"
        },
        correct: "quotations"
    },
    {
        question: "A very useful tool to use during development to print data to the console is:",
        answers: {
            a: "query selectors",
            b: "relative file paths",
            c: "bootstrap",
            d: "console log"
        },
        correct: "console log"
    }
]

var welcomeEl = document.getElementById("welcome");
var questionEl = document.querySelector("#question");
var startBtn = document.querySelector("#start");
var timeEl = document.querySelector("#timer");
var questionCounter = 0;

var secondsLeft = 60;

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
        questionEl.setAttribute("style", "display: block;");
        document.getElementById("question").setAttribute("style", "display: block;")
        
        questionEl.textContent = questionArray[0].question;
        var optionA = document.getElementById("optionA");
        var optionB = document.getElementById("optionB");
        var optionC = document.getElementById("optionC");
        var optionD = document.getElementById("optionD");

        optionA.value = questionArray[questionCounter].answers.a
        optionB.value = questionArray[questionCounter].answers.b
        optionC.value = questionArray[questionCounter].answers.c
        optionD.value = questionArray[questionCounter].answers.d

        document.querySelector("label[for='optionA']").textContent = questionArray[0].answers.a

    }
}

console.log("hey, good luck! Hope you studied..");

// start button to begin quiz
startBtn.addEventListener("click", startQuiz);