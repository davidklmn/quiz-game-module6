var startDiv = document.getElementById("start-screen");
var quiz = document.getElementById("questions");
var quizQuestion = document.getElementById("question-title");
var answers = document.getElementById("choices");
var questionButton = document.createElement("button");

var currentQuiz = 0;
var time = document.getElementById("time");

document.getElementById("start").addEventListener("click", startQuiz);

function startQuiz() {
  startTimer();

  quiz.className = "show";
  startDiv.style.display = "none";

  var currentQuestion = questionObj[currentQuiz];
  var questionArr = Object.values(currentQuestion);
  var button = document.createElement("button");

  quizQuestion.innerText = currentQuestion.question;

  for (i = 0; i < 4; i++) {
    var button = document.createElement("button");
    answers.appendChild(button);
    button.innerText = questionArr[i];
  }
}

function startTimer() {
  time.innerText = 60;
  var timerInterval = setInterval(function () {
    time.innerText--;

    if (time.innerText == 0) {
      clearInterval(timerInterval);
      ending();
    }
  }, 1000);
}

function ending() {}
