// DOM elements
var startButton = document.querySelector("start-button");
var timerEl = document.querySelector("#timer");
// var timeLeft = document.querySelector("timeLeft");
var submitButton = document.querySelector("#submit");
var nameEl = document.querySelector("#name");
var quizContainerEl = document.querySelector(".quiz")
var allScores = [];
// var savedScores = JSON.parse(localStorage.getItem)
var timeSec = 75;

// set of questions
var questions = [
{
    question: 'Commonly used data types do not include:',
    choices: [strings, booleans, alerts, numbers],
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
    question: "A very useful took used during development and debugging for printing content to the debugger is:,
    choices: ["Javascript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log",
},
{
    question: "Arrays in JavaScript can be used to store _____:",
    choices: ["numbers & strings", "other arrays", "booleans", "all the above"],
    answer: "all of the above",
}
]

startButton.addEventListener("click", startQuiz);
function startQuiz() {

}

function correction(answers) {
    if(answers) {
        alert.innerText="Correct"
        console.log("Correct")
    }
    else{
        alert.innerText="Wrong!"
        count = count -15
    timerEl.innerHTML = count
    console.log("Wrong!")
    }
    setTimeout (function() {
        alert.innerText=""}, 1000);
    }