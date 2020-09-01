///////////////           Functions involved in planetary interactions                     ///////////////////////////////////////



function visitPlanet(systemNum, index, bodytype) {  // clicking on a planet or star takes the ship to that celestial body for interactions
  createMainSection("grid-section2"); 
  let slotNum = 0;
  drawACelestialBody(systemNum, slotNum, index, bodytype, true);
  let temp1 = "interaction-planet";
  if (bodytype == "stars") { temp1 = "interaction-star"; }
  // next line outputs the possible interactions with the planet and adds listeners to each line
  populateBreifDetails(planet_visit_info_list, planet_visit_info_list_suffix, temp1, index, slotNum, systemNum);
  console.log(bodytype, bodytype, bodytype, bodytype);
  slotNum += 1;
  drawControlPannelIcon(slotNum, cp_icons[0]);
  ships[0].currentplanet = systems[systemNum].planets[index];       // assuming we are in orbit around a planet otherwise execute next line
  if (bodytype == "stars") { ships[0].currentplanet = systems[systemNum].stars[index]; }

}


function prepareInteraction(targetplanet, interactiontype) {      // master function for preparing interactions with a planet
  let targetresourceslist = [], index = 0;
  let testcargo = 'This is a test';
  targetplanet.resources.forEach(element => {
    if (element.interactiontype == interactiontype) { targetresourceslist.push(index); index ++; }
  });

  let tempSec = document.createElement('section');
  tempSec.id = "main-modal";
  newElement = document.getElementById("main").insertAdjacentElement('afterend',tempSec);
  newElement.innerHTML = interactionModalHTML + '</div></div>';

  let parentelement = document.getElementsByClassName("modal-body")[0];
  let tbl = makeHTMLTable2("buy", targetresourceslist.length, 7);
  openModal("interactionModal");
  parentelement.appendChild(tbl);
  tbl.setAttribute("id", "buy"); 

  let exebutton = document.createElement("button");
  exebutton.id = "execute";
  exebutton.setAttribute("class", "button"); 
  exebutton.setAttribute("onclick", "executeInteraction()");
  exebutton.innerText = "Execute";
  parentelement.appendChild(exebutton);
  
openModal("interactionModal");
populateTable(targetplanet, interactiontype);

}


function makeHTMLTable2(tablename, nrows, ncolumns) {
  let tbl = document.createElement("table");
  let tblBody = document.createElement("tbody");

  for (let i = -1; i < nrows; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < ncolumns; j++) {
      let cell = document.createElement("td");
      if (i == -1) {
        cell = document.createElement("th");
      }
      let cellText = document.createTextNode("cell in row "+i+", column "+j);
      cell.setAttribute("id", "r-" + i + "-c-" + j)
      // can delete the next line when development is complete
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  return tbl; 
}


function cloneResource(originalresource, resourcetype) {
  let newresource = new resourcetype(originalresource.name, 0);
  list1 =Object.getOwnPropertyNames(originalresource);
  list1.forEach(element => {
      console.log(originalresource[element]);
      newresource[element] = originalresource[element];
  });    
  return newresource;
}


function executeInteraction()  {
  let tblparent = document.getElementsByClassName("modal-body")[0];
  let interactiontype = tblparent.firstElementChild.id;
  let temp_num_resources = document.getElementById(interactiontype).rows.length - 1;    // minus 1 to account for header row

  let sellers_resources, buyers_resources;
  if (interactiontype == "buy" || interactiontype == "mine" ) {
    sellers_resources = ships[0].currentplanet.resources;
    buyers_resources = ships[0].resources;
  } else if (interactiontype == "sell") {
    sellers_resources = ships[0].resources;
    buyers_resources = ships[0].currentplanet.resources;
  } else {
      alert("We have defined a type that doesn't yet have interaction code.")
  }

  for (let index = 0; index < temp_num_resources; index++) {
    // need to add costs and profits of buying, selling, and mining
    let transferamount = document.getElementById("inp" + index).value;
    if (transferamount.length > 0) {
      transferamount  = parseInt(transferamount);
      const targetresourcename = document.getElementById("r-" + index + "-c-0").innerHTML;
      let sellersindex = findIndexofMatch(sellers_resources, "name", targetresourcename);

      let resource_already_in_buyers_list = false;
      buyers_resources.forEach(element => {        // if resource is already listed in buyers list, simply add quantity
        if (element.name == targetresourcename) {  
          resource_already_in_buyers_list = true;
          element.amount = element.amount + transferamount;
          sellers_resources[sellersindex].amount = sellers_resources[sellersindex].amount - transferamount;
          // break;
        }
      });
      if (resource_already_in_buyers_list == false) {   // resource wasn't already listed so add it to the list
        let newresource =  cloneResource(sellers_resources[sellersindex], Resource);
        newresource.amount = transferamount;
        buyers_resources.push(newresource);
        sellers_resources[sellersindex].amount = sellers_resources[sellersindex].amount - transferamount;
      }


    }   

  }

  document.getElementById("main-modal").remove();

}


function populateTable(targetplanet, interactiontype) {    // puts the data in the interaction table opened in the modal
  if (interactiontype == "buy") {
    // console.log(targetplanet.name, targetplanet.name, targetplanet.name, targetplanet.name, targetplanet.name);
    document.getElementById("interactionModalHeader").innerText = "Buy Some Stuff at " + targetplanet.name;
    for (let index = 0; index < buytable.length; index++) { 
      document.getElementById("r--1-c-" + index).innerText = buytable[index];
    }
    let index1 = 0;
    targetplanet.resources.forEach(element => {
      if (element.interactiontype == "buy") {
        document.getElementById("r-" + index1 + "-c-" + 0).innerText = element.name;
        document.getElementById("r-" + index1 + "-c-" + 1).innerText = element.amount;      
        document.getElementById("r-" + index1 + "-c-" + 2).innerText = "";
        document.getElementById("r-" + index1 + "-c-" + 3).innerText = "";  
        document.getElementById("r-" + index1 + "-c-" + 4).innerText = element.cost;
        let inputbox = '<input id="inpx" class="large" type="number" min="0" max="1000" step="1">'.replace(/x/g, index1);
        document.getElementById("r-" + index1 + "-c-" + 5).innerHTML = inputbox;      
        document.getElementById("r-" + index1 + "-c-" + 6).innerText = "";
        index1 ++;         
      }      
    }); 

  }
  
}



function openModal(modalName) {         // open a generic modal
  var modal = document.getElementById(modalName);
  // console.log(modalName);
  modal.style.display = "block";
  if (modalName == "settingsModal") {
    readSliders("colorrange", "colorrangenum");
    readSliders("heightrange", "heightrangenum");
  }
  if (modalName == "gameWonModal") { showFinalStats(); }

  // Get the <span> element that closes the modal
  let modalNum = 0;
  if (modalName == "settingsModal") { modalNum = 1; }
  var span = document.getElementsByClassName("close")[modalNum];

  // When the user clicks on <span> (x), close the and remove the modal
  span.onclick = function() {
    document.getElementById("main-modal").remove();
    // modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close and remove it
  window.onclick = function(event) {
    if (event.target == modal) {
      document.getElementById("main-modal").remove();
      // modal.style.display = "none";
    }
  }
}