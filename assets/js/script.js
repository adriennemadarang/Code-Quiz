// DOM elements
var startButton = document.querySelector("#start-button");
var timerEl = document.querySelector("#timer");
var submitButton = document.querySelector("#submit");
var nameEl = document.querySelector("#name");
var quizContainerEl = document.querySelector("#quiz-container");
var resultsEl = document.querySelector("#results");
var allScores = [];
var startScreenEl = document.getElementById("start-screen");
var timer;
var timeSec = 5;
var questionTracker = 0;
// set of questions
var questions = [
    {
        question: 'Commonly used data types do not include:',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: "alerts",
    },
    {
        question: "The condition in an if/else statement is enclosed within _____:",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: "curly brackets",
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables:",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes",
    },
    {
        question: "A very useful took used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log",
    },
    {
        question: "Arrays in JavaScript can be used to store _____:",
        choices: ["numbers & strings", "other arrays", "booleans", "all the above"],
        answer: "all of the above",
    }
]

function loseGame() {
    var gameOver = document.createElement("h1");
    gameOver.textContent = "Game Over";
    quizContainerEl.appendChild(gameOver);
    clearInterval(timeSec);
}

// starts timer
function startTimer() {
    timer = setInterval(function () {
        timeSec--;
        timerEl.textContent="Time left: " + timeSec+"s";
        if (timeSec <= 0) {
            clearInterval(timer);
            endQuiz()
        }
        
    }, 1000)

    
}

// start quiz
function startQuiz() {
    console.log("start quiz");
    startScreenEl.setAttribute("class", "hide");
    startTimer()
    displayQuestion()
}

// displays questions 
function displayQuestion() {
    quizContainerEl.innerHTML= "";
    var currentQuestion = questions[questionTracker]
    var questionTitle = document.createElement("h1");
    questionTitle.textContent = currentQuestion.question;
    quizContainerEl.appendChild(questionTitle);
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var answer = currentQuestion.choices[i];
        var answerButton = document.createElement("button");
        answerButton.setAttribute("value", answer);
        answerButton.textContent = answer;
        quizContainerEl.appendChild(answerButton);
    }

}

//  checks to see if answer is wrong, will subtract 15
function checkAnswer(event) {
    if (event.target.value !== questions[questionTracker].answer) {
        timeSec -= 5;
    }

    if(event.target.value === questions[questionTracker].answer){
        timeSec += 15;
    }

    questionTracker++;

    // checks to see if user is out of questions
    if(questionTracker === questions.length){
        endQuiz();
    } else{
        displayQuestion()

    }

}

function endQuiz() {
    clearInterval(timer);
    quizContainerEl.setAttribute("class", "hide");
    resultsEl.removeAttribute("class");

    var scoreEl = document.getElementById('score');
    scoreEl.textContent=timeSec;

    // timerEl.setAttribute("class","hide")
}


// function saveHighScore() {
//     var scorerName = nameEl.value.trim();
//     var highScore = JSON.parse(window.localStorage.getItem("highScore"))
// var = newScore = {
//     score: timeSec
//     scorerName: scorerName
// };
// highScore.push(newScore);
// window.localStorage.setItem("highScore", JSON.stringify(highScore));
// }


quizContainerEl.addEventListener("click", checkAnswer);
startButton.addEventListener("click", startQuiz);