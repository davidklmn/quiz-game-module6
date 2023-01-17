// Variables
var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questionDiv = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var endScreen = document.getElementById("end-screen");
var choices = document.getElementById("choices");
var finalScore = document.getElementById("final-score");
var initials = document.getElementById("initials");
var scoreSubmit = document.getElementById("submit");
var messageDiv = document.getElementById("feedback");
var currentQuestion;
var questionIndex = 0;
// Click licstener for start button which starts the quiz game
startButton.addEventListener("click", startQuiz);
// Function to start the quiz game
function startQuiz() {
  startScreen.className = "hide";
  questionDiv.className = "show";
  nextQuestion();
  startTimer();
}
// Function for showing next question
function nextQuestion() {
  clearQuestion();
  currentQuestion = questionObj[questionIndex];
  showQuestion(currentQuestion);
}
function showQuestion(question) {
  questionTitle.innerText = question.question;
  for (i = 0; i < currentQuestion.answers.length; i++) {
    var button = document.createElement("button");
    button.innerText = currentQuestion.answers[i];
    choices.appendChild(button);
    button.addEventListener("click", selectedAnswer);
  }
}
// Function resets the question and clears the questionDiv
function clearQuestion() {
  questionTitle.innerText = " ";
  while (choices.firstChild) {
    choices.removeChild(choices.firstChild);
  }
}

// Function for checking the answer if its correct or not
function selectedAnswer(e) {
  if (questionIndex >= 4 || time.innerText == 0) {
    ending();
    return;
  } else {
    var selectedButton = e.target;
    if (selectedButton.textContent === currentQuestion.correct) {
      correctAnswer();
    } else {
      incorrectAnswer();
    }
  }
}
// If the answer is correct
function correctAnswer() {
  clearQuestion();
  questionIndex++;
  nextQuestion();
}
// If the answer is incorrect
function incorrectAnswer() {
  time.innerText -= 15;
  clearQuestion();
  questionIndex++;
  nextQuestion();
}
// Timer function
function startTimer() {
  time.innerText = 60;
  var timerInterval = setInterval(function () {
    time.innerText--;

    if (time.innerText <= 0) {
      clearInterval(timerInterval);
      time.innerText = 0;
      localStorage.setItem("score", time.innerText);
      ending();
    }
  }, 1000);
}
// User score

//Game ending
function ending() {
  clearQuestion();
  endScreen.className = "show";
  clearInterval();
  localStorage.setItem("score", time.innerText);
  finalScore.innerText = localStorage.getItem("score");
}
//Storing highscore
submit.addEventListener("click", function (event) {
  event.preventDefault();
  var userScore = {
    uInitials: initials.value,
    uScore: localStorage.getItem("score"),
  };
  if (initials === "") {
    displayMessage("error", "Initials cannot be blank");
  } else if (initials.length > 3) {
    displayMessage("error", "Initials cannot be longer than 3 character");
  } else {
    displayMessage("succes", "Score sotred");
    localStorage.setItem("userScore", JSON.stringify(userScore));
  }
});
// Message function
function displayMessage(type, message) {
  messageDiv.textContent = message;
  messageDiv.setAttribute("class", type);
}
