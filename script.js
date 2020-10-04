// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var generatePassword =function() {
  window.prompt("Your password must be between 8 and 128 characters.\n\nYour password must contain at least one uppercase, or capital, letter (ex: A, B, etc.).\n\nYour password must containt at least one lowercase letter.\n\nYour password must contain at least one number digit (ex:0, 1,2, etc).\n\nYour password must contain at least one special character (ex: $, %, *, etc) ")
  
  }; 
  