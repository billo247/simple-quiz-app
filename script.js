const quizData = [{
        question: 'how old is loeth?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },
    {
        question: 'what is the most used programming language?',
        a: 'java',
        b: 'C',
        c: 'python',
        d: 'JavaScript',
        correct: 'd'
    },
    {
        question: 'who is the president of US?',
        a: 'Eddie Blay',
        b: 'Donald Trump',
        c: 'Kai harvetz',
        d: 'cr7',
        correct: 'b'
    },
    {
        question: 'what does html stand for?',
        a: 'Hypertext Markup Language',
        b: 'cascading style sheet',
        c: 'hey ha mom',
        d: 'cr7',
        correct: 'a'
    },
    {
        question: 'what year was js launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: '1990',
        correct: 'b'
    }
];
const answerEls = document.querySelectorAll(".answer");
const submitBtn = document.getElementById("submit");
const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz")
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


}

function getSelected() {

    let answer = undefined; //answer checking

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    // check to see answer
    //currentQuiz++;
    const answer = getSelected();
    console.log(answer);

    if (answer) {

        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;


        if (currentQuiz < quizData.length) {

            loadQuiz();
        } else {
            //show results
            const percentage = (score / quizData.length) * 100;
            quiz.innerHTML = `<h3>  your total score is ${score}/${quizData.length} representing ${percentage}% <button onclick = "location.reload()">restart</button></h3>`;
        }
    }
});