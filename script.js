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

var generatePassword = function () {
  charactors = ""
  passWord = ""
  upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  lowerCase = "abcdefghijklmnopqrstuvwxyz"
  Numerical = "0123456789"
  specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}"


  window.alert("Your password must be between 8 and 128 characters.\n\nYour password must contain at least one uppercase, or capital, letter (ex: A, B, etc.).\n\nYour password must containt at least one lowercase letter.\n\nYour password must contain at least one number digit (ex:0, 1,2, etc).\n\nYour password must contain at least one special character (ex: $, %, *, etc) ");


  var myLength = window.prompt("Please enter the lenght of the password you want to create:\n Note : Character lenght needs to be at least 8 to 128")
  if (myLength < 8 )
    window.prompt("The minimum password length is 8. Please enter a valid number");



  var upperconfirm = window.confirm("Do you want Upper case?")
  if (upperconfirm) {
    charactors = charactors + upperCase
    console.log(charactors)
  }
  else {
    charactors = charactors + ""
  }

  var lowerconfirm = window.confirm("Do you want Lower case?")
  if (lowerconfirm) {
    charactors = charactors + lowerCase
    console.log(charactors)
  }
  else {
    charactors = charactors + ""
  }

  var Numericalconfirm = window.confirm("Do you want Numbers?")
  if (Numericalconfirm) {
    charactors = charactors + Numerical
    console.log(charactors)
  }
  else {
    charactors = charactors + ""
  }


  var specialCharactersconfirm = window.confirm("Do you want Special characters?")
  if (specialCharactersconfirm) {
    charactors = charactors + specialCharacters
    console.log(charactors)

  }


  for (i = 0; i < myLength; i++) {
    generate = Math.floor(Math.random() * charactors.length + 1);
    passWord = passWord + charactors.charAt(generate)

  }

  console.log(passWord);
  return passWord
}