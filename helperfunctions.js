
/////////////////////////           Auxillary Functions                   ///////////////////////////////////////

function drawSample(bag) {
    let sample = bag[Math.floor(Math.random() * bag.length)];
    return sample;                            // return a randomly choosen sample from a distribution (bag)
  }
  
  
  function continuousSample(bag) {
    let sample = drawSample(bag) + Math.random() + .05 * drawSample(bag) - .5;
    if (sample < 0) { sample = 0; }
    return sample;                            // return a randomly choosen sample from a distribution (bag)
  }
  
  
  function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]];
      }
  }
  
    
  function findIndexofMatch(arrayofchoices, propertytomatch, exampletomatch) {
    let matchindex = 0;
    let matchfound = false;  
    arrayofchoices.forEach(element => {
      if (propertytomatch == "none") {
        if (element == exampletomatch) { matchfound = true; }
        if (!matchfound) { matchindex ++; }
      } else {
        if (element[propertytomatch] == exampletomatch) { matchfound = true; }
        if (!matchfound) { matchindex ++; }
      }
    });
    return matchindex; 
  }
  // findIndexofMatch(systems, "name", "Sol");
  
  /////////////////////////              Test Functions                     ///////////////////////////////////////
  
  function supertest(t2) {
    // t3 = t2.slice();
    // t3 = [...t2];
    t3 = Array.from(t2);
    testfunction(t3);
    newtestarray = t3;
    console.log("Testarray:  " + testarray);
    
  }
  
  function testfunction(temp1) {
    shuffle(temp1);
    console.log("Temp1:  " + temp1);
  }
  
  function buybuy() {
    console.log('Bye-bye');
  }
  
  
  
  

  
  
  