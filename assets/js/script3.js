var initialsInput = document.querySelector("#initials");
var highscoresForm = document.querySelector("#highscores-form")
var highscoresList = document.querySelector("#highscores-list");
var submitBtn = document.querySelector("#submit");
var clearBtn = document.querySelector("#clear-scores");

var highscores = [];

// display high score
function renderHighScores() {

    // sets highscores to empty
    highscoresList.innerHTML = "";

    // a for loop creating a highscores list
    for (var i = 0; i < highscores.length; i++) {

        //each highscore has an indes in the highscores array
        var highscore = highscores[i];

        // txt content of high score create element
        var li = document.createElement("li");
        li.textContent = highscore;
        li.setAttribute("data-index", i);

        // append the list items to the highscores array
        highscoresList.appendChild(li);

        // create a button to clear the highscores
        
    };
};

// initiliaze function that calls the render scores function
function init() {

    // pulls the highscores from the local storage, stored high scores variable
    var storedHighScores = JSON.parse(localStorage.getItem("userScore"));

    // if no highscores, pull from stored and print to screen
    if (storedHighScores !== null) {
        highscores === storedHighScores;
    };

    // show on the screen
    renderHighScores();
};

// displays object highscores as a string in local files
function savedHighscores() {
    
    localStorage.setItem("userScore", JSON.stringify(userScore)); 
};

// submit your score to local storage on click
// submitBtn.addEventListener("click", function (event) {
//     event.preventDefault();

//     // set variables for what will be saved
//     var userScore = {
//         initials: initialsInput.value,
//         score: myScore.textContent
//     };

//     // save initials and score
//     localStorage.setItem("userScore", JSON.stringify(userScore));

//     renderHighScores();
//     saveLastScore();
// })

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
