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
