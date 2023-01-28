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