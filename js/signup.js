function passvalue(){
  var name = document.getElementById("name").value;
  localStorage.setItem("name", name);
  return false;
}

// toggle password visibility
function myFunction1() {
var x = document.getElementById("psw");
if (x.type === "password") {
  x.type = "text";
} else {
  x.type = "password";
}
}

function myFunction2() {
var y = document.getElementById("psw-repeat");
if (y.type === "password") {
  y.type = "text";
} else {
  y.type = "password";
}
}

// Confirm Password match with password
var password = document.getElementById("psw"), 
confirm_password = document.getElementById("psw-repeat");

function validatePassword(){
  if(password.value != confirm_password.value) {
      confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
      confirm_password.setCustomValidity('');
  }
}
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;