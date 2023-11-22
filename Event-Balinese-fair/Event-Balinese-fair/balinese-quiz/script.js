const questions = [
    {
        question: "Apa nama tarian tradisional Bali yang sering di tampilkan sebagai tarian sambutan?",
        answers: [
            {text: "Kecak", correct: false },
            {text: "Pendet", correct: true },
            {text: "Legong", correct: false },
            {text: "Rejang Renteng", correct: false },
        ]
    },
    {
        question: "Upacara ngaben di Bali berkaitan dengan apa?",
        answers: [
            {text: "Pernikahan", correct: false },
            {text: "Kelahiran", correct: false},
            {text: "Kematian", correct: true},
            {text: "Pertanian", correct: false },
        ]
    },
    {
        question: "Pura Besakih di Bali terletak di kabupaten?",
        answers: [
            {text: "Badung", correct: false },
            {text: "Singaraja", correct: false },
            {text: "Tabanan", correct: false },
            {text: "Karangasem", correct: true },
        ]
    },
    {
        question: "Apa nama upacara melasti yang dilakukan menjelang Hari Nyepi di Bali?",
        answers: [
            {text: "Ngaben", correct: false },
            {text: "Melis", correct: true },
            {text: "Ngejot", correct: false },
            {text: "Upanayana", correct: false },
        ]
    },
    {
        question: "Apa nama perayaan sebelum nyepi yang biasanya di rayakan dengan parade ogoh-ogoh?",
        answers: [
            {text: "Kuningan", correct: false },
            {text: "Galungan", correct: false },
            {text: "Pangerupukan", correct: true},
            {text: "Ngembak Geni", correct: false },
        ]
    },
    {
        question: "Bunga apakah yang menjadi maskot kota Denpasar?",
        answers: [
            {text: "Jepun", correct: false },
            {text: "Anggrek", correct: false },
            { text: "Jempiring", correct: true},
            {text: "Mawar", correct: false },
        ]
    },
    {
        question: "Apa nama pakaian adat tradisional yang sering dikenakan oleh wanita dalam upacara adat di Bali?",
        answers: [
            {text: "Kain Sarung", correct: false },
            {text: "Kebaya", correct: true },
            {text: "Songket", correct: false},
            {text: "Udeng", correct: false },
        ]
    },
    {
        question: "Upacara adat yang dilakukan untuk menghormati roh leluhur dan membersihkan desa dari energi negatif disebut?",
        answers: [
            {text: "Ngaben", correct: false },
            {text: "Melasti", correct: true },
            {text: "Galungan", correct: false},
            {text: "Nyepi", correct: false },
        ]
    },
    {
        question: "Apa nama seni pertunjukan tradisional Bali yang melibatkan tarian dan drama yang menceritakan kisah-kisah mitologis?",
        answers: [
            {text: "Kecak", correct: true },
            {text: "Barong", correct: false },
            {text: "Legong", correct: false},
            {text: "Wayang Kulit", correct: false },
        ]
    },
    {
        question: "Apa nama festival yang dirayakan untuk memperingati kemenangan Dharma (kebaikan) atas Adharma (kejahatan) di Bali?",
        answers: [
            {text: "Galungan & Kuningan", correct: true },
            {text: "Nyepi", correct: false },
            {text: "Kuningan", correct: false},
            {text: "Pagerwesi", correct: false }, 
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
    });

}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
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
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}! congratulations you get a ${score}% discount`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();