// defining Next And Previous Button
function nextbutton() {
    if (pointer < 19) {
      pointer++;
      console.log('pointer: ', pointer);
    }
    functionsGroupForDom()
  }
  
  function prevbutton() {
    if (pointer > 0) {
      pointer--;
      console.log('pointer: ', pointer);
    }
    functionsGroupForDom()
  }
  
  // tags
var tagDomit = document.getElementById("tagbyid");
domForTags = () => {
  var temp = arrForTags[pointer];
  tagDomit.innerText = temp;
};

// container 1
// question no. counter
function questionNoCounter(){
  var questionNo= document.querySelector("#quehere1")
  questionNo.innerHTML=`Question ${pointer+1}`
  
}



// question box
// array of que opt and ans
var arrForOpt = [];
var arrForTags = [];
var arrForQue = [];

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
domForque = () => {
  var temp = arrForQue[pointer];
  questionEl.innerText = temp;
};

// options

const options = document.querySelectorAll('.options');

domForopt = () => {
  var temp1= arrForOpt[pointer].answer_a;
  var temp2 = arrForOpt[pointer].answer_b;
  var temp3 = arrForOpt[pointer].answer_c;
  var temp4 = arrForOpt[pointer].answer_d;
  options[0].innerHTML=temp1
  options[1].innerHTML=temp2
  options[2].innerHTML=temp3
  options[3].innerHTML=temp4
}

// container 2
//quecounter2
function quecounter2(){
  var quecounter2=document.querySelector(".QueNo")
  quecounter2.innerHTML=`Question ${pointer+1}/20`
}
// timer
var timer = document.getElementById("timer");
var seconds = 60;
var minute=29

setInterval(() => {
    seconds--;
    if(seconds==0){
        minute--
        seconds=60
        if(minute==0) return
    }

    timer.innerHTML=`00:${minute}:${seconds}`
}, 1000);



