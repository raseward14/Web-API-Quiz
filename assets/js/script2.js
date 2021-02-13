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
    if (questionIndex < questionArray.length) {
        questionIndex++;
        askQuestion();
        console.log(questionArray.length)
    } else {
        stopPropagation();
    };

});

// start quiz function
function startQuiz() {
    console.log("started quiz");
    // start timer, hide welcome, show questions
    questionContainerEl.setAttribute("style", "display: block;");
    welcomeEl.classList.add("hide");

    // random questions starting at index 0
    questionIndex = 0;

    // ask question and start time
    askQuestion();
    setTime();

}

function setTime() {
    // set time interval
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft;
        // if timer hits zero, end quiz, show report
        if (secondsLeft != null) {
            // keep running
        } else if (condition) {
            
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
    })
}

// remove previous button elements while prior buttons exhist
function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
    console.log(questionIndex);
}

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

function stopPropagation(e) {
    e.stopPropagation();
};

var initialsInput = document.querySelector("#initials");
var highscoresForm = document.querySelector("#highscores-form")
var highscoresList = document.querySelector("#highscores-list");
var submitBtn = document.querySelector("#submit");
var clearBtn = document.querySelector("#clear-scores");

var highscores = [];

// display high score
// function renderHighScores() {

//     // sets highscores to empty
//     highscoresList.innerHTML = "";

//     // a for loop creating a highscores list
//     for (var i = 0; i < highscores.length; i++) {

//         //each highscore has an indes in the highscores array
//         var highscore = highscores[i];

//         // txt content of high score create element
//         var li = document.createElement("li");
//         li.textContent = highscore;
//         li.setAttribute("data-index", i);

//         // append the list items to the highscores array
//         highscoresList.appendChild(li);

//         // create a button to clear the highscores

//     };
// };

// initiliaze function that calls the render scores function
function init() {

    // pulls the highscores from the local storage, stored high scores variable
    var storedHighScores = JSON.parse(localStorage.getItem("userScore"));

    // if no highscores, pull from stored and print to screen
    if (storedHighScores !== null) {
        highscores === storedHighScores;
    };

    // show on the screen
    // renderHighScores();
};

// displays object highscores as a string in local files
function savedHighscores() {

    localStorage.setItem("userScore", JSON.stringify(userScore));
};

// submit your score to local storage on click
submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    // set variables for what will be saved
    var userScore = {
        initials: initialsInput.value,
        score: myScore.textContent
    };

    // save initials and score
    localStorage.setItem("userScore", JSON.stringify(userScore));

    window.location.href = 'highscores.html'

    renderHighScores();
    saveLastScore();
})

// clearBtn.addEventListener("click", function (event) {

//     if (true) {

//         for (let index = 0; index < highscores.length; index++) {
//             highscores.splice(index[i]);
//         }

//     };

// })

window.onload = function () {
    init();
}

