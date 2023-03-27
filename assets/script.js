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
        "text": "what does HTML stand for ?", 
        options: ["Handmade Toggle Meta Link", "Hypertext Markup Language" , "Hyperlink Markdown Lingo" , "Hydroclick Many Logos"],
        correct: "Hypertext Markup Language"
    }, {
        text: "What is Javascript?",
        options: ["and interface for dynamic interactions", "an interface for animations", "and applications for games specifically", "a platform to create gifs"],
        correct: "me"
    }, {
        text: "What is a loop?",
        options: [ "A method used to circulate information", "A method used to cycle through selected information", "Something you used to do as a kid", "A cowboys knot"],
        correct: "A method used to cycle through selected information"
    }
]


function startUp() {
    WinTally();
    LossTally();
}

function WinTally() {
    var countWins =localStorage.getItem("wins");
    if (countWins){
        winsSpan.textContent = countWins
    };
}

function LossTally() {
    var countLoss =localStorage.getItem("wins");
    if (countLoss){
        lossSpan.textContent = countLoss
    };
}

function loss() {
    losses++;
    localStorage.setItem('losses', losses);
    startBtn.disabled = false;
    LossTally();
}
function winner() {
    wins++;
    localStorage.setItem('wins', wins);
    startBtn.disabled = false;
    WinTally()
}


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
function showQuestion() {
    question.innerHTML = Questionaire[0].text
    for(var i = 0; i < Questionaire.length; i++) {
        const element = Questionaire[i];
    }
    }

    startBtn.addEventListener("click", function() {
        console.log("clicked");
        mainContainerEl.style.display = "block";
        showQuestion()
        timer();
        startUp();
        return;
      });
startUp();
// showing options. Use method for each.. (allows you to use increased amounts of buttons as options without error)