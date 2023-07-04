// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
const parameters = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: "!@#$%^&*)(",
};

function generatePassword() {
  var passwordCharSet = "";
  var length = prompt("Specify password length, between 8 and 128");

  var lowercase = confirm("Include lowercase characters?");
  if (lowercase) {
    passwordCharSet += parameters.lowercase;
  };

  var uppercase = confirm("Include uppercase characters?");
  if (uppercase) {
    passwordCharSet += parameters.uppercase;
  };

  var symbols = confirm("Include symbols?");
  if (symbols) {
    passwordCharSet += parameters.symbol;
  };

  var numbers = confirm("Include numbers?");
  if (numbers) {
    passwordCharSet += parameters.number;
  };
  var password = "";
  for (let i = 0; i < length; i++) {
    password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  }
  return password;
}
;

function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


