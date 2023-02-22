var generateBtn = document.querySelector("#generate");

var numeric = "0123456789";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "~!@#$%^&*(){}[]:;<>?/-_+=|";
var pwd = {
  numeric: false,
  lower: false,
  upper: false,
  special: false
};
  
function validatePwdLength() {
  var length = prompt("Enter a desired password length between 8 and 128 characters.");
  if (length >=8 && length <= 128) {
    return length;
  }  else {
    return validatePwdLength();
  }
}

function validatePwdPrompts() {
  while (!pwd.numeric && !pwd.lower && !pwd.upper && !pwd.special){
    window.alert("Please select OK on at least one of the following prompts.");
    pwd.numeric = window.confirm("Does your password require numbers? Click OK to continue, and Cancel to skip.");
    pwd.lower = window.confirm("Does your password require lowercase letters? Click OK to continue, and Cancel to skip.");
    pwd.upper = window.confirm("Does your password require upper case letters? Click OK to continue, and Cancel to skip.");
    pwd.special = window.confirm("Does your password require special characters? Click OK to continue, and Cancel to skip.");
  }
}

// Functhion runs validate password length function and validate password promps function.
function collectInfo() {
  var length = validatePwdLength();
  validatePwdPrompts();
  return { length: length, pwd: pwd };
}

// Function runs collect info function and rondomizes.
function generatePwd(){
  var info = collectInfo();
  var password = '';

  // let pwd = '';
  var iterator = 1;

  while (iterator <= info.length){

    if (info.pwd.numeric && iterator <= info.length){
      password += numeric[Math.floor(Math.random() * numeric.length)];
      iterator++;
    }

    if (info.pwd.lower && iterator <= info.length){
      password += lower[Math.floor(Math.random() * lower.length)];
      iterator++;
    }

    if (info.pwd.upper && iterator <= info.length){
      password += upper[Math.floor(Math.random() * upper.length)];
      iterator++;
    }

    if (info.pwd.special && iterator <= info.length){
      password += special[Math.floor(Math.random() * special.length)];
      iterator++
    }

  }
  
  return password;
}

// Write password to the #password input
function writePwd() {
  var password = generatePwd();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate password button
generateBtn.addEventListener("click", writePwd);