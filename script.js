// Assignment code here
var passwordLength = "";
var confirmUppercase;
var confirmLowercase;
var confirmNumbers;
var confirmSpecialCharacters;

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]; 

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];

var password = [];

function generatePassword() {

  var passwordLength = (prompt("How long would you like your password to be? Enter a numerical value between 8 and 128."));

  if (passwordLength <= 7 || passwordLength >= 129) {
    window.alert("Please enter a number between 8 and 128.")
  }

};
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
