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

//generate function
function generatePassword() {

  //password length pop up
  var passwordLength = (prompt("How long would you like your password to be? Enter a numerical value between 8 and 128."));
    
  console.log("Selected password length is " + passwordLength)

  if (passwordLength <= 7 || passwordLength >= 129) {
      alert("You must choose a value between 8 and 128. Please try again.")
    }

    else {
      //choose info pop ups
      confirmUppercase = confirm("Click OK if you would like to use uppercase letters.")
      confirmLowercase = confirm("Click OK if you would like to use lowercase letters.")
      confirmNumbers = confirm("Click OK if you would like to use numbers.")
      confirmSpecialCharacters = confirm("Click OK if you would like to use special characters.")
        
        //checking for pop up answer
        while(confirmUppercase === false && confirmLowercase === false && confirmNumbers === false && confirmSpecialCharacters === false){
          alert("Please choose at least one character type.")
          confirmUppercase = confirm("Click OK if you would like to use uppercase letters.")
          confirmLowercase = confirm("Click OK if you would like to use lowercase letters.")
          confirmNumbers = confirm("Click OK if you would like to use numbers.")
          confirmSpecialCharacters = confirm("Click OK if you would like to use special characters.")
        }
    }

    //generating password info with concatenates
    var passwordInfo = []

     if (confirmUppercase) {
       passwordInfo = passwordInfo.concat(uppercase)
     }

     if (confirmLowercase) {
       passwordInfo = passwordInfo.concat(lowercase)
     }

     if (confirmNumbers) {
       passwordInfo = passwordInfo.concat(numbers)
     }

     if (confirmSpecialCharacters) {
       passwordInfo = passwordInfo.concat(specialCharacters)
     }

     console.log("List of variables chosen to be randomized: " + passwordInfo)

     //generating password
     var generatedPassword = ""

     for (i=0; i<passwordLength; i++) {
      generatedPassword = generatedPassword + passwordInfo[Math.floor(Math.random() * passwordInfo.length)]
    }

    console.log("Randomly generated password is " + generatedPassword)

    return generatedPassword;
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
