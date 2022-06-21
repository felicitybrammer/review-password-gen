// Assignment code here
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


function getPwOptions() {
  var length = parseInt(prompt("Please enter the number of characters to include in your new password:"));

  //check that input is a number
  if (isNaN(length)) {  //can use Number.isNaN(length) more robust
    alert("You must enter a number to proceed");
    return null; // this means that the expected object couldn't be created
  }

  //check that length meets criteria
  if (length < 8 || length > 128) {
    alert("You must enter a number greater than 7 or less than 129");
    return null;
  }

  var hasLower = confirm("Do you want to include lowercase characters?");
  var hasUpper = confirm("Do you want to include uppercase characters?");
  var hasNumber = confirm("Do you want to include numbers?");
  var hasSpecial = confirm("Do you want to include special characters?");

  //check to make sure at least one option has been selected
  if (!hasLower && !hasUpper && !hasNumber && !hasSpecial) {
    prompt("You must choose at least one option");
    return null;
  }

  //collect password options
  var passwordOptions = {
    length: length,
    hasLower: hasLower,
    hasUpper: hasUpper,
    hasNumber: hasNumber,
    hasSpecial: hasSpecial
  };
  console.log(passwordOptions);
  return passwordOptions;
  
};

//get a random array element.
function getRandomElement(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomEl = array[randomIndex];
  return randomEl;
}



function generatePassword() {
  alert("Welcome to the Super Security Password Generator");
  
  var options = getPwOptions();

  var result = [];
  var possible = [];
  var guaranteed = [];

  if (!options) {
    return null;
  }

  if (options.hasLower) {
    possible.concat(lowerCasedCharacters);
    guaranteed.push(getRandomElement(lowerCasedCharacters));
  }
  if (options.hasUpper) {
    possible.concat(upperCasedCharacters);
    guaranteed.push(getRandomElement(upperCasedCharacters));
  }
  if (options.hasNumber) {
    possible.concat(numericCharacters);
    guaranteed.push(getRandomElement(numericCharacters));
  }
  if (options.hasSpecial) {
    possible.concat(specialCharacters);
    guaranteed.push(getRandomElement(specialCharacters));
  }

  for (var i = 0; i < options.length; i++) {
    
  }


  
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
