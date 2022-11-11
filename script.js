/* GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
*/

//Function to hide the home page of the quiz when the 'Play' button is clicked
/* function startQuiz() {
    var x = document.getElementsByClassName("container");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
};

startQuiz(); */

//Questions and Answers
const quizData = [
    {
        question: "Which Language runs in a Web Browser?",
        a:"Java",
        b:"Python",
        c:"C",
        d:"JavaScript",
        correct:"d",
    },
    {
        question: "What does CSS stand for?",
        a:"Central Styling Section",
        b:"Cascading Style Sheets",
        c:"Cascading Simple Sheets",
        d:"Cacti, Subarus, and Slugs",
        correct:"b",
    },
    {
        question: "Which of the following is used to create web pages?",
        a:"HTML",
        b:"C",
        c:"JVM",
        d:"DTD",
        correct:"a",
    },
    {
        question: "What is JavaScript?",
        a:"A scripting language used to make websites interactive",
        b:"An assembly language used to make websites interactive",
        c:"A compiled language to make wesbites interactive",
        d:"None of the above",
        correct:"a",
    },
    {
        question: "HTML tags are used to describe document __________.",
        a:"Definition",
        b:"Language",
        c:"Content",
        d:"None of the above",
        correct:"c",
    },
    {
        question: "Arrays in JavaScript are defined by which of the following statements?",
        a:"It is an ordered list of objects",
        b:"It is an ordered list of string",
        c:"It is an ordered list of values",
        d:"It is an ordered list of functions",
        correct:"c",
    },
    {
        question: "Which following tag is used to embed CSS in an HTML page?",
        a:"<css>",
        b:"<!DOCTYPE html>",
        c:"<script>",
        d:"<style>",
        correct:"d",
    },
    {
        question: "Which of the following is used for the largest heading in HTML?",
        a:"<head>",
        b:"<h1>",
        c:"<h6>",
        d:"<heading>",
        correct:"b",
    },
    {
        question: "How are comments written in HTML?",
        a:"</........../>",
        b:"<!..........!>",
        c:"//............",
        d:"<!...........>",
        correct:"b",
    },
    {
        question: "Which of the following CSS selectors are used to specify a group of elements?",
        a:"Tag",
        b:"id",
        c:"Class",
        d:"Both Class and Tag",
        correct:"c",
    },
    {
        question: "Which element is used for styling HTML5 Layout?",
        a:"CSS",
        b:"jQuery",
        c:"JavaScript",
        d:"PHP",
        correct:"a",
    },
    {
        question: "Which of the following CSS properties is used to make the text bold?",
        a:"text-decoration: bold",
        b:"font-weight: bold",
        c:"font-style: bold",
        d:"text-align: bold",
        correct:"b",
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let currentScore = 0;



function loadQuiz() {

    document.getElementById('homepage').classList.toggle("hidden");



    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    console.log('test');
};


function deselectAnswers() {
    answerEls.forEach(answerEls => answerEls.checked = false);
};

function getSelected() {
    let answerEls;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}