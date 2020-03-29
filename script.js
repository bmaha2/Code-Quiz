//hold questions and answers
var questions = [
    {
        text: "What is a full-stack?",
        answers: [
            { text: "1.HTML", correct: false },
            { text: "2.Back-end Front-end", correct: true },
            { text: "3.CSS", correct: false },
            { text: "4.JavaScipt", correct: false },

        ]

    },
    {
        text: "What is CSS ?",
        answers: [
            { text: "1.Component Style Sheet", correct: false },
            { text: "2.Current Style Sheet", correct: false },
            { text: "3.Cascading Style Sheet", correct: true },
            { text: "4.Charactes Style Sheet", correct: false },

        ]
    },
    {
        text: "What does HTML stands for?",
        answers: [
            { text: "1.", correct: false },
            { text: "2.", correct: true },
            { text: "3.", correct: false },
            { text: "4.", correct: false },

        ]
    },
    {
        text: "example question4",
        answers: [
            { text: "1.", correct: false },
            { text: "2.", correct: true },
            { text: "3.", correct: false },
            { text: "4.", correct: false },

        ]

    },
    {
        text: "example question5",
        answers: [
            { text: "1.", correct: false },
            { text: "2.", correct: true },
            { text: "3.", correct: false },
            { text: "4.", correct: false },

        ]

    },
    {
        text: "example question6",
        answers: [
            { text: "1.", correct: false },
            { text: "2.", correct: true },
            { text: "3.", correct: false },
            { text: "4.", correct: false },

        ]
    },
    {
        text: "example question7",
        answers: [
            { text: "1.", correct: false },
            { text: "2.", correct: true },
            { text: "3.", correct: false },
            { text: "4.", correct: false },

        ]
    },
    {
        text: "example question8",
        answers: [
            { text: "1.", correct: false },
            { text: "2.", correct: true },
            { text: "3.", correct: false },
            { text: "4.", correct: false },

        ]
    },
    {
        text: "example question9",
        answers: [
            { text: "1.", correct: false },
            { text: "2.", correct: true },
            { text: "3.", correct: false },
            { text: "4.", correct: false },

        ]
    }
    ,
    {
        text: "example question10",
        answers: [
            { text: "1.", correct: false },
            { text: "2.", correct: true },
            { text: "3.", correct: false },
            { text: "4.", correct: false },

        ]
    }
];

//varibles to get hold of the nodes
var scoreEl = document.getElementById("high-score"); //for score
var timerEl = document.getElementById("timer")       //for timer
var headerEl = document.querySelector(".header");    //div for score and timer
var wrapperEl = document.querySelector(".wrapper");  //for styling 
var boxEl = document.querySelector(".inside-box");   //for styling
var activeEl = document.querySelector(".active");
var displayEl = document.getElementById("display");      // div for main display excluding timer and score
var questionHeadEl = document.getElementById("question-head");
var answerListEl = document.getElementById("ans-list");
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
function listQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) {
        return endGame();
    }
    displayEl.style.display = "none";
    var questionDiv = createQuestion(currentQuestion);
    boxEl.prepend(questionDiv);
}
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

        clearScore.addEventListener("click", function(e){
            e.preventDefault();
            scoreList.textContent = "";

        })
        goBackBtn.addEventListener("click", function (e) {
            e.preventDefault();
            restartGame();
            
        })


    })
  
}function restartGame() {
    startGame();
}

  