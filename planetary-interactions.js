///////////////           Functions involved in planetary interactions                     ///////////////////////////////////////

function visitPlanet(systemNum, index, bodytype) {  // clicking on a planet or star takes the ship to that celestial body for interactions
  createMainSection("grid-section2"); 
  let slotNum = 0;
  drawACelestialBody(systemNum, slotNum, index, bodytype, true);
  let temp1 = "interaction-planet";
  if (bodytype == "stars") { temp1 = "interaction-star"; }
  // next line outputs the possible interactions with the planet and adds listeners to each line
  populateBreifDetails(planet_visit_info_list, planet_visit_info_list_suffix, temp1, index, slotNum, systemNum);
  // console.log(bodytype, bodytype, bodytype, bodytype);
  slotNum += 1;
  drawControlPannelIcon(slotNum, cp_icons[0]);
  ships[0].currentplanet = systems[systemNum].planets[index];       // assuming we are in orbit around a planet otherwise execute next line
  if (bodytype == "stars") { ships[0].currentplanet = systems[systemNum].stars[index]; }
}

// this function opens the modal, populates the model, and executes the interaction when the button is clicked
function prepareInteraction(interactiontype) {      // master function for preparing interactions with a planet

  let tempSec = document.createElement('section');
  tempSec.id = "main-modal";
  newElement = document.getElementById("main").insertAdjacentElement('afterend',tempSec);
  newElement.innerHTML = interactionModalHTML + '</div></div>';
  let parentelement = document.getElementsByClassName("modal-body")[0];

  let [tableheader, tabledata] = generateDataForSpecificInteraction(interactiontype);
  let tbl = makeHTMLTable2(interactiontype, tabledata.length, tableheader.length)  
  openModal("interactionModal");
  parentelement.appendChild(tbl);
  tbl.setAttribute("id", "buy");
  dataIntoHTMLTable(tableheader, tabledata);

  let exebutton = document.createElement("button");
  exebutton.id = "execute";
  exebutton.setAttribute("class", "button"); 
  exebutton.setAttribute("onclick", "executeInteraction()");
  exebutton.innerText = "Execute";
  parentelement.appendChild(exebutton);

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


function executeInteraction()  {
  let tblparent = document.getElementsByClassName("modal-body")[0];
  let interactiontype = tblparent.firstElementChild.id;
  let temp_num_resources = document.getElementById(interactiontype).rows.length - 1;    // minus 1 to account for header row

  let directionmultiplier = +1;   // the interaction is a buy or mine
  if (interactiontype == "sell") { directionmultiplier = -1; }

  // 8888888888888888888888888888888888888888888888888888888888888888888888888
  // cycle through appropriate (buy, sell, mine) resources of planet and conduct transaction on each on
  let inputindex = 0;
  ships[0].currentplanet.resources.forEach(a_resource => {
    if (a_resource.interactiontype == interactiontype) {
      // find mathcing index
      let transferamount = document.getElementById("inp" + inputindex).value;
      let shipresourceindex = findIndexOfMatchingObject(a_resource, "name", ships[0].resources, "name");
      // add/subtract transfer amount for planet, subtract/add transfer amount to from ship, add/subtract money or energy to ship
      // update cargo
      a_resource.amount = a_resource.amount - (transferamount * directionmultiplier);
      ships[0].resources[shipresourceindex].amount = ships[0].resources[shipresourceindex].amount + (transferamount * directionmultiplier);     

      // console.log('Inputindex:  ' + inputindex);
      inputindex++;
    
    }
    
  });

  // 8888888888888888888888888888888888888888888888888888888888888888888888888

  // let sellers_resources, buyers_resources;
  // if (interactiontype == "buy" || interactiontype == "mine" ) {
  //   sellers_resources = ships[0].currentplanet.resources;
  //   buyers_resources = ships[0].resources;
  // } else if (interactiontype == "sell") {
  //   sellers_resources = ships[0].resources;
  //   buyers_resources = ships[0].currentplanet.resources;
  // } else {
  //     alert("We have defined a type that doesn't yet have interaction code.")
  // }

  // for (let index = 0; index < temp_num_resources; index++) {
  //   // need to add costs and profits of buying, selling, and mining
  //   let transferamount = document.getElementById("inp" + index).value;
  //   if (transferamount.length > 0) {
  //     transferamount  = parseInt(transferamount);
  //     const targetresourcename = document.getElementById("r-" + index + "-c-0").innerHTML;
  //     let sellersindex = findIndexofMatch(sellers_resources, "name", targetresourcename);

  //     let resource_already_in_buyers_list = false;
  //     buyers_resources.forEach(element => {        // if resource is already listed in buyers list, simply add quantity
  //       if (element.name == targetresourcename) {  
  //         resource_already_in_buyers_list = true;
  //         element.amount = element.amount + transferamount;
  //         sellers_resources[sellersindex].amount = sellers_resources[sellersindex].amount - transferamount;
  //         // break;
  //       }
  //     });
  //     if (resource_already_in_buyers_list == false) {   // resource wasn't already listed so add it to the list
  //       let newresource =  cloneResource(sellers_resources[sellersindex], Resource);
  //       newresource.amount = transferamount;
  //       buyers_resources.push(newresource);
  //       sellers_resources[sellersindex].amount = sellers_resources[sellersindex].amount - transferamount;
  //     }
  //   }   
  // }


  
  document.getElementById("main-modal").remove();
}



function openModal(modalName) {         // open a generic modal
  var modal = document.getElementById(modalName);
  modal.style.display = "block";

  let modalNum = 0;       // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[modalNum];

  span.onclick = function() {     // When the user clicks on <span> (x), close the and remove the modal
    document.getElementById("main-modal").remove();
    // modal.style.display = "none";
  }

  window.onclick = function(event) {      // When the user clicks anywhere outside of the modal, close and remove it
    if (event.target == modal) {
      document.getElementById("main-modal").remove();
      // modal.style.display = "none";
    }
  }
}


function generateDataForSpecificInteraction(interactiontype) {    // puts the data in the interaction table opened in the modal
  // future:  replace with dashboard indicators

  let datasources = [ships[0], ships[0].currentplanet];
  let generic_interaction = interaction_dict[interactiontype];

  let tableheader = [];
  let tabledata = [];
  for (let index = 0; index < generic_interaction.length; index++) { 
    tableheader.push(generic_interaction[index][0]);
  }

  ships[0].currentplanet.resources.forEach(body_resource => {
    // console.log(body_resource.name);
    if (body_resource.interactiontype == interactiontype) {        
      let tablerow = [];
      for (let colnum = 0; colnum < generic_interaction.length; colnum++) {
        let individualdataelement = "";
        if (generic_interaction[colnum][2] == 1) {
          individualdataelement = body_resource[generic_interaction[colnum][1]];
        } else {
          individualdataelement = "none";
        } 
        // console.log(individualdataelement);
        if (colnum == 4) {
          individualdataelement = '<input id="inpx" class="large" type="number" min="0" max="1000" step="1">'.replace(/x/g, tabledata.length);
        }
        tablerow.push(individualdataelement);
      }
      tabledata.push(tablerow);
    }      
  }); 
  return [tableheader, tabledata];
}


function dataIntoHTMLTable(headerrow, tabledata) {
  for (let rownum = -1; rownum < tabledata.length; rownum++) {
    let datarow = headerrow;
    if (rownum > -1 ) { datarow = tabledata[rownum]; }
    for (let colnum = 0; colnum < headerrow.length; colnum++) {
      document.getElementById("r-" + rownum + "-c-" + colnum).innerHTML = datarow[colnum];      
    }
  }
}



// let shipresourceindex = findIndexOfMatchingObject(a_resource, "name", ships[0].resources, "name");

function findIndexOfMatchingObject(obj1, param1, listobj2, param2) {  // returns the index of the object in list2 with paramaters matching object1
  let matchindex = false;
  for (let index = 0; index < listobj2.length; index++) {
    // console.log(obj1[param1] + '  ' + listobj2[index][param2] + '  ' + (obj1[param1] == listobj2[index][param2]) + '  '  + index);
    if (obj1[param1] == listobj2[index][param2]) { matchindex = index; }
  }

  if (matchindex === false) {
    // clone resource and push onto list
    if (listobj2.length > 0) {  console.log(obj1[param1] + '   ' + listobj2[0][param2]);   }

    let newobj =  cloneResource(obj1, Resource);
    newobj.amount = 0;
    listobj2.push(newobj);
    matchindex = listobj2.length - 1;
  }
  return matchindex
}


function cloneResource(originalresource, resourcetype) {
  let newresource = new resourcetype(originalresource.name, 0);
  list1 =Object.getOwnPropertyNames(originalresource);
  list1.forEach(element => {
      // console.log(originalresource[element]);
      newresource[element] = originalresource[element];
  });    
  return newresource;
}


// let newresource =  cloneResource(sellers_resources[sellersindex], Resource);
// newresource.amount = transferamount;
// buyers_resources.push(newresource);