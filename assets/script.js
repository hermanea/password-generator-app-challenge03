// Assignment Code

// Global Variables
var specialCharacters = [];
var numericCharacters = [];
var lowerCasedCharacters = [];
var uppderCasedCharacters = [];

var length;
var result = "";
var availableChars = []

var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // own function?
  // prompt for length of the password
  // check if valid length, if wrong prompt again

  // ask for different types of characters
  // 4 confirms for each type
  // validate they selected at least one

  // separate function
  // iterate length number of times
  // select random char from available char
  // add to result






  return result
}

