import { GoogleGenerativeAI } from "@google/generative-ai";

const Questions = [
  "What is JavaScript?",
  "Explain the difference between `let`, `const`, and `var`.",
  "What are closures in JavaScript?",
  "How does the event loop work in JavaScript?",
  "What is the difference between `==` and `===`?",
  "Explain the concept of promises and how they work.",
  "What is the purpose of the `this` keyword in JavaScript?",
  "How do you handle asynchronous operations in JavaScript?",
  "What are arrow functions and how do they differ from regular functions?",
  "Explain the concept of prototypal inheritance in JavaScript.",
];

const question = document.getElementById("question");
const answer = document.getElementById("answer");
const submit = document.getElementById("submit");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const response = document.getElementById("response");

let index = 0;
const API_KEY = "AIzaSyCtG-1OI63dz-acmwk688bedTLhqiCNW2Y";
const h2 = document.createElement("h2");
question.append(h2);

function displayQuestionOnUI() {
  h2.innerText = `${index + 1})${Questions[index]}`;
}

async function submitToTheGemini() {
  let text = `${h2.innerText}\n Ans:${answer.value}`;
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt =
    text +
    "evaluate this answer according to questiond and give rating out of 10";
  let result = await model.generateContent(prompt);
  response.innerText = result.response.text();
}

function updateQuestionOnPrevious() {
  if (index == 0) {
    index = Questions.length - 1;
  } else {
    index--;
  }
  displayQuestionOnUI();
}

function updateQuestionOnNext() {
  if (index == Questions.length - 1) {
    index = 0;
  } else {
    index++;
  }
  displayQuestionOnUI();
}

submit.addEventListener("click", () => {
  submitToTheGemini();
});

previous.addEventListener("click", () => {
  updateQuestionOnPrevious();
});
next.addEventListener("click", () => {
  updateQuestionOnNext();
});

displayQuestionOnUI();
