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

modeToggle.addEventListener('click', toggleMode);




$('.form-header').css({
  'font-size': '20px',
  'font-weight': 'italicized',
  'float': 'left'
});
  /* code here */


//Contact form validation begins below here



function validation(){
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const emailAddress = document.getElementById('email').value;

  const msgError = document.getElementById("Error-msg");

  
  if(firstName == null || firstName== ''){
       msgError.innerHTML = 'First Name Required';
    return false;
  }
 if(lastName == null || lastName == ''){
   msgError.innerHTML = "Last Name Reuqired";
    return false
  }
   if(emailAddress == null || emailAddress == ''){
   msgError.innerHTML = 'Email invalid';
    return false
  }
  alert("form submitted");
  return true;
}/*
function validateFirstName(){
  if(firstName.length == null || firstName.value == ''){
   
    FNameError.innerHTML = 'First Name Required';
    return false;
  }
  FNameError.innerHTML = 'Valid';
  return true;
}

function validateLName(){
  if(lastName.length == null || lastName.value == ''){
    lNameError.innerHTML = "Last Name Reuqired";
  }
  lNameError.innerHTML = 'Valid';
  return true;
}

function ValidateEmail(){
  if(emailAddress.value == null || emailAddress.value == ''){
    EmailError.innerHTML = 'Email invalid';
  }
  if(!emailAddress.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    EmailError.innerHTML = 'Email invalid';
    return false;
  }
  EmailError.innerHTML = 'Good';
  return true;
}*/