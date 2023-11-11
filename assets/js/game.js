var startBtn = document.getElementById("start")
var timeLeft = 60
var timerEl = document.getElementById("timer")
var gameScreen = document.getElementById('gameScreen')
var QI = 0

console.log(questions)

function startGame() {
    // Start timer
    setInterval(runTimer,1000)
    // hide start screen
    document.getElementById("startScreen").setAttribute("class", "hide")
    gameScreen.removeAttribute('class')
    // Ask question
    askQuestion()
}
function askQuestion() {
    // Load first question
    document.querySelector('.choices').innerHTML = ''
    document.getElementById("question").textContent = questions[QI].text
    questions[QI].choices.forEach(function(choice){
        console.log(choice)
        var button=document.createElement('button')
        button.textContent=choice
        button.setAttribute('value', choice)
        button.addEventListener('click', function(){
            if(this.value===questions[QI].answer) {
                // add one to score
            }
            else{
                timeLeft-=10
            }
        QI++;
        askQuestion()
        })
        document.querySelector('.choices').appendChild(button)
    })
}
function runTimer() {
    // Decrement timer
    timeLeft--;
    // Set the text content of timerEL
    timerEl.textContent = timeLeft
}
startBtn.addEventListener("click",startGame)