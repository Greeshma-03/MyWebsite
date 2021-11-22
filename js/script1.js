
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;



function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



function effect(x) {
  x.style.color = "rgb(237, 243, 238)";
  x.style.background = "rgb(29, 197, 253)";
}

function normal(x) {
  x.style.color = "black";
  x.style.background = "rgb(85, 206, 61)";
}


var count = 0;
var imgchange = document.getElementById("clickchange");
var click_images = ["../img/ABD.jpg", "../img/PKL.jpg", "../img/badminton.jpg", "../img/bb.jpg", "../img/race.jpg"];
imgchange.src = click_images[count];


function changeImg() {
  count = (count + 1) % click_images.length;
  imgchange.src = click_images[count];
  imgchange.classList.add("thumbnail");
}


function addRow() {

  var name = document.getElementById("name");
  var skill = document.getElementById("skill");
  var level = document.getElementById("level");
  var table = document.getElementById("mytable");

  var rowcell = table.insertRow(table.rows.length);

  rowcell.insertCell(0).innerHTML = name.value;
  rowcell.insertCell(1).innerHTML = skill.value;
  rowcell.insertCell(2).innerHTML = level.value;

}

