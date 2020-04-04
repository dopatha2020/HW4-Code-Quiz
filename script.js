window.onload=function() {
    var startButton = document.getElementById("startbtn")
    startButton.addEventListener("click", function(){
        setTime(120);
        setQuestion();
        console.log(event);
    });
  }

  
  //test code

<div class="hide" id="divOne"></div>
<div id="divTwo"></div>
<div id="divThree"></div>
<div id ="questionDiv">
    all the html from line 21
</div>


document.querySelector("#questionDiv").appendChild('<div class="hide" id="divOne"></div><div id="divTwo"></div><div id="divThree"></div>');

document.querySelector("#startButton").addEventListener("click",function(){

})


document.querySelector(".hide").classList.remove("hide")

.hide {
    display:none;
}



  //end test code
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