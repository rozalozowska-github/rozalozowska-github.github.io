var contactBox = document.getElementById("contactBox");
var blurred = document.getElementById("blurred");
var contactBtn = document.getElementById("contactButton");
var closeBtn = document.getElementsByClassName("contact__close")[0];
contactBtn.onclick = function() {
	console.log(event.target);
  	contactBox.style.display = "block";
}
closeBtn.onclick = function() {
  contactBox.style.display = "none";
  	console.log(contactBox);
}
//// Listen to all clicks on the document
//document.addEventListener('click', function (event) {
//	var clickedElem = event.target;
//	// Check if the event.target matches some selector, and do things...
//}, false);
// When the user clicks anywhere outside of the modal, close it
//window.addEventListener("click", function() {
//  	console.log(event.target);
//	if (event.target == blurred) {
//		console.log(event.target);
//		contactBox.style.display = "none";
//	}
//})


window.onclick = function(event) {
	console.log(contactBox);
  if (event.target == contactBox) {
  	console.log(contactBox);
    contactBox.style.display = "none";
  }
}



function closeContact() {
  document.getElementById("contact").style.display = "none";
  document.getElementById("blurred").classList.remove("blur");
}


function openNav() {
  document.getElementById("mySidenav").style.left = "0";
  document.getElementById("mySidenav").classList.add("open");
  document.getElementById("blurred").classList.add("blur");

}

function closeNav() {
  document.getElementById("mySidenav").style.left = "-100%";
  document.getElementById("mySidenav").classList.remove("open");
  document.getElementById("blurred").classList.remove("blur");
}