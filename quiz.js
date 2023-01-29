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
