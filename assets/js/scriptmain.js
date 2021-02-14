// define variables
var questionArray = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            { text: "strings", correct: false },
            { text: "booleans", correct: false },
            { text: "alerts", correct: true },
            { text: "numbers", correct: false }
        ]
    },
    {
        question: "To select elements within an array, we use:",
        answers: [
            { text: "variables", correct: false },
            { text: "index", correct: true },
            { text: "methods", correct: false },
            { text: "numbers", correct: false }
        ]
    },
    {
        question: "The condition in an if / else statement is enclosed within:",
        answers: [
            { text: "parantheses", correct: true },
            { text: "brackets", correct: false },
            { text: "opening and closing tags", correct: false },
            { text: "quotations", correct: false }
        ]
    },
    {
        question: "When being assigned to variables, string values must be enclosed within:",
        answers: [
            { text: "parantheses", correct: false },
            { text: "quotations", correct: true },
            { text: "curly brackets", correct: false },
            { text: "square brackets", correct: false }
        ]
    },
    {
        question: "A very useful tool to use during development to print data to the console is:",
        answers: [
            { text: "query selectors", correct: false },
            { text: "relative file paths", correct: false },
            { text: "bootstrap", correct: false },
            { text: "console log", correct: true }
        ]
    }
]

var welcomeEl = document.getElementById("welcome");
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons")
var button1 = document.querySelectorAll(".btn");
var startBtn = document.getElementById("start");
var timeEl = document.querySelector("#timer");
var myScore = document.querySelector("#my-score")
var responseEl = document.querySelector("#response");
var sortedQuestions, questionIndex, timerInterval;
var report = document.getElementById("score-container");
var count = 0;
var secondsLeft = 60;

// start button to begin quiz
startBtn.addEventListener("click", startQuiz);
console.log("hey, good luck! hope you studied..");

// rotate through question index on clicks, prompt new question
answerButtons.addEventListener("click", () => {
    // if another question exists, ask it, otherwise, end game
    if (questionIndex < 4) {
        questionIndex++;
        askQuestion();
    } else {
        return;
    };

});

// start quiz function
function startQuiz() {
    // start timer, hide welcome, show questions
    questionContainerEl.setAttribute("style", "display: block;");
    welcomeEl.classList.add("hide");
    // questions starting at index 0
    questionIndex = 0;

    // ask question and start time
    askQuestion();
    setTime();
};

function setTime() {
    // set time interval
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft;
        // if timer hits zero, end quiz, show report
        if (secondsLeft != null) {
            // keep running
            return;
        } else if (questionIndex === 4) {
            // stop the timer
        } if (secondsLeft === 0) {
            clearInterval(timerInterval);
            timerInterval.textContent = "Timer: " + secondsLeft;
            questionContainerEl.setAttribute("style", "display: none;");
            report.setAttribute("style", "display: block;");
        }

    }, 1000); // every second run this code block
}

// display a question, and reset the prior question
function askQuestion() {
    resetState();
    showQuestion(questionArray[questionIndex]);
}

// display question
function showQuestion(questionArray) {
    // text for question id
    questionEl.innerText = questionArray.question;
    // create button for each answer
    questionArray.answers.forEach(answers => {
        var button = document.createElement("button");
        // button text comes from answers array
        button.innerText = answers.text;
        // style button
        button.classList.add("btn");
        if (answers.correct) {
            button.dataset.correct = answers.correct;
        }
        // run function to see if user choice is correct
        button.addEventListener("click", chooseCorrect);
        answerButtons.appendChild(button);
    });
};

// remove previous button elements while prior buttons exhist
function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    };
};

// check to see if user choice is correct
function chooseCorrect(e) {
    // set variable for user choice and for correct answer
    var userChoice = e.target;
    var correct = userChoice.dataset.correct;
    // for each response, decrease time by 5 seconds, or increase score
    responseResult(document.body, correct);

    Array.from(answerButtons.children).forEach(button => {
    })
    // if (sortedQuestions.length > questionIndex + 1) {
    if (questionArray.length > questionIndex + 1) {
        questionContainerEl.setAttribute("style", "display: block;");
    } else {
        questionContainerEl.setAttribute("style", "display: none;");
        report.setAttribute("style", "display: block;");
    }
}

function responseResult(element, correct) {
    if (correct) {
        // increase count by 1, multiply by 20 and add %
        count++;
        myScore.textContent = count * 20 + "%";
        console.log("correct");
        responseEl.textContent = "Correct!";
    } else {
        // decrease the seconds left variable by 5 seconds
        secondsLeft -= 5;
        timerInterval.textContent = "Timer: " + secondsLeft;
        responseEl.textContent = "Wrong!";
    }
};

var initialsInput = document.querySelector("#initials");
var highscoresForm = document.querySelector("#highscores-form");
var submitBtn = document.querySelector("#submit");
var clearBtn = document.querySelector("#clear-scores");

// submit your score to local storage on click
submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    // this var is for the highscores in local storage that are strings, parse them into arrays in this function, get them
    var highscores = savedHighscores();

    // set variables for what will be saved
    var userScore = {
        initials: initialsInput.value,
        score: myScore.textContent
    };

    // push initials and score onto highscores array, and stringify highscores array in local storage
    highscores.push(userScore);
    localStorage.setItem("userScore", JSON.stringify(highscores));

    // moves to highscores page to render high scores
    window.location.href = 'highscores.html';

    renderHighScores();
})

// displays object highscores as a string in local files
function savedHighscores() {

    var highscores = localStorage.getItem("userScore");

    // if highscores exist in local storage, json parse into an array to be displayed
    if (highscores !== null) {
        highscores = JSON.parse(highscores);
    }
    // else cities array is empty
    else {
        highscores = [];
    }
    // returns highscores array for my highscores variable above
    return highscores;
};


