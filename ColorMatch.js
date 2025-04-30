console.log("JavaScript file loaded!");

const colors = ["Red","Blue","Yellow","Green","Purple","Orange"];

var ActiveColor = "Red";
var CurrentScore = 0;
var HighScore = 0;

function changeTextColor(e) {
    var textElement = document.getElementById("shiftingColor");
    var randomIndex = Math.floor(Math.random() * colors.length);

    textElement.style.color = colors[randomIndex]; 
    ActiveColor = colors[randomIndex];
    document.getElementById("shiftingColor").innerText = ActiveColor;
}


function UpdateScore() {
  CurrentScore = CurrentScore + 1;
  if (CurrentScore >= HighScore) {
    HighScore = CurrentScore
  }
}

function UpdateHTML() {
  document.getElementById('CurrentScore').textContent = CurrentScore;
  document.getElementById('HighScore').textContent = HighScore;
}

function ResetScore() {
  CurrentScore = 0;
}

function KeyClick(event) {
  const keyMap = {
      'r': 'Red',
      'g': 'Green',
      'b': 'Blue',
      'o': 'Orange',
      'y': 'Yellow',
      'p': 'Purple'
  };

  // If key is mapped, trigger the button click event
  if (keyMap[event.key]) {
      document.getElementById(keyMap[event.key]).click();
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.querySelectorAll(".GridButton");

  buttons.forEach(function(button) {
      button.addEventListener("click", function() {
          let buttonId = button.id;

          // If the clicked button matches the ActiveColor
          if (buttonId === ActiveColor) {
              UpdateScore();
              UpdateHTML();
              changeTextColor(); // Change color after updating score
          } else {
              ResetScore();
              UpdateHTML(); // Update score display when reset
          }
      });
  });

  // Listen for keydown events to simulate button clicks
  document.addEventListener("keydown", KeyClick);
});