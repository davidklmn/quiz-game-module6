var liEl = document.createElement("li");
liEl.textContent = localStorage.getItem(JSON.stringify(userScore));
highScoresList.appendChild(liEl);
