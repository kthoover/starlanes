

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