var initialsInput = document.querySelector("#initials");
var highscoresForm = document.querySelector("#highscores-form")
var highscoresList = document.querySelector("#highscores-list");
var submitBtn = document.querySelector("#submit");
var clearBtn = document.querySelector("#clear-scores");

var highscores = [];

// initiliaze function that calls the render scores function
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


// display high score
function renderHighScores() {
    // get highscores array
    var highscores = savedHighscores();
    // sets highscores list inner html to empty
    highscoresList.innerHTML = "";
    console.log(highscores)
    // a for loop creating a highscores list
    for (let i = 0; i < highscores.length; i++) {
        //each highscore has an indes in the highscores array
        var aHighScore = document.createElement("p");
        aHighScore.textContent = highscores[i].initials + ' ' + highscores[i].score;
        aHighScore.setAttribute("data-index", i);
        aHighScore.classList.add('highscore')
        // append the list items to the highscores array
        highscoresList.prepend(aHighScore);
        // create a button to clear the highscores

    };
};


// displays object highscores as a string in local files
// function savedHighscores() {

//     localStorage.setItem("userScore", JSON.stringify(userScore)); 
// };

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
    renderHighScores();
}
