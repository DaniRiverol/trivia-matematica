const questions = [
  {
    question: `<div class="question">13 X 3 = <input type="text" class="answer"></div>`,
    answer: "39",
    level: "easy",
  },
  {
    question: `<div class="question">-3 X 3 = <input type="text" class="answer"></div>`,
    answer: "-27",
    level: "easy",
  },
  {
    question: `<div class="question">33 - <input type="text" class="answer"> = 27</div>`,
    answer: "8",
    level: "easy",
  },
  {
    question: `<div class="question"><input type="text" class="answer"> / 3 = 12</div>`,
    answer: "36",
    level: "easy",
  },
  {
    question: `<div class="question">9 <input type="text" class="answer"> 35 = 44</div>`,
    answer: "+",
    level: "easy",
  },
  {
    question: `<div class="question">-3<sup>3</sup> = <input type="text" class="answer"></div>`,
    answer: "-27",
    level: "medium",
  },
  {
    question: `<div class="question">122 + 3 X 4 = <input type="text" class="answer"></div>`,
    answer: "134",
    level: "medium",
  },
  {
    question: `<div class="question"><input type="text" class="answer"> <sup>3</sup> = 8</div>`,
    answer: "2",
    level: "medium",
  },
  {
    question: `<div class="question">13 X 3 = <input type="text" class="answer"></div>`,
    answer: "39",
    level: "medium",
  },
  {
    question: `<div class="question">13 X 3 = <input type="text" class="answer"></div>`,
    answer: "39",
    level: "medium",
  },
  {
    question: `<div class="question">13 X 3 = <input type="text" class="answer"></div>`,
    answer: "39",
    level: "medium",
  },
  {
    question: `<div class="question">13 X 3 = <input type="text" class="answer"></div>`,
    answer: "39",
    level: "hard",
  },
  {
    question: `<div class="question">13 X 3 = <input type="text" class="answer"></div>`,
    answer: "39",
    level: "hard",
  },
  {
    question: `<div class="question">13 X 3 = <input type="text" class="answer"></div>`,
    answer: "39",
    level: "hard",
  },
  {
    question: `<div class="question">13 X 3 = <input type="text" class="answer"></div>`,
    answer: "39",
    level: "hard",
  },
  {
    question: `<div class="question">13 X 3 = <input type="text" class="answer"></div>`,
    answer: "39",
    level: "hard",
  },
  {
    question: `<div class="question">13 X 3 = <input type="text" class="answer"></div>`,
    answer: "39",
    level: "hard",
  },
];

let randomQuestion = Math.floor(Math.random() * questions.length);
console.log(randomQuestion);

const contentQuestion = document.querySelector(".content-question"),
  btnVerificar = document.querySelector("#btnVerificar"),
  message = document.querySelector("#message");
//revisar todo este codigo porque es redundante
function selectQuestion(obj) {
  const { question, answer } = obj;
  return { question, answer };
}

let question, answer;
question = selectQuestion(questions[randomQuestion]).question;
contentQuestion.innerHTML = question;
answer = selectQuestion(questions[randomQuestion]).answer;
correcta = 0;
btnVerificar.addEventListener("click", () => {
  if (document.querySelector(".answer").value == answer) {
    correcta++
    message.innerHTML = `<h3>Muy Bien!!!!</h3>
    
    <p>Respuestas correctas: ${correcta}</p>`;
   
  } else {
    message.innerHTML = `<h3>Oh</h3>`;
  }
});
