var button = document.querySelector('#startbtn');
var timer = 120;
var counter = 0
var timeText = document.querySelector('#timer');
var choice1 = document.querySelector('#a')
var questions = [
  { 
    question:'What are the three building blocks of the web?',
          answers:['HTML, CSS, JavaScript', 'Google, Yahoo, Bing', 'Amazon, Ebay, CraigsList', 'Internet, TV, Newspaper'],
          answer:'a'
  },
  {
    question:'what is my favorite food',
          answers:['pizza', 'g', 'y'],
          answer:'a'
  }
]

document.getElementById('questions').style.display = 'none'
document.getElementById('answer').style.display = 'none'
document.getElementById('input').style.display = 'none'
document.getElementById('table').style.display = 'none'

choice1.onclick = showQuestions
button.onclick = startQuiz;

function startQuiz() {
    setInterval(function() {
    timer--
    document.querySelector('#timer').innerHTML = timer 
  }, 1000);
    document.getElementById('Header').style.display = 'none'
    document.getElementById('questions').style.display = 'block'
    showQuestions()
  }
  document.querySelector('#timer').innerHTML = timer

  function showQuestions() {
    document.getElementById("QuestionTag").innerHTML = questions[counter].question
console.log(questions[counter])
  if (questions[counter].answer === event.target.id) {
      console.log("yes")
      
  }
  counter ++
  }









// window.onload=function() {
//     var startButton = document.getElementById("startbtn")
//     startButton.addEventListener("click", function(){
//         setTime();
//         setQuestion();
//         console.log(event);
//     });
//   }

  
  //test code

{/* <div class="hide" id="divOne"></div>
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
} */}



  //end test code
// var timeElement = document.querySelector("<p>");
// var secondsLeft = 120;
// function setTime() {
//     var timerInterval = setInterval(function() {
//         secondsLeft--;
//         timeElement.textContent = secondsLeft
//         if (secondsLeft === 0) {
//             clearInterval(timerInterval);
//             sendTimeMessage();
            
//         }
//     }, 1000);
// }
// function sendTimeMessage() {
//     timeElement.textContent = " ";
// }
// function setQuestion() {
// }