
var scoresEl = document.getElementById('scores');

function showScores() {
    console.log('hello')
    var highScore = JSON.parse(window.localStorage.getItem("highScore"));
    if (highScore === null) {
        highScore = [];
    }

    highScore.sort(function (a, b) {
        return b.score - a.score
    })

    for (var index = 0; index < highScore.length; index++) {
        var savedScore = highScore[index];
        // creates new 'li' element
        var liScore = document.createElement('li');
        // adds text to the new 'li' element
        liScore.textContent = savedScore.name + ': ' + savedScore.score;
        //adds new score to web page
        scoresEl.appendChild(liScore);
    }
}

showScores()