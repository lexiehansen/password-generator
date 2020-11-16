// Assignment code here

//variables
var passwordLength = "";
var confirmUppercase;
var confirmLowercase;
var confirmNumbers;
var confirmSpecialCharacters;


//arrays
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]; 

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];

var password = [];


//generate function
function generatePassword() {
  //password length pop up
  var passwordLength = (prompt("How long would you like your password to be? Enter a numerical value between 8 and 128."));
    if (passwordLength <= 7 || passwordLength >= 129) {
      window.alert("Please enter a number between 8 and 128.")
    }

  //variables pop ups
  confirmUppercase = confirm("Click OK if you would like to use uppercase letters.")
  confirmLowercase = confirm("Click OK if you would like to use lowercase letters.")
  confirmNumbers = confirm("Click OK if you would like to use numbers.")
  confirmSpecialCharacters = confirm("Click OK if you would like to use special characters.")
    //checking for pop up answer
    while(lowerCase === false && upperCase === false && numbers === false && special === false){
      alert("Please choose at least one character type.")
      confirmUppercase = confirm("Click OK if you would like to use uppercase letters.")
      confirmLowercase = confirm("Click OK if you would like to use lowercase letters.")
      confirmNumbers = confirm("Click OK if you would like to use numbers.")
      confirmSpecialCharacters = confirm("Click OK if you would like to use special characters.")
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
