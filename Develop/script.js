function timer() {
  var sec = 75;
  var timer = setInterval(function () {
    document.querySelector(".time-left").textContent = "Time Left:" + sec;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
    }
  }, 1000);
}

timer();

Object = {
  question: "Question 1",
  answer: "Choice 3",
  choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
};

questions = [
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
