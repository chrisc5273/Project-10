/*const myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
const close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    const div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("myInput").value;
  
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      const div = this.parentElement;
      div.style.display = "none";
    }
  }
}
//This is the end of the task list code

//this is the beginning of the mouse on and mouse over events
function mouseClick(){
  document.getElementsById("div").style.backgroundColor="red"
}

function mouseOver(x){
x.style.height = "100px";
x.style.width = "100px";
}
//this is the code for the background color changer
const body = document.querySelector('.main');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');
function toggleMode() {
body.classList.toggle('dark-mode');

const modeMessage = body.classList.contains('dark-mode') ?
    'Dark Mode'
    : "Light Mode"

modeStatus.innerText = "Changed to " + modeMessage;
  }

modeToggle.addEventListener('click', toggleMode);*/

// this is list sorter

function Addnum() {
  const li = document.createElement("li");
  const inputNum = document.getElementById("inputNum").value;

  const sortNum = inputNum.sort();
  
  
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if(inputNum.value === ""){
    alert("enter Number");
  }
  else if(inputNum.value %2 ==0){
    alert("it is as an even number");
  }
  else{
    alert("it is an even numner");
  }

}

