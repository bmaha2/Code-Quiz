//hold questions and answers
//questions are from tutorialspoint.com
var questions = [
    {
        text: "What is a full-stack?",
        answers: [
            { text: "1. HTML", correct: false },
            { text: "2 .Back-end and Front-end", correct: true },
            { text: "3. CSS", correct: false },
            { text: "4. JavaScipt", correct: false },

        ]

    },
    {
        text: "What is CSS ?",
        answers: [
            { text: "1. Component Style Sheet", correct: false },
            { text: "2. Current Style Sheet", correct: false },
            { text: "3. Cascading Style Sheet", correct: true },
            { text: "4. Charactes Style Sheet", correct: false },

        ]
    },
    {
        text: "What does HTML stands for?",
        answers: [
            { text: "1. Hyper Text Markup Language", correct: true },
            { text: "2. Home Text Markup Language", correct: false },
            { text: "3. Hyperlinks Text Markup Language", correct: false },
            { text: "4. Hyper Tool Markup Language", correct: false },

        ]
    },
    {
        text: "What is the coorect HTML tag for largest heading?",
        answers: [
            { text: "1. H6", correct: false },
            { text: "2. H1", correct: true },
            { text: "3. Heading", correct: false },
            { text: "4. Head", correct: false },

        ]

    },
    {
        text: "How to get the type of arguments passed to a fucntion?",
        answers: [
            { text: "1. using typeof operator", correct: true },
            { text: "2. using getType function", correct: false },
            { text: "3. Both of the above", correct: false },
            { text: "4. none of the above", correct: false },

        ]

    },
    {
        text: "Which of the following function of String object returns the character at the specified index",
        answers: [
            { text: "1. charIndexAt", correct: false },
            { text: "2. charAt", correct: true },
            { text: "3. indexof", correct: false },
            { text: "4. none of the above", correct: false },

        ]
    },
    {
        text: "Which of the following type of variable is visible only within a function where it is defined?",
        answers: [
            { text: "1. local variable", correct: true },
            { text: "2. global variable", correct: false },
            { text: "3. both of above", correct: false },
            { text: "4. None of above", correct: false },

        ]
    },
    {
        text: "Which built-in method sorts the elements of an array?",
        answers: [
            { text: "1. changeOrder(order)", correct: false },
            { text: "2. sort()", correct: true },
            { text: "3. order()", correct: false },
            { text: "4. None of the above", correct: false },

        ]
    },
    {
        text: "Which of the following function of String object returns a string representing the specified object?",
        answers: [
            { text: "1. toLocaleUpperCase()", correct: false },
            { text: "2. substring()", correct: false },
            { text: "3. toUpperCase()", correct: false },
            { text: "4. toString()", correct: true },

        ]
    }
    ,
    {
        text: "Which of the following property is used to add or subtract space between the letters that make up a word?",
        answers: [
            { text: "1. word-spacing", correct: false },
            { text: "2. direction", correct: false },
            { text: "3. letter-spacing", correct: true },
            { text: "4. color", correct: false },

        ]
    }
];

//varibles to get hold of the nodes
var scoreEl = document.getElementById("high-score"); //for score
var timerEl = document.getElementById("timer")       //for timer
var wrapperEl = document.querySelector(".wrapper");  //for styling 
var boxEl = document.querySelector(".inside-box");   //for styling
var displayEl = document.getElementById("display");   // div for main display excluding timer and score
var messageEl = document.getElementById("message-container");

//initial setup
var time = 100;
var gameTimer;
var currentQuestionIndex = 0;
var score = 0;

//Display startGame
function startGame() {
    //varibles to create tags to display when the app starts    
    var h2El = document.createElement("h2");       //h2 for to display play
    var pEl = document.createElement("p");         //info of game
    var btnEl = document.createElement("button")   //to start the game
    btnEl.setAttribute("id", "start");
    //text contents of the corresponding tags
    h2El.textContent = "Welcome to code quiz game";
    pEl.textContent = "The game has 10 questions and you have 100 seconds to complete the game. Click START button to play the game. Have fun!";
    btnEl.textContent = "START";
    //inside-box (h2, p and start button)    
    displayEl.appendChild(h2El);
    displayEl.appendChild(pEl);
    displayEl.appendChild(btnEl);
    boxEl.appendChild(displayEl);
    btnEl.addEventListener("click", listQuestion);
    btnEl.addEventListener("click", Timer);
}
//timer for the game
function Timer() {
    gameTimer = setInterval(function () {
        timerEl.textContent = "Time Left: " + time;
        time--;
        if (time < 1) {
            endGame();
            // return;
        }
    }, 1000);
}
//calling startGame
startGame();

