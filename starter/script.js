// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  // - How many characters would you like in the password?
  let length = windows.prompt(
    "how many characters would you like? [please choose between 10 and 64]"
  );
  // checking if input is invalid
  if (length < 10 || length > 64) {
    alert("please input a number between 10 and 64");
    return false;
  }

  if ((length = isNaN)) {
    alert("please input a number that is valid");
    return false;
  }

  // checking if the password should have lowerCase/upperCase/numberCharacter/specialCharacter

  let lowerCasedCharacters = windows.confirm("would you like to include lowercase? [`ok` for Yes or `cancel` for No]"
  );

  let upperCasedCharacters = windows.confirm(
    "would you like to include uppercase? [`ok` for Yes or `cancel` for No]"
  );

  let numberCharacters = window.confirm(
  "would you like to include number character? [`ok` for Yes or `cancel` for No]")

  let specialCharacters = windows.confirm ("would you like to include spacial character? [`ok` for Yes or `cancel` for No]");

let passwordOption = 


  /* 

    The main purpose of this method is to gather user input to determine
    what will be included in the generated password.

    

    Other Requirements:
    - code should validate for each input: 
        - Many times users will try to input incorrect input to try and break the app. What if a user inserts 
          a letter instead of a number when we ask for password length? How can we check to see that the correct 
          data type (a number) was inserted? 
      - What can we use to display a message to the user in the browser if they input incorrect content ? 
  */

  //  where should this function be called within the file?
}

// Function for getting a random element from an array
function getRandom(arr) {
  // accepts an array as input
  // how can we generate random numbers and use them to grab content from the arrays ?
  //  where should this function be called within the file?
}

// Function to generate password with user input
function generatePassword() {}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // nothing needs to be changed inside of here
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", getPasswordOptions); // possible to switch out the function passed in - to test the functionality of the functions declared above
