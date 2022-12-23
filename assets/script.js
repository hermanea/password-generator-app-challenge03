var generateBtn = document.querySelector("#generate");

let pwd = {
  pwdLength: 0,
  numbers: "0123456789",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  uniqueCharacters: "~!@#$%^&*(){}[]:;<>?/-_+=|",
  numeric: false,
  lower: false,
  upper: false,
  special: false,
}

function validatepwdLength() {
  let toContinue = true;
  while (toContinue) {
    try {
      pwd.pwdLength = parseInt(window.prompt("Enter a desired password length between 8 and 128 characters."));
 
    if (pwd.pwdLength && (pwd.pwdLength >= 8 && pwd.pwdLength <= 128)){
      toContinue = false;}
    }
  } 
}

function validatepwdPrompts() {
  while (!pwd.numeric && !pwd.lower && !pwd.upper && !pwd.special){
    window.alert("Please select OK on at least one of the following prompts.");
    pwd.numeric = window.confirm("Does your password require numbers? Click OK to continue, and Cancel to skip.");
    pwd.lower = window.confirm("Does your password require lowercase letters? Click OK to continue, and Cancel to skip.");
    pwd.upper = window.confirm("Does your password require upper case letters? Click OK to continue, and Cancel to skip.");
    pwd.special = window.confirm("Does your password require special characters? Click OK to continue, and Cancel to skip.");
  }
}

function collectInfo() {
  validatepwdLength();
  validatepwdPrompts();
}

function generatePassword(){
  collectInfo();

  let password = '';
  let iterator = 1;

  while (iterator <= pass.passLength){

    if (pwd.numeric & iterator <= pwd.pwdLength){
      password += pwd.numeric[Math.floor(Math.random() * pwd.numeric.length)];
      iterator++;
    }

    if (pwd.lower & iterator <= pwd.pwdLength){
      password += pwd.lowercase[Math.floor(Math.random() * pwd.lowercase.length)];
      iterator++;
    }

    if (pwd.upper & iterator <= pwd.pwdLength){
      password += pwd.uppercase[Math.floor(Math.random() * pwd.uppercase.length)];
      iterator++;
    }

    if (pwd.uniqueCharacters & iterator <= pwd.pwdLength){
      password += pass.uniqueCharacters[Math.floor(Math.random() * pwd.uniqueCharacters.length)];
      iterator++
    }

  }
  
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);