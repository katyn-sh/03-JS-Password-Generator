// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var parameters = [];


function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function writePassword() {
  var length = prompt("Please enter password length between 8 and 128 characters");
  parameters.push(length);

  var pwUCase = confirm("Do you want uppercase characters?");
  parameters.push(pwUCase);

  var pwLCase = confirm("Do you want lowercase characters?");
  parameters.push(pwLCase);

  var pwNum = confirm("Do you want numeric characters?");
  parameters.push(pwNum);

  var pwSpec = confirm("Do you want special characters?");
  parameters.push(pwSpec);


  // if (parameters[1]=1) {
  //   var 
  // }
}
console.log(parameters);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


