var startBtn = document.getElementById("start-btn");
var timerEl = document.getElementById("time-left");
var mainContainerEl = document.getElementById("main_container");
var question = document.getElementById("questiontext");
var answerContainer = document.getElementById("answers_container");
var winsSpan = document.getElementById("Win-span");
var LossSpan = document.getElementById("loss-span");



mainContainerEl.style.display = "none";

var seconds = 10;
var wins = 0;
var losses = 0;
var Questionaire = [
    {
        text: "What does HTML stand for ?", 
        alternative: ["Handmade Toggle Meta Link", "Hypertext Markup Language" , "Hyperlink Markdown Lingo" , "Hydroclick Many Logos"],
        correct: 1
    }, {
        text: "What is Javascript?",
        alternative: ["an interface for dynamic interactions", "an interface for animations", "and applications for games specifically", "a platform to create gifs"],
        correct: 0
    }, {
        text: "What is a loop?",
        alternative: [ "A method used to circulate information", "A method used to cycle through selected information", "Something you used to do as a kid", "A cowboys knot"],
        correct: 1
    }
]

startBtn.addEventListener("click", function() {
    console.log("clicked");
    mainContainerEl.style.display = "block";
    //showQuestion()
    timer();
  });

// adds to loss collumn and disables start button
function loss() {
    losses++;
    localStorage.setItem('losses', losses);
    startBtn.disabled = false;
    LossTally();
}

// Timer built to stop at zero and call loss function if it reaches zero
function timer() {
    var setUp = setInterval(function() {
      timerEl.innerHTML = seconds;
      seconds--;
      if (seconds <= -1) {
        clearInterval(setUp);
        loss();
      }
    }, 1000);
  }





function LossTally() {
    var countLoss =localStorage.getItem("wins");
    if (countLoss){
        lossSpan.textContent = countLoss
    };
}
// adds win to win collumn and disables start button 
function winner() {
    wins++;
    localStorage.setItem('wins', wins);
    startBtn.disabled = false;
    WinTally()
}

function WinTally() {
    var countWins =localStorage.getItem("wins");
    if (countWins){
        winsSpan.textContent = countWins
    };
}

//function showQuestion() {
   // question.innerHTML = Questionaire[0].text}


   

// showing options. Use method for each.. (allows you to use increased amounts of buttons as options without error)