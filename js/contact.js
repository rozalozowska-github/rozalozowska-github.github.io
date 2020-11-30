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

window.onclick = function(event) {
  if (event.target == contactBox) {
    contactBox.style.display = "none";
  }
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

var mymap = L.map('mapid').setView([54.3716782, 18.614139], 17);