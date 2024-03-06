const correctAnswersEl = document.getElementById('correct-answers');
const totalQuestionsEl = document.getElementById('total-questions');
const scoreEl = document.getElementById('score');
const reviewAnswersBtn = document.getElementById('review-answers');
const answersContainerEl = document.getElementById('answers-container');


const quizData = JSON.parse(localStorage.getItem('quizData'));
const userAnswers = JSON.parse(localStorage.getItem('userAnswers'));

let correctAnswers = 0;
for (let i = 0; i < quizData.length; i++) {
    if (quizData[i].answer === userAnswers[i]) {
        correctAnswers++;
    }
}

correctAnswersEl.textContent = correctAnswers;
totalQuestionsEl.textContent = quizData.length;
scoreEl.textContent = (correctAnswers / quizData.length) * 100;


reviewAnswersBtn.addEventListener('click', () => {
    answersContainerEl.style.display = 'block';
});

for (let i = 0; i < quizData.length; i++) {
    const questionEl = document.createElement('div');
    questionEl.classList.add('question');

    const questionTitleEl = document.createElement('h3');
    questionTitleEl.textContent = `Câu hỏi ${i + 1}: ${quizData[i].question}`;

    const correctAnswerEl = document.createElement('p');
    correctAnswerEl.textContent = `Đáp án đúng: ${quizData[i].answer}`;

    const userAnswerEl = document.createElement('p');
    userAnswerEl.textContent = `Đáp án của bạn: ${userAnswers[i]}`;

    const answerEl = document.createElement('div');
}   
