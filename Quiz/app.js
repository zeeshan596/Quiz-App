var questions = [
    {
        question: "Html stands for _____",
        options: [
            "Anchor Text Language",
            "HTML",
            "Hyper Text Markup Language",
            "Case Cading Style Sheet"
        ],
        correctAns: "Hyper Text Markup Language"
    },
    {
        question: "CSS stands for _____",
        options: [
            "Styling Sheet",
            "Java",
            "Case Cading Style Sheet",
            "Run"
        ],
        correctAns: "Case Cading Style Sheet"
    },
    {
        question: "JS stands for _____",
        options: [
            "Java Style",
            "Script src",
            "JavaScript",
            "Script"
        ],
        correctAns: "JavaScript"
    },
    {
        question: "RAM stands for _____",
        options: [
            "Random Access Memory",
            "Read Only Memory",
            "DOM",
            "For Pc"
        ],
        correctAns: "Random Access Memory"
    },
    {
        question: "ROM stands for _____",
        options: [
            "Read Only Mind",
            "Read Only Memory",
            "HTML",
            "Cafe Cading Style Sheet"
        ],
        correctAns: "Read Only Memory"
    }
];

var currentQuestion = document.getElementById("currentQuestion");
var totalQuestion = document.getElementById("totalQuestion");
var displayQuestion = document.getElementById("displayQuestion");
var options_div = document.getElementById("options_div");
var currentIndex = 0;
var score = 0;

function QuizRender() {
    currentQuestion.innerHTML = `${currentIndex + 1}`;
    totalQuestion.innerHTML = `${questions.length}`;
    displayQuestion.innerHTML = `${questions[currentIndex].question}`;
    options_div.innerHTML = "";

    for (var i = 0; i < questions[currentIndex].options.length; i++) {
        var option = questions[currentIndex].options[i];
        options_div.innerHTML += `<button onclick="checkAnswer('${option}')">${option}</button>`;
    }
}

function checkAnswer(selectedOption) {
    var correct = questions[currentIndex].correctAns;
    selectedOption === correct ? score++ : score;
    currentIndex++;
    if (currentIndex < questions.length) {
        QuizRender();
    } else {
        displayQuestion.innerHTML = "Quiz Completed!";
        options_div.innerHTML = "";
        alert(`Quiz Completed!\nYour score: ${score} out of ${questions.length}`);
    }
}

QuizRender();