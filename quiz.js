// buttons function
var pointer = 0;

function functionsGroupForDom() {
  quecounter2();
  questionNoCounter();
  functionForQuestionCounterNext();
  domForopt();
  domForque();
  domForTags();
  optionsCleaner();
  domForOptId()
}
var flagForMode = 0;
function darkMode() {
  if (flagForMode == 0) {
    var temp = document.querySelectorAll(".change-dark");
    console.log("button clicked for light mode");
    temp.forEach((element) => {
      element.style.backgroundColor = "white";
      element.style.color = "black";
      flagForMode = 1;
      return;
    });
  } else {
    console.log("button clicked for dark mode");
    var temp = document.querySelector(".title");
    temp.style.animation = "none";
    var temp = document.querySelectorAll(".change-dark");
    temp.forEach((element) => {
      element.style.backgroundColor = "rgb(148 163 184/1)";
      element.style.color = "white";
      flagForMode = 0;
      return;
    });
  }
}

function nextbutton() {
  if (pointer < 19) {
    pointer++;
    console.log("pointer: ", pointer);
  }
  functionsGroupForDom();
}

function prevbutton() {
  if (pointer > 0) {
    pointer--;
    console.log("pointer: ", pointer);
  }
  functionsGroupForDom();
}

// tags
var tagDomit = document.getElementById("tagbyid");
domForTags = () => {
  var temp = arrForTags[pointer];
  tagDomit.innerText = temp;
};

// container 1
// question no. counter
function questionNoCounter() {
  var questionNo = document.querySelector("#quehere1");
  questionNo.innerHTML = `Question ${pointer + 1}`;
}

// question box
// array of que opt and ans
var arrForOpt = [];
var arrForTags = [];
var arrForQue = [];
var arrForOptId=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,]



// fetch

for (var i = 0; i < 20; i++) {
  fetch(
    "https://quizapi.io/api/v1/questions?apiKey=qI7EvoNrsaOMxWHZvqDZhPHPCxQpoINAbt9DGiRV &limit=1"
  )
    .then((response) => response.json())
    .then((data) => {
      arrForQue.push(data[0].question);
      arrForOpt.push(data[0].answers);
      arrForTags.push(data[0].category);
      //   console.log("arrForQue: ", arrForQue);
      //   console.log("arrForOpt: ", arrForOpt);
      //   console.log("arrForTags: ", arrForTags);
    });
}

// dom

// question
setTimeout(() => {
  for (var i = 0; i < 2; i++) {
    domForque();
    domForopt();
    domForTags();
  }
}, 2000);

const questionEl = document.getElementById("question");
function domForque  () {
  var temp = arrForQue[pointer];
  questionEl.innerText = temp;
};

// options
var pointerForOpt;
const options = document.querySelectorAll(".options");
options.forEach((button) => {
  button.addEventListener("click", function () {
    var Answer=String(button.id)
    console.log('Answer: ', Answer);
    arrForOptId[pointer]=Answer
    console.log('arrForOptId: ', arrForOptId);
    options.forEach((b) => {
      (b.style.border = "none")
      this.style.border = "2px solid black";
      b.style.backgroundColor="white"
    }
    )
     var tempp=  document.getElementById(Answer)
     console.log('tempp: ', tempp);
     tempp.style.backgroundColor="red"

   
    if (arrForOptId[pointer]==null) {
      options.forEach(element => {
        element.backgroundColor="red"
      });
      }
      else if(arrForOptId[pointer]==="a"){
        console.log("Answer is A");
        options[0].style.backgroundColor="green"
      }
  else if(arrForOptId[pointer]==="b"){
     console.log("Answer is b");
     options[1].style.backgroundColor="green"
    }
    else if(arrForOptId[pointer]==="c"){
     console.log("Answer is c");
     options[2].style.backgroundColor="green"
    }
    else if(arrForOptId[pointer]==="d"){
     console.log("Answer is d");
    options[3].style.backgroundColor="green"
   }
  

  });
});
function domForOptId(){

  console.log('pointer: ', pointer);

}
function optionsCleaner() {
  options.forEach((option) => {
    option.style.border = "none";
  });
}
function domForopt  () {
  var temp1 = arrForOpt[pointer].answer_a;
  var temp2 = arrForOpt[pointer].answer_b;
  var temp3 = arrForOpt[pointer].answer_c;
  var temp4 = arrForOpt[pointer].answer_d;
  options[0].innerHTML = temp1;
  options[1].innerHTML = temp2;
  options[2].innerHTML = temp3;
  options[3].innerHTML = temp4;
};

// container 2
//quecounter2
function quecounter2() {
  var quecounter2 = document.querySelector(".QueNo");
  quecounter2.innerHTML = `Question ${pointer + 1}/20`;
}
// timer
var timer = document.getElementById("timer");
var seconds = 60;
var minute = 29;
setInterval(() => {
  seconds--;
  if (seconds == 0) {
    minute--;
    seconds = 60;
    if (minute === 0&&seconds===0)
    // call Submit page
     return;
  }
  timer.innerHTML = `00:${minute}:${seconds}`;
}, 1000);

// queCounter
// now this dom updated happy and simple
var divs = document.querySelectorAll("#myDiv");
if (pointer == 0) {

  divs[0].style.backgroundColor = "yellow";
  divs[0].style.border = "solid 2px red";
  divs[0].style.color = "red";
  divs[0].style.fontSize = "25px";
}

function functionForQuestionCounterNext() {
  divs.forEach(function (div, index) {
    if (index !== pointer) {
      div.style.border = "none";
      div.style.color = "blue";
      div.style.fontSize = "20px";
    }
    if (index === pointer) {
      div.style.backgroundColor = "yellow";
      div.style.border = "solid 2px red";
      div.style.color = "red";
      div.style.fontSize = "25px";
    }
  });
}
function clearResponse() {
  divs[pointer].style.backgroundColor = "#d1d5db";
  optionsCleaner();
}
function QueDOMByButtons() {
  divs.forEach((element) => {});
}

// functions for queCounters
const button = document.querySelectorAll(".ButtonOfQueCounter");
for (var i = 0; i < 20; i++) {
  button[i].addEventListener("click", function Valuegiveer() {
    console.log("button.innerText: ", this.innerText);
    pointer = parseInt(this.innerText) - 1;
    functionsGroupForDom();
  });
}

// review
var domAnswered=document.getElementById("domAnswered")
var domMarked=document.getElementById("domMarked")
var domNotVisited=document.getElementById("domNotVisited")
var domMarkedAndAnswered=document.getElementById("domMarkedAndAnswered")
var domNotAnswered=document.getElementById("domNotAnswered")

var ArrForNotVisited=[]
divs.forEach(element => {
  
});