//to list the questions
function listQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) {
        return endGame();
    }
    displayEl.style.display = "none";
    var questionDiv = createQuestion(currentQuestion);
    boxEl.prepend(questionDiv);
}
//function to create question with possible answers
function createQuestion(currentQuestion) {
    var divQuestion = document.createElement("div");
    divQuestion.setAttribute("class", "question");
    var questionHead = document.createElement("h2");
    questionHead.setAttribute("id", "question-head");
    questionHead.textContent = currentQuestion.text;
    divQuestion.appendChild(questionHead);
    var answerList = document.createElement("div");
    answerList.setAttribute("id", "ans-list");
    for (var i = 0; i < currentQuestion.answers.length; i++) {
        var btn = document.createElement("button");
        btn.setAttribute("id", "btn" + [i]);
        btn.textContent = btn.textContent + currentQuestion.answers[i].text;
        if (currentQuestion.answers[i].correct) {
            btn.setAttribute("class", "true");
        }
        answerList.appendChild(btn);
    }
    divQuestion.appendChild(answerList);
    divQuestion.addEventListener("click", function (event) {
        event.preventDefault();
        checkAnswer(event.target);
        divQuestion.parentNode.removeChild(divQuestion);
        if (currentQuestionIndex < questions.length) {
            currentQuestionIndex++;
            listQuestion();
        }
    });
    return divQuestion;
}
//function to check answer 
function checkAnswer(target) {
    clearMessage();
    var selectedAnswer = document.createElement("label");
    selectedAnswer.setAttribute("class", "selected");

    if (target.matches("BUTTON")) {
        if (target.hasAttribute("class", "true")) {
            // alert("CORRECT!");
            selectedAnswer.textContent = "Correct!"
            score++;
            //scoreEl.textContent = "Score: " + score;
        }
        else {
            //alert("WRONG!")
            selectedAnswer.textContent = "Wrong!";
            time -= 5;
        }
    }
    messageEl.appendChild(selectedAnswer);
}

function clearMessage() {
    messageEl.innerHTML = "";
}
function endGame() {
    clearMessage();
    //stop the timer
    clearInterval(gameTimer);
    finalScore();
}

//to display final score
function finalScore() {
    //alert(scoreEl.textContent);
    var doneDiv = document.createElement("div");
    var allDone = document.createElement("h2");
    allDone.textContent = "ALL DONE!"
    var finalScoreDisp = document.createElement("p");
    finalScoreDisp.textContent = "Your final score: " + score;
    var formSubmit = document.createElement("form");
    formSubmit.setAttribute("method", "POST");
    var inputNameField = document.createElement("label");
    inputNameField.textContent = "Your Initial:"
    var inputName = document.createElement("input");
    inputName.setAttribute("type", "text");
    var submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    doneDiv.appendChild(allDone);
    doneDiv.appendChild(finalScoreDisp);
    formSubmit.appendChild(inputNameField);
    formSubmit.appendChild(inputName);
    formSubmit.appendChild(submitBtn);
    doneDiv.appendChild(formSubmit);
    boxEl.appendChild(doneDiv)
    submitBtn.addEventListener("click", function (e) {
        e.preventDefault();
        doneDiv.parentNode.removeChild(doneDiv);
        var highScoreDiv = document.createElement("div");
        highScoreDiv.setAttribute("id", "high-score");
        highScore = document.createElement("h2");
        highScore.textContent = "High Scores";
        highScoreDiv.appendChild(highScore);
        var scoreList = document.createElement("label");
        inputName.value = inputName.value + " - " + score;
        //set new submission
        localStorage.setItem("user", JSON.stringify(inputName.value));
        //get recent submission
        scoreList.textContent = JSON.parse(localStorage.getItem("user"));
        highScoreDiv.appendChild(scoreList);
        var goBackBtn = document.createElement("button");
        goBackBtn.textContent = "Go Back";
        var clearScore = document.createElement("button");
        clearScore.textContent = "Clear highscores";
        highScoreDiv.appendChild(goBackBtn);
        highScoreDiv.appendChild(clearScore);
        boxEl.appendChild(highScoreDiv);

        clearScore.addEventListener("click", function (e) {
            e.preventDefault();
            scoreList.textContent = "";
        })
        goBackBtn.addEventListener("click", function (e) {
            e.preventDefault();
            startGame();
        });
    });
}