var highscoresList = document.querySelector("#highscores-list");
var clearBtn = document.querySelector("#clear-scores");

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

clearBtn.addEventListener("click", function() {
    console.log(highscores)

    // set highscores list to null clearing out all scores
    highscoresList.innerHTML = null;

    // also need to clear the array
    var highscores = savedHighscores();
    if (highscores !== null) {
        localStorage.clear();
    } else {
        highscores = [];
    }

})

window.onload = function () {
    renderHighScores();
}
