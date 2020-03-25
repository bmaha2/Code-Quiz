
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
        text: "what is a full-stack?",
        answers: [
            { text: "HTML", correct: false },
            { text: "Back-end Front-end", correct: true },
            { text: "CSS", correct: false },
            { text: "JavaScipt", correct: false },

        ]

    },
    {
        text: "example question2",
        answers: [
            { text: "ans 1", correct: false },
            { text: "ans 2", correct: false },
            { text: "ans 3", correct: true },
            { text: "ans 4", correct: false },

        ]
    },
    {
        text: "example question3",
        answers: [
            { text: "ans 1", correct: false },
            { text: "ans 2", correct: true },
            { text: "ans 3", correct: false },
            { text: "ans 4", correct: false },

        ]
    },
    {
        text: "example question4",
        answers: [
            { text: "ans 1", correct: false },
            { text: "ans 2", correct: true },
            { text: "ans 3", correct: false },
            { text: "ans 4", correct: false },

        ]

    },
    {
        text: "example question5",
        answers: [
            { text: "ans 1", correct: false },
            { text: "ans 2", correct: true },
            { text: "ans 3", correct: false },
            { text: "ans 4", correct: false },

        ]

    },
    {
        text: "example question6",
        answers: [
            { text: "ans 1", correct: false },
            { text: "ans 2", correct: true },
            { text: "ans 3", correct: false },
            { text: "ans 4", correct: false },

        ]
    },
    {
        text: "example question7",
        answers: [
            { text: "ans 1", correct: false },
            { text: "ans 2", correct: true },
            { text: "ans 3", correct: false },
            { text: "ans 4", correct: false },

        ]
    },
    {
        text: "example question8",
        answers: [
            { text: "ans 1", correct: false },
            { text: "ans 2", correct: true },
            { text: "ans 3", correct: false },
            { text: "ans 4", correct: false },

        ]
    },
    {
        text: "example question9",
        answers: [
            { text: "ans 1", correct: false },
            { text: "ans 2", correct: true },
            { text: "ans 3", correct: false },
            { text: "ans 4", correct: false },

        ]
    }
    ,
    {
        text: "example question10",
        answers: [
            { text: "ans 1", correct: false },
            { text: "ans 2", correct: true },
            { text: "ans 3", correct: false },
            { text: "ans 4", correct: false },

        ]
    }
    ,
    {
        text: "example question11",
        answers: [
            { text: "ans 1", correct: false },
            { text: "ans 2", correct: true },
            { text: "ans 3", correct: false },
            { text: "ans 4", correct: false },

        ]
    }
    ,
    {
        text: "example question12",
        answers: [
            { text: "ans 1", correct: false },
            { text: "ans 2", correct: true },
            { text: "ans 3", correct: false },
            { text: "ans 4", correct: false },

        ]
    }
];

//varibles to get hold of the nodes
var scoreEl = document.getElementById("high-score"); //for score
var timerEl = document.getElementById("timer")       //for timer
var startEl = document.getElementById("start");      // div for main display excluding timer and score
var headerEl = document.querySelector(".header");    //div for score and timer
var wrapperEl = document.querySelector(".wrapper");  //for styling 
var boxEl = document.querySelector(".inside-box");   //for styling
var activeEl = document.querySelector(".active");

//initial setup
var gameTimer = 60;
var currentQuestion = 0;

//wrapper to display the DOM
function wrapper() {
    //body(wrapper)
    //wrapper(header, inside-box)
    //header(score, timer)
    boxEl.appendChild(startEl);
    wrapperEl.appendChild(headerEl);
    headerEl.appendChild(scoreEl);
    headerEl.appendChild(timerEl);
    wrapperEl.appendChild(boxEl);
    document.body.appendChild(wrapperEl);
}

//Display info initial page
function displayInfo() {
    
    //varibles to create tags to display when the app starts    
    var h2El = document.createElement("h2");       //h2 for to display play
    var pEl = document.createElement("p");         //info of game
    var btnEl = document.createElement("button")   //to start the game

    //text contents of the corresponding tags
    h2El.textContent = "Play the code quiz game";
    pEl.textContent = "The game has 10 questions and you have 60 seconds to complete the game.If wrong answer is selected you will lose time by 5 seconds. Have fun!";
    btnEl.textContent = "START";
   
    
    //inside-box (h2, p and start button)    
    startEl.appendChild(h2El);    
    startEl.appendChild(pEl);
    startEl.appendChild(btnEl);
    wrapper();
    
}
//displaying the fisrt page
displayInfo();

//event handler set to start button to start the game
startEl.addEventListener("click", function (e) {
   
    //trying to create active class such that the click will take display next page

   
    //game timer    
    setInterval(() => {
        timerEl.textContent = "Time Left: " + gameTimer;
        gameTimer--;
    }, 1000);  
    
    listQuestion();
    currentQuestion++;
 });


function listQuestion() {  

    
    startEl.style.display = "none";
    var obj = questions[currentQuestion];
    var divQuestion = document.createElement("div");
    divQuestion.setAttribute("class","question");
    var labelQuestion = document.createElement("label");
    labelQuestion.setAttribute("id", "question-head")
    labelQuestion.textContent = obj.text;
    divQuestion.appendChild(labelQuestion);
    
    
    for (var i = 0; i < obj.answers.length; i++) {
        var btn = document.createElement("button");
        btn.setAttribute("id","btn")
        
        btn.textContent = btn.textContent + obj.answers[i].text;
        if (obj.answers[i].correct) {
            btn.setAttribute("class", "true");            
        } 
        divQuestion.appendChild(btn);
    }
    
    
    boxEl.appendChild(divQuestion);    
    var btnEl = document.getElementById("btn");
    btnEl.addEventListener("click", function(e) {
        e.preventDefault();

        if (e.tagName === "BUTTON") {
            alert("clicked" + e.target.textContent);  // Check if the element is a LI
        //     
      }
    //   var items = ul.getElementsByTagName("li");
    //       for (var i = 0; i < items.length; i++) {
    //           if (items[i].hasAttribute("true")) {
    //               alert("correct");
    //           }
    //           else {
    //               alert("incorrect");
    //           }
    //       }
    
var buttonsCount = btn.length;
for (var i = 0; i <= buttonsCount; i++) {
    btn[i].onclick = function(e) {
        alert(this.id);
    };
}

     });
}
//  function hideNode(node) {
//       node.style.display= "block";
//  }
//  function displayNode(node) {
//     var current = document.querySelector(".active");
//     var next = current.nextElementSibling;
//     if (next) {
//         current.classList.remove("active");
//         next.classList.add("active");
//     }     
//  }