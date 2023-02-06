var generateBtn = document.querySelector("#generate");

let pwd = {
  numeric: "0123456789",
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  special: "~!@#$%^&*(){}[]:;<>?/-_+=|"
  }

function validatePwdLength() {
  var pwdLength = 0;
  var length = prompt("Enter a desired password length between 8 and 128 characters.");
  if (length >=8 && length <= 128) {
    pwdLength = length
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
  validatePwdLength();
  validatePwdPrompts();
}

// Function runs collect info function and rondomizes.
function generatePwd(){
  collectInfo();

  let pwd = '';
  let iterator = 1;

  while (iterator <= length){

    if (pwd.numeric & iterator <= pwd.length){
      password += pwd.numeric[Math.floor(Math.random() * pwd.numeric.length)];
      iterator++;
    }

    if (pwd.lower & iterator <= pwd.length){
      password += pwd.lower[Math.floor(Math.random() * pwd.lower.length)];
      iterator++;
    }

    if (pwd.upper & iterator <= pwd.length){
      password += pwd.upper[Math.floor(Math.random() * pwd.upper.length)];
      iterator++;
    }

    if (pwd.special & iterator <= pwd.length){
      password += pwd.special[Math.floor(Math.random() * pwd.special.length)];
      iterator++
    }

  }
  
  return pwd;
}

// Write password to the #password input
function writePwd() {
  var password = generatePwd();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate password button
generateBtn.addEventListener("click", writePwd);