var question = document.querySelector(".question");
var multipleChoice = document.querySelector(".answer-list");
var option = document.querySelector(".answer");
var index = 0;
var currentQuestion;

var quiz = [
    {
      question: "Which of the following is a programming language?",
      choices: ["Boolean", "console.log", "Javascript", "Array"],
    },
    {
      question: "What 2 primary values does a Boolean represent?",
      choices: ["Top/Bottom", "Right/Left", "Even/Odd", "True/False"],
    },
    {
      question: "What syntax do developers use to denote an array?",
      choices: ["(x,y)", "[x,y]", "{x,y}", "None of the above"],
    },
    {
      question: "Which of the following are Javascript data types?",
      choices: ["String", "Boolean", "Objects", "All of the above"],
    },
    {
      question: "What does console.log() do?",
      choices: ["Outputs a message to the web console", "Deletes a function", "Creates an element", "Creates a variable"],
    },
  ];

var questionPrompts = ["Which of the following is a programming language?", "What 2 primary values does a Boolean represent?","What syntax do developers use to denote an array?","Which of the following are Javascript data types?", "What does console.log() do?",];
var choices1 = ["Boolean", "console.log", "Javascript", "Array"];
var choices2 = ["Top/Bottom", "Right/Left", "Even/Odd", "True/False"];
var choices3 = ["(x,y)", "[x,y]", "{x,y}", "None of the above"];
var choices4 = ["String", "Boolean", "Objects", "All of the above"];
var choices5 = ["Outputs a message to the web console", "Deletes a function", "Creates an element", "Creates a variable"];

function timer() {
  var sec = 75;
  var timer = setInterval(function () {
    document.querySelector(".time-left").textContent = "Time Left: " + sec;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
      window.alert("Game Over");
    }
  }, 1000);
}

function setQuizText() {
    question.textContent = questionPrompts;
    questionPrompts++;
}
option.addEventListener("click", function () {
    option.textContent = choices2;
    choices2++;
    setQuizText();
})

timer();