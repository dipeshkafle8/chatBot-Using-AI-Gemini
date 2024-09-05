const questions = [
    "What is JavaScript?",
    "Explain the difference between `let`, `const`, and `var`.",
    "What are closures in JavaScript?",
    "How does the event loop work in JavaScript?",
    "What is the difference between `==` and `===`?",
    "Explain the concept of promises and how they work.",
    "What is the purpose of the `this` keyword in JavaScript?",
    "How do you handle asynchronous operations in JavaScript?",
    "What are arrow functions and how do they differ from regular functions?",
    "Explain the concept of prototypal inheritance in JavaScript."
];

const question=document.getElementById("question");
const answer=document.getElementById("answer");
const submit=document.getElementById("submit");
const previous=document.getElementById("previous");
const next=document.getElementById("next");

let index=0;

const h2=document.createElement("h2");
question.append(h2);

function displayQuestionOnUI(){
    h2.innerText=`${index+1})${questions[index]}`;
    
}
function updateQuestionOnPrevious(){
    if(index==0){
        index=questions.length-1;
    }
    else{
        index--;
    }
    displayQuestionOnUI();
}
function updateQuestionOnNext(){
    if(index==questions.length-1){
        index=0;
    }
    else{
        index++;
    }
    displayQuestionOnUI();
}





submit.addEventListener('click',()=>{
    submitToTheGemini();
});

previous.addEventListener("click",()=>{
    updateQuestionOnPrevious();
})
next.addEventListener("click",()=>{
    updateQuestionOnNext();
})

displayQuestionOnUI();