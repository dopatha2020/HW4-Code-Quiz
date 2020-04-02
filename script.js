window.onload=function() {
    var startButton = document.getElementById("startbtn")
    startButton.addEventListener("click", function(){
        setTime();
        setQuestion();
        console.log(event);
    });
  }
var timeElement = document.querySelector("<p>");
var secondsLeft = 120;
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeElement.textContent = secondsLeft
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendTimeMessage();
            
        }
    }, 1000);
}
function sendTimeMessage() {
    timeElement.textContent = " ";
}
function setQuestion() {
}