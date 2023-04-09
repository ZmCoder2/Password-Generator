// Defines the arrays for each character type
var generateBtn = document.querySelector("#generate"); //targets the generate id, what is the generate id?
var lowercaseChars = "abcdefghijklnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLONPQURSTUVWXYZ";
var numberChars = "1234567890";
var specialChars = "=+!@#$%^&*()[]";
var password = "";

// The function is used condense and organize the code block to reuse the variables and methods
function generatePassword() {
   // 1. Prompt the user for the password criteria
  passwordLength = prompt("How long would you like you password to be? Has to be at least 8 characters and no more than 128 characters in length.");
   // length at least 8 characters and no more than 128 characters / if statement
   //
   if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) { 
   alert("Please enter a valid number between 8 and 128.");
  // return statement to return the user to the original question when invalid number is entered 
   return generatePassword();
   }
   // Used a false booleans for the form to not submit
  // 2. validates the input value
  var lowerCase = false;
  var upperCase = false;
  var numbers = false;
  var special = false;
  if (!(lowerCase || upperCase || numbers || special)) {
    //the window.confirm is used to display the questions.
    lowerCase = window.confirm("Include lowercase letters?");
    upperCase = window.confirm("Include uppercase letters?");
    numbers = window.confirm("Include numbers?");
    special = window.confirm("Include special characters?");
    //Used the if statement with the logical operator to make sure the that the user selects one of the character types
    if (!(lowerCase || upperCase || numbers || special)) {
      // alerts the user if they do not select at least one option.
      alert("Please select at least one character type.");
      // returns the user to the first question.
      return generatePassword();
    }
  }
  // created a variable for what the user selected to match have their choices run with their other selected options.
  var selectedChars = "";
  // 3. generate password on criteria
    if (lowerCase) {
      selectedChars += lowercaseChars;
    }
    if (upperCase) {
      selectedChars += uppercaseChars;
    }
    if (numbers) {
      selectedChars += numberChars;
    }
    if (special) {
      selectedChars += specialChars;
    }
  //This variable is used to display the options they chose.
  // 3. generate password on criteria
  var passwordGenerator = "";
  for (var i = 0; i < passwordLength; i++) {
    // Had to use charAt() method to return the chosen option within the string
    passwordGenerator += selectedChars.charAt(Math.random() * selectedChars.length);
    // Math.random randomizes the characters selected length was used to display the amount selected
  }
  //4. Display generate password on the page
  var passwordText = document.querySelector("#password");
  passwordText.textContent = passwordGenerator;
}
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
// when the user clicks the generate button it will call the writePassword function()
