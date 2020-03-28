
/**
 * 10 questions
 * list 4 possible answers
 * 
 Question:
 text 
 4 answers

text / correct?
 
data to track
timer
current question no
score correct/incorrect

when game starts 
curr ques = 0
timer 60;
score = 0
game loop {
render cuurent question 
next;
when user cliks the answer
if (correct)
score ++
else
penalty reduce timer
}
next ques
increment the question index++
check for next question
if (true) {
    repeat game loop until run of question timer to 
    
} esle {
    handle end of game.
}

end of  game;
display scores
ask if they want to play again
 
 */

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
var answerListEl = document.getElementById("l.ist");
var messageEl = document.getElementById("message-container");

//initial setup
var time = 60;
var gameTimer;
var currentQuestionIndex = 0;
var score = 0;



//Display info initial page
function displayInfo() {
    //varibles to create tags to display when the app starts    
    var h2El = document.createElement("h2");       //h2 for to display play
    var pEl = document.createElement("p");         //info of game
    var btnEl = document.createElement("button")   //to start the game
    btnEl.setAttribute("id", "start");
    //text contents of the corresponding tags
    h2El.textContent = "Play the code quiz game";
    pEl.textContent = "The game has 10 questions and you have 60 seconds to complete the game.If wrong answer is selected you will lose time by 5 seconds. Have fun!";
    btnEl.textContent = "START";
    //inside-box (h2, p and start button)    
    displayEl.appendChild(h2El);
    displayEl.appendChild(pEl);
    displayEl.appendChild(btnEl);
    boxEl.appendChild(displayEl);
    btnEl.addEventListener("click", listQuestion);
    btnEl.addEventListener("click", Timer);

}
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

//calling displayInfo() for displaying the first page
displayInfo();
function listQuestion() {


    var currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion);
    if (!currentQuestion) {
        return endGame();
    }
    displayEl.style.display = "none";
    var questionDiv = createQuestion(currentQuestion);


    boxEl.prepend(questionDiv);
    //to display whether the answer is correct or incorrect in a label
    //var answerListEl = document.getElementById("l.ist");

}
function createQuestion(currentQuestion) {
    var divQuestion = document.createElement("div");
    divQuestion.setAttribute("class", "question");
    var questionHead = document.createElement("h2");
    questionHead.setAttribute("id", "question-head");
    questionHead.textContent = currentQuestion.text;
    divQuestion.appendChild(questionHead);
    var answerList = document.createElement("div");
    answerList.setAttribute("id", "l.ist");

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
   // var divQuestionEl = document.querySelector(".question");
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


        //alert(e.target.textContent);

        if (target.hasAttribute("class", "true")) {
            // alert("CORRECT!");
            selectedAnswer.textContent = "Correct!"
            score++;
            scoreEl.textContent = "Score: " + score;
        }
        else {
            //alert("WRONG!")
            selectedAnswer.textContent = "Wrong!";
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
//to display nextQuestion
// function nextQuestion() {
//     questionHead.parentNode.removeChild(questionHead);
//     answerList.parentNode.removeChild(answerList);

//     if (currentQuestionIndex < questions.length) {
//         listQuestion();
//     }
//     if (currentQuestionIndex >= questions.length) {
//         finalScore();
//     }
// }
//to display final score
function finalScore() {
    alert(scoreEl.textContent);
}