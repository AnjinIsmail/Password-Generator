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
  charactors = "";
  passWord = "";
  upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  lowerCase = "abcdefghijklmnopqrstuvwxyz";
  Numerical = "0123456789";
  specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}";
  

  window.alert(
    "Password Criteria:\n\nMust be between 8 and 128 characters.\nMust contain at least one uppercase, or capital letter.\nMust containt at least one lowercase letter.\nMust contain at least one digit.\nMust contain at least one special character."
  );

  lengthCondition = true
  while (lengthCondition) {
    var myLength = parseInt(window.prompt(
      "Please enter the length of the password you want to create:\n Note : Character lenght needs to be at least 8 to 128"
    ));
    if (myLength > 8 && myLength < 128){
      lengthCondition = false
    }
    if (myLength < 8) {
      window.alert(
        "The minimum password length is 8. Please enter a valid number"
      );
      lengthCondition = true;
    }
    if (myLength > 128) {
      window.alert(
        "The maximum password length is 128. Please enter a valid number"
      );
      lengthCondition = true;
    }
  }


  var upperconfirm = window.confirm("Do you want Upper case?");
  if (upperconfirm) {
    charactors = charactors + upperCase;
  } else {
    charactors = charactors + "";
  }

  var lowerconfirm = window.confirm("Do you want Lower case?");
  if (lowerconfirm) {
    charactors = charactors + lowerCase;
  } else {
    charactors = charactors + "";
  }

  var Numericalconfirm = window.confirm("Do you want Numbers?");
  if (Numericalconfirm) {
    charactors = charactors + Numerical;
  } else {
    charactors = charactors + "";
  }

  var specialCharactersconfirm = window.confirm(
    "Do you want Special characters?"
  );
  if (specialCharactersconfirm) {
    charactors = charactors + specialCharacters;
  }

  for (i = 0; i < myLength; i++) {
    generate = Math.floor(Math.random() * charactors.length + 1);
    passWord = passWord + charactors.charAt(generate);
  }

  return passWord;
}