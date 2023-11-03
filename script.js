const question = [
  {
    question:"Which is the first Hi-Tech University in Bangladesh?",
    answer:[
      {
        text:"UGV",correct:true
      },
      {
        text:"IUBAT",correct:false
      },
      {
        text:"BUBT",correct:false
      },
      {
        text:"AIUB",correct:false
      }
    ]

  },
  {
    question:"Who is the chairman of UGV?",
    answer:[
      {
        text:"Dr. Kaykobad",correct:false
      },
      {
        text:"Md. Imran Chowdhury",correct:true
      },
      {
        text:"Newton MA Hakim ",correct:false
      },
      {
        text:"Md Farid Ahmad",correct:false
      }
    ]

  },
  {
    question:"In which year UGV was established?",
    answer:[
      {
        text:"2015",correct:false
      },
      {
        text:"2016",correct:true
      },
      {
        text:"2017",correct:false
      },
      {
        text:"2018",correct:false
      }
    ]

  },
  {
    question:"Who is the Vice-Chancellor of UGV",
    answer:[
      {
        text:"Abdul Baqee",correct:true
      },
      {
        text:"Engr. A.H.M. Delwar Haidar",correct:false
      },
      {
        text:"Professor Badiuzzaman",correct:false
      },
      {
        text:"Professor Dr. Md. Kaykobad",correct:false
      }
    ]

  },
  {
    question:"What is the Motto of UGV",
    answer:[
      {
        text:"Knowledge is Power",correct:false
      },
      {
        text:"Know Thyself",correct:false
      },
      {
        text:"Honesty is the best policy",correct:false
      },
      {
        text:"Knowledge is Light",correct:true
      }
    ]

  }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score=0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = question[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answer.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click",selectAnswer);
  })
}

function resetState() {
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;

  }
  else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  })
  nextButton.style.display = "block"
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Your scored ${score} out of ${question.length}!`
  nextButton.innerHTML = "Play Again"
  nextButton.style.display = "block"
}

function handleNextButton() {
  currentQuestionIndex++;
 if(currentQuestionIndex < question.length){
  showQuestion();
 }
 else{
  showScore();
 }
}

nextButton.addEventListener("click", () => {
  if(currentQuestionIndex < question.length){
    handleNextButton();
  }
  else{
    startQuiz();
  }
})

startQuiz();
