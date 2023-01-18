var hiScore = document.getElementById("highscores");
var user = JSON.parse(localStorage.getItem("userScore"));

var liEl = document.createElement("li");
liEl.textContent = user.uInitials + " - " + user.uScore;
hiScore.appendChild(liEl);
