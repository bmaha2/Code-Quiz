
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
        text: "example question",
        answers: [
            { text: "ans 1", correct: false },
            { text: "ans 2", correct: true },
            { text: "ans 3", correct: false },
            { text: "ans 4", correct: false },

       ]

    },
    {
        text: "example question",
        answers: [
            { text: "ans 1", correct: false },
            { text: "ans 2", correct: true },
            { text: "ans 3", correct: false },
            { text: "ans 4", correct: false },

        ]
    },
    {
        text: "example question",
        answers: [
            { text: "ans 1", correct: false },
            { text: "ans 2", correct: true },
            { text: "ans 3", correct: false },
            { text: "ans 4", correct: false },

        ]
    },
    {
        text: "example question",
        answers: [
            { text: "ans 1", correct: false },
            { text: "ans 2", correct: true },
            { text: "ans 3", correct: false },
            { text: "ans 4", correct: false },

        ]

    },
    {
        text: "example question",
        answers: [
            { text: "ans 1", correct: false },
            { text: "ans 2", correct: true },
            { text: "ans 3", correct: false },
            { text: "ans 4", correct: false },

        ]

    },
    {
        text: "example question",
        answers: [
            { text: "ans 1", correct: false },
            { text: "ans 2", correct: true },
            { text: "ans 3", correct: false },
            { text: "ans 4", correct: false },

        ]
    },
    {
        text: "example question",
        answers: [
            { text: "ans 1", correct: false },
            { text: "ans 2", correct: true },
            { text: "ans 3", correct: false },
            { text: "ans 4", correct: false },

        ]
    },
    {
        text: "example question",
        answers: [
            { text: "ans 1", correct: false },
            { text: "ans 2", correct: true },
            { text: "ans 3", correct: false },
            { text: "ans 4", correct: false },

        ]
    },
    {
        text: "example question",
        answers: [
            { text: "ans 1", correct: false },
            { text: "ans 2", correct: true },
            { text: "ans 3", correct: false },
            { text: "ans 4", correct: false },

        ]
    },
];




var startEl = document.getElementById("start");
innerBoxEl = document.querySelector(".inside-box");
timerEl = document.getElementById(timer);
var gameTimer = 60;
startEl.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("clicked");
    if (innerBoxEl.parentNode) {
        innerBoxEl.parentNode.removeChild(innerBoxEl);
    }
    
    setInterval(() => {
        timer.textContent = "Time Left: " + gameTimer;
        gameTimer --;
        
    }, 1000);
    startGame();   
});