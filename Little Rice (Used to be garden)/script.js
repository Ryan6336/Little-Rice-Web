//nav bar stuff
function Nav() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//the cool plant activity(ty code stacks)
let score = 0;

const options = document.querySelectorAll(".option");
const feedback = document.querySelector(".feedback");
const resetBtn = document.querySelector(".reset-btn");
const scoreDisplay = document.getElementById("scoreValue");

options.forEach(option => {
    option.addEventListener("click", () => {
        const isCorrect = option.getAttribute("data-correct") === "true";

        if (isCorrect && !option.classList.contains("correct")) {
            score++;
            option.classList.add("correct");
            feedback.textContent = "Good! (+1 point)";
        } 
        else if (!isCorrect && !option.classList.contains("wrong")) {
            score = Math.max(0, score - 1); 
            option.classList.add("wrong");
            feedback.textContent = "Yikes. (-1 point)";
        }

        scoreDisplay.textContent = score;

        option.style.pointerEvents = "none"; 
    });
});

//Act reseter
resetBtn.addEventListener("click", () => {
    options.forEach(option => {
        option.classList.remove("correct", "wrong");
        option.style.pointerEvents = "auto";
    });

    score = 0;
    scoreDisplay.textContent = score;
    feedback.textContent = "";
});