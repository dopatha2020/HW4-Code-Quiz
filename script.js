var button = document.querySelector('#startbtn');
var timer = 120;
var counter = 0
var timeText = document.querySelector('#timer');
var choicesEl = document.getElementById("questionDisplay")
var choice1 = document.querySelector('#a')
var choice2 = document.querySelector('#b')
var choice3 = document.querySelector('#c')
var choice4 = document.querySelector('#d')

var questions = [
  { 
    question:'What are the three building blocks of the web?',
          choices:['HTML, CSS, JavaScript', 'Google, Yahoo, Bing', 'Amazon, Ebay, CraigsList', 'Internet, TV, Newspaper'],
          answer:'HTML, CSS, JavaScript'
  },
  {
    question:'what is my favorite food',
          choices:['pizza', 'g', 'y'],
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

  
  // function showQuestions() {
  //   // get current question object from array
  //   var currentQuestion = questions[currentQuestionIndex];
  //   // update title with current question
  //   var titleEl = document.getElementById("questionDisplay");
  //   titleEl.textContent = currentQuestion.title;
  //   // clear out any old question choices
  //   choicesEl.innerHTML = "";
  //   // loop over choices
  //   currentQuestion.choices.forEach(function(choice, i) {
  //     // create new button for each choice
  //     var choiceNode = document.createElement("button");
  //     choiceNode.setAttribute("class", "choice");
  //     choiceNode.setAttribute("value", choice);
  //     choiceNode.textContent = i + 1 + ". " + choice;
  //     // attach click event listener to each choice
  //     choiceNode.onclick = questionClick;
  //     // display on the page
  //     choicesEl.appendChild(choiceNode);
  //   });
  // }

  function showQuestions() {
    document.getElementById("QuestionTag").innerHTML = questions[counter].question

  if (questions[counter].answer === event.target.id) {
      console.log("yes")
      
  }
  counter ++
  }


  function showAnswers() {
    document.getElementById("a").innerHTML = questions[counter].answers
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