const questions = [
    {
        question:"Who was the first Hispanic astronaut to fly to space?",
        answers: [
            {text: "Ellen Ochoa", correct: false},
            {text: "Franklin Chang-Díaz", correct: true},
            {text: "José Hernández", correct: false},
            {text: "Rodolfo Neri Vela", correct: false}
        ]

    },
    {
        question:"Who is known for their contributions to plasma physics and nuclear fusion research and has been inducted into the National Inventors Hall of Fame?",
        answers: [
            {text: "Franklin Chang-Díaz", correct: true},
            {text: "Mario Molina", correct: false},
            {text: "Albert Baez", correct: false},
            {text: "Jorge Cham", correct: false}
        ]

    },
    {
        question: "Which Latina scientist became the first female Hispanic astronaut and later the director of NASA's Johnson Space Center?",
        answers: [
            {text: "Ellen Ochoa", correct: true},
            {text: "Sylvia Acevedo", correct: false},
            {text: "France A. Córdova", correct: false},
            {text: "Adriana Ocampo", correct: false}
        ]
    },
    {
        question: "Which Latino scientist won the Nobel Prize in Chemistry for his work on understanding the ozone layer and its depletion?",
        answers: [
            {text: "Luis Alvarez", correct: false},
            {text: "Jaime Escalante", correct: false},
            {text: "Mario Molina", correct: true},
            {text: "Severo Ochoa", correct: false}
        ]
    },
    {
        question: "Who was a pioneering Hispanic physicist and inventor who developed the X-ray microscope and is the father of folk singer Joan Baez?",
        answers: [
            {text: "Luis Walter Alvarez", correct: false},
            {text: "Albert Baez", correct: true},
            {text: "César Lattes", correct: false},
            {text: "Edward Bouchet", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question"); 
const answerButtons = document.getElementById("answer-buttons"); 
const nextButton = document.getElementById("next-btn"); 

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex= 0;
    score= 0;
    nextButton.innerHTML = 'Next'
    showQuestion();
}

function showQuestion(){
    resetState();
    let currrentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currrentQuestion.question
    question;

    currrentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click",selectAnswer)
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();