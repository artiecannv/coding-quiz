//Questions and Answers
const quizData = [
  {
    question: "Which Language runs in a Web Browser?",
    a: "Java",
    b: "Python",
    c: "C",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Styling Section",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cacti, Subarus, and Slugs",
    correct: "b",
  },
  {
    question: "Which of the following is used to create web pages?",
    a: "HTML",
    b: "C",
    c: "JVM",
    d: "DTD",
    correct: "a",
  },
  {
    question: "What is JavaScript?",
    a: "A scripting language used to make websites interactive",
    b: "An assembly language used to make websites interactive",
    c: "A compiled language to make wesbites interactive",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "HTML tags are used to describe document __________.",
    a: "Definition",
    b: "Language",
    c: "Content",
    d: "None of the above",
    correct: "c",
  },
  {
    question:
      "Arrays in JavaScript are defined by which of the following statements?",
    a: "It is an ordered list of objects",
    b: "It is an ordered list of string",
    c: "It is an ordered list of values",
    d: "It is an ordered list of functions",
    correct: "c",
  },
  {
    question: "Which following tag is used to embed CSS in an HTML page?",
    a: "<css>",
    b: "<!DOCTYPE html>",
    c: "<script>",
    d: "<style>",
    correct: "d",
  },
  {
    question: "Which of the following is used for the largest heading in HTML?",
    a: "<head>",
    b: "<h1>",
    c: "<h6>",
    d: "<heading>",
    correct: "b",
  },
  {
    question: "How are comments written in HTML?",
    a: "</........../>",
    b: "<!..........!>",
    c: "//............",
    d: "<!...........>",
    correct: "b",
  },
  {
    question:
      "Which of the following CSS selectors are used to specify a group of elements?",
    a: "Tag",
    b: "id",
    c: "Class",
    d: "Both Class and Tag",
    correct: "c",
  },
  {
    question: "Which element is used for styling HTML5 Layout?",
    a: "CSS",
    b: "jQuery",
    c: "JavaScript",
    d: "PHP",
    correct: "a",
  },
  {
    question:
      "Which of the following CSS properties is used to make the text bold?",
    a: "text-decoration: bold",
    b: "font-weight: bold",
    c: "font-style: bold",
    d: "text-align: bold",
    correct: "b",
  },
];

//Variables to change the homepage to the quiz question
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const timer = document.getElementById("timer");
const score = document.getElementById("score");

let currentQuiz = 0;
let currentScore = 0;
let timeLeft = 60;

//Function to Start the Quiz
function startQuiz() {
  quiz.style.display = "block";
  document.getElementById("homepage").classList.toggle("hidden");
  countdown();
  loadQuiz();
}

//Function to load the Quiz Questions
function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  deselectAnswers();
  console.log("test");
}

// Function to deselect all of the answers after each question
function deselectAnswers() {
  answerEls.forEach((answerEls) => (answerEls.checked = false));
}

//Function to check selected answers
function getSelected() {
  let answerEls;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

// Function that allows the submit button to be pushed
function submitAnswer() {
  let answerEls = document.getElementsByName("answer");
  let answer;
  console.log(answerEls);

  for (let i = 0; i < answerEls.length; i++) {
    if (answerEls[i].checked) {
      answer = answerEls[i].getAttribute("id");
    }
  }

  if (answer === quizData[currentQuiz].correct) {
    scoreIncrease();
  } else {
    scoreDecrease();
  }
  currentQuiz++;
  loadQuiz();
  console.log(currentScore);
}


//Timer Function
function countdown() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(timeInterval);
      endQuiz();
    } else {
      timer.textContent = timeLeft;
    }
  }, 1000);
}

//Increasing the score when answerering a question correctly
function scoreIncrease() {
  currentScore++;
  
}

//Decreasing the score when answerering a question incorrectly & changing the timer color
function scoreDecrease() {
  timeLeft -= 10;
  currentScore--;
  document.getElementById("timer").style.color = "red";

  setTimeout(function () {
    document.getElementById("timer").style.color = "rgb(15, 105, 15)";
  }, 1000)
 
}


//What is called when the timer reaches zero
function endQuiz() {
  quiz.style.display = "none";
  displayScore();
}

//Displays the score after the timer reaches zero
function displayScore() {
  score.style.display = "block";
  score.textContent = "Your score was:" + " " + (currentScore * 100);
}

function hiScores() {

}

submitBtn.addEventListener("click", submitAnswer);
