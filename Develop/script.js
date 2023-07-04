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
  // Prompt for password length, and add to variable "length"
  var passwordCharSet = "";
  var length = prompt("Specify password length, between 8 and 128");

  // Confirm for lowercase, if true, add lowercase letters to password character set
  var lowercase = confirm("Include lowercase characters?");
  if (lowercase) {
    passwordCharSet += parameters.lowercase;
  };

  // Confirm for uppercase, if true, add uppercase letters to password character set
  var uppercase = confirm("Include uppercase characters?");
  if (uppercase) {
    passwordCharSet += parameters.uppercase;
  };

  // Confirm for symbols, if true, add special characters to password characterset
  var symbols = confirm("Include symbols?");
  if (symbols) {
    passwordCharSet += parameters.symbol;
  };

  // Confirm for numbers, if true, add numbers to password characterset
  var numbers = confirm("Include numbers?");
  if (numbers) {
    passwordCharSet += parameters.number;
  };
  // Generate password and return
  var password = "";
  for (let i = 0; i < length; i++) {
    password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  }
  return password;
}
;

// Display password
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


