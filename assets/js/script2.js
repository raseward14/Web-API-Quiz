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
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var optionA = document.getElementById("optionA");
var optionB = document.getElementById("optionB");
var optionC = document.getElementById("optionC");
var optionD = document.getElementById("optionD");
var answerButtonsElement = document.querySelectorAll(".btn");
var startBtn = document.getElementById("start");
var timeEl = document.querySelector("#timer");
var myScore = document.querySelector("#my-score")
var done = document.getElementById("done")
var question1 = questionArray[0];
var question2 = questionArray[2];
var question2 = questionArray[3];
var question2 = questionArray[4];
var question2 = questionArray[5];

var count = 0;
var secondsLeft = 60;

// start button to begin quiz
startBtn.addEventListener("click", startQuiz);
console.log("hey, good luck! Hope you studied..");

// start quiz function
function startQuiz() {
    console.log("started quiz");
    // start timer, hide welcome, show questions
    questionContainerEl.setAttribute("style", "display: block;");
    welcomeEl.classList.add("hide");
    setTime();
    askQuestion1();
}

function setTime() {
    // set time interval
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft;
        // if timer hits zero, end quiz
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Times up! Click OK to see your score.")
            timerInterval.textContent = "Timer: " + secondsLeft;
        }
    }, 1000); // every second run this code block
}

function askQuestion1() {
    questionEl.textContent = question1.question;
    optionA.value = question1.answers.a
    optionB.value = question1.answers.b
    optionC.value = question1.answers.c
    optionD.value = question1.answers.d

    optionA.textContent = optionA.value
    optionB.textContent = optionB.value
    optionC.textContent = optionC.value
    optionD.textContent = optionD.value

    
    optionC.addEventListener("click", function () {
        if (optionC) {
            // if user choice === correct answer, add 1 to myScore
            setCounterText();
            console.log(myScore);
            askQuestion2();  
        } else if (
            (optionA) ||
            (optionB) ||
            (optionD)
        ) {
            // subtract 5 seconds
            secondsLeft = secondsLeft - 5;
            // move to next quesion
            askQuestion2();
        }
    });
}

function askQuestion2() {
    questionEl.textContent = question2.question;
    optionA.value = question2.answers.a
    optionB.value = question2.answers.b
    optionC.value = question2.answers.c
    optionD.value = question2.answers.d

    optionA.textContent = optionA.value
    optionB.textContent = optionB.value
    optionC.textContent = optionC.value
    optionD.textContent = optionD.value

    answerButtonsElement.onclick = function() {
        if (optionC) {
            // if user choice === correct answer, add 1 to myScore
            setCounterText();
            console.log(myScore);
            askQuestion3();  
        } else if (
            (optionA) ||
            (optionB) ||
            (optionD)
        ) {
            // subtract 5 seconds
            secondsLeft = secondsLeft - 5;
            // move to next quesion
            askQuestion3();
        }
    }
}

function askQuestion3() {
    questionEl.textContent = question3.question;
    optionA.value = question3.answers.a
    optionB.value = question3.answers.b
    optionC.value = question3.answers.c
    optionD.value = question3.answers.d

    optionA.textContent = optionA.value
    optionB.textContent = optionB.value
    optionC.textContent = optionC.value
    optionD.textContent = optionD.value

    answerButtonsElement.onclick = function() {
        if (optionC) {
            // if user choice === correct answer, add 1 to myScore
            setCounterText();
            console.log(myScore);
            askQuestion4();  
        } else if (
            (optionA) ||
            (optionB) ||
            (optionD)
        ) {
            // subtract 5 seconds
            secondsLeft = secondsLeft - 5;
            // move to next quesion
            askQuestion4();
        }
    }
}

function askQuestion4() {
    questionEl.textContent = question4.question;
    optionA.value = question4.answers.a
    optionB.value = question4.answers.b
    optionC.value = question4.answers.c
    optionD.value = question4.answers.d

    optionA.textContent = optionA.value
    optionB.textContent = optionB.value
    optionC.textContent = optionC.value
    optionD.textContent = optionD.value

    answerButtonsElement.onclick = function() {
        if (optionC) {
            // if user choice === correct answer, add 1 to myScore
            setCounterText();
            console.log(myScore);
            askQuestion5();  
        } else if (
            (optionA) ||
            (optionB) ||
            (optionD)
        ) {
            // subtract 5 seconds
            secondsLeft = secondsLeft - 5;
            // move to next quesion
            askQuestion5();
        }
    }
}

function askQuestion5() {
    questionEl.textContent = question5.question;
    optionA.value = question5.answers.a
    optionB.value = question5.answers.b
    optionC.value = question5.answers.c
    optionD.value = question5.answers.d

    optionA.textContent = optionA.value
    optionB.textContent = optionB.value
    optionC.textContent = optionC.value
    optionD.textContent = optionD.value

    answerButtonsElement.onclick = function() {
        if (optionC) {
            // if user choice === correct answer, add 1 to myScore
            setCounterText();
            console.log(myScore);
            showScore;  
        } else if (
            (optionA) ||
            (optionB) ||
            (optionD)
        ) {
            // subtract 5 seconds
            secondsLeft = secondsLeft - 5;
            // move to next show score
            showScore();
        }
    }
}

function setCounterText() {
    count = + 1;
    myScore.textContent = count;
};

var submitEl = document.querySelector("#submit");
var initialsInput = document.querySelector("#initials");
var submissionResponseEl = document.querySelector("#response");

// submit your score
submitEl.addEventListener("click", showScore);

function showScore(event) {
    event.preventDefault();
    done.classList.remove("hide");
    setCounterText();
    var response = "Thank you for your submission " + initialsInput.value + "! We will reach out to you at " + ".";
    submissionResponseEl.textContent = response;
};