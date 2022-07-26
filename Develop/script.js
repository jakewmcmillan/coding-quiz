var questionEl = document.querySelector(".question");
var answersEl = document.querySelector(".answer-list");
var choicesEl = document.querySelector(".answer");

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

//Altering questions

//var carousel = document.querySelector(".question");
//var option = document.querySelector(".answer");
//var index = 0;
//var currentQuestion;
//var questions = ["Q2", "Q3", "Q4", "Q5"]
//function navigate (direction) {
    //index = index + direction
    //if (index < 0) {
        //index = questions.length -1;
    //}
    //currentQuestion = questions[index];
//}
//carousel.addEventListener("click", function() {
    //window.location.href = questions[index];
//});
//question.addEventListener("click", function(event) {
    //event.stopPropegation();
    
    //navigate(1);
//});

timer();

Object = {
  question: "Question 1",
  answer: "Choice 3",
  choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
};

var quiz = [
  {
    question: "Question 1",
    answer: "Choice 3",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
  },
  {
    question: "Question 2",
    answer: "Choice 1",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
  },
  {
    question: "Question 3",
    answer: "Choice 2",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
  },
  {
    question: "Question 4",
    answer: "Choice 3",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
  },
  {
    question: "Question 5",
    answer: "Choice 4",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
  },
];