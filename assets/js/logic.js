var startDiv = document.getElementById("start-screen");
var endDiv = document.getElementById("end-screen");
var quiz = document.getElementById("questions");
var quizQuestion = document.getElementById("question-title");
var answers = document.getElementById("choices");
var questionButton = document.createElement("button");
var finalScore = document.getElementById("final-score");
var time = document.getElementById("time");
var questionNumber = 0;
var currentQuestion = questionObj[questionNumber];

document.getElementById("start").addEventListener("click", function () {
  displayQuestion();
  startTimer();
});

function displayQuestion() {
  quiz.className = "show";
  startDiv.className = "hide";
  var questionArr = Object.values(currentQuestion);
  quizQuestion.innerText = currentQuestion.question;

  for (i = 0; i < 4; i++) {
    var choice = document.createElement("button");
    answers.appendChild(choice);
    choice.innerText = questionArr[i];
    choice.addEventListener("click", checkChoice);
  }
}

function checkChoice(e) {
  var selected = e.target;
  if (selected.textContent === currentQuestion.correct) {
    clearCurrent();
    questionNumber++;
    displayQuestion();
  } else {
    time.innerText -= 10;
    clearCurrent();
    questionNumber++;
    displayQuestion();
  }
}

function clearCurrent() {
  questionArr = [];
  quizQuestion.innerText = " ";
}

function startTimer() {
  time.innerText = 60;
  var timerInterval = setInterval(function () {
    time.innerText--;

    if (time.innerText <= 0 || questionNumber > 5) {
      clearInterval(timerInterval);
      ending();
      localStorage.setItem("score", time.innerText);
    }
    if (time.innerText < 0) {
      time.innerText = 0;
    }
  }, 1000);
}

function ending() {
  quiz.className = "hide";
  endDiv.className = "show";
  finalScore.textContent = localStorage.getItem("score");
}
