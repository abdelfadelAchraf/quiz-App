const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "HyperText Markup Language", correct: true },
            { text: "Hyper Tool Markup Language", correct: false },
            { text: "Home Tool Markup Language", correct: false },
            { text: "Hyperlinks Text Markup Language", correct: false },
        ]
    },
  
    {
        question: "What is CSS used for?",
        answers: [
            { text: "Styling web pages", correct: true },
            { text: "Structuring web content", correct: false },
            { text: "Making web pages interactive", correct: false },
            { text: "Hosting web pages", correct: false },
        ]
    },
    {
        question: "Which of the following is a JavaScript framework?",
        answers: [
            { text: "Laravel", correct: false },
            { text: "Django", correct: false },
            { text: "React", correct: true },
            { text: "Flask", correct: false },
        ]
    },
    {
        question: "Which of the following is NOT a programming language?",
        answers: [
            { text: "Python", correct: false },
            { text: "JavaScript", correct: false },
            { text: "HTML", correct: true },
            { text: "C++", correct: false },
        ]
    },
    {
        question: "In JavaScript, which symbol is used for comments?",
        answers: [
            { text: "//", correct: true },
            { text: "#", correct: false },
            { text: "/* */", correct: false },
            { text: "$ $", correct: false },
        ]
    },
    {
        question: "What is the correct way to create a function in JavaScript?",
        answers: [
            { text: "function = myFunction()", correct: false },
            { text: "function myFunction()", correct: true },
            { text: "def myFunction()", correct: false },
            { text: "func myFunction()", correct: false },
        ]
    },
    {
        question: "Which HTML tag is used to define an unordered list?",
        answers: [
            { text: "&lt;ul&gt;", correct: true },
            { text: "&lt;ol&gt;", correct: false },
            { text: "&lt;li&gt;", correct: false },
            { text: "&lt;list&gt;", correct: false },
        ]
    },
    
    {
        question: "What does API stand for?",
        answers: [
            { text: "Application Programming Interface", correct: true },
            { text: "Advanced Programming Interface", correct: false },
            { text: "Applied Programming Instructions", correct: false },
            { text: "Application Process Integration", correct: false },
        ]
    },
    {
        question: "Which of the following is used for version control?",
        answers: [
            { text: "Git", correct: true },
            { text: "Node.js", correct: false },
            { text: "SQL", correct: false },
            { text: "React", correct: false },
        ]
    },
    {
        question: "Which HTTP method is used to retrieve data from a server?",
        answers: [
            { text: "POST", correct: false },
            { text: "PUT", correct: false },
            { text: "GET", correct: true },
            { text: "DELETE", correct: false },
        ]
    },
    {
        question: "Which company developed JavaScript?",
        answers: [
            { text: "Microsoft", correct: false },
            { text: "Mozilla", correct: false },
            { text: "Netscape", correct: true },
            { text: "Google", correct: false },
        ]
    },
    {
        question: "Which CSS property is used to change the background color of an element?",
        answers: [
            { text: "color", correct: false },
            { text: "background-color", correct: true },
            { text: "bgcolor", correct: false },
            { text: "background", correct: false },
        ]
    },
    {
        question: "What does SQL stand for?",
        answers: [
            { text: "Structured Query Language", correct: true },
            { text: "Sequential Query Language", correct: false },
            { text: "Server Query Language", correct: false },
            { text: "Simple Query Language", correct: false },
        ]
    },
    {
        question: "What does the 'C' in CSS stand for?",
        answers: [
            { text: "Cascading", correct: true },
            { text: "Creative", correct: false },
            { text: "Computer", correct: false },
            { text: "Central", correct: false },
        ]
    },
    {
        question: "In which year was JavaScript created?",
        answers: [
            { text: "1990", correct: false },
            { text: "1995", correct: true },
            { text: "2000", correct: false },
            { text: "2005", correct: false },
        ]
    },
    {
        question: "Which of the following is a backend technology?",
        answers: [
            { text: "Angular", correct: false },
            { text: "Node.js", correct: true },
            { text: "React", correct: false },
            { text: "Vue.js", correct: false },
        ]
    },
    {
        question: "Which language is used for web development on the server side?",
        answers: [
            { text: "HTML", correct: false },
            { text: "JavaScript", correct: false },
            { text: "PHP", correct: true },
            { text: "CSS", correct: false },
        ]
    },
    {
        question: "What is the default port number for HTTP?",
        answers: [
            { text: "21", correct: false },
            { text: "80", correct: true },
            { text: "443", correct: false },
            { text: "8080", correct: false },
        ]
    },
    {
        question: "Which programming language runs in the browser?",
        answers: [
            { text: "Java", correct: false },
            { text: "Python", correct: false },
            { text: "JavaScript", correct: true },
            { text: "C#", correct: false },
        ]
    },
    {
        question: "Which of the following is used for database management?",
        answers: [
            { text: "MySQL", correct: true },
            { text: "HTML", correct: false },
            { text: "CSS", correct: false },
            { text: "JavaScript", correct: false },
        ]
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        answers: [
            { text: "&lt;a&gt;", correct: true },
            { text: "&lt;link&gt;", correct: false },
            { text: "&lt;href&gt;", correct: false },
            { text: "&lt;url&gt;", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerBtns = document.getElementById("answer-btns");
const nextBtn = document.getElementById("next");


let currentQuestionIndex = 0 ;
let score = 0 ;

function startQuiz(){
    currentQuestionIndex= 0 ;
    score = 0 ;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function   showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
   questionElement.innerHTML = questionNumber + "."+currentQuestion.question;

   currentQuestion.answers.forEach(answer =>{
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerBtns.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer)
   })
}
function resetState(){
 nextBtn.style.display = "none";
 while(answerBtns.firstChild){
    answerBtns.removeChild(answerBtns.firstChild)
 }
}
function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerBtns.children).forEach(button =>{
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display="block";
}
function  showscore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}! `;
    nextBtn.innerHTML = "Play again";
    nextBtn.style.display ="block";
}
function handleNextBtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showscore();
    }
}
nextBtn.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextBtn();
    }else{
        startQuiz();
    }
})

startQuiz();