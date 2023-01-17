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
// (The main purpose of this is to gather user input to determine what will be included in the generated password)
function getPasswordOptions() {
  // - How many characters would you like in the password?
  let response = prompt(
    "how many characters would you like? [please choose between 10 and 64]"
  );
  if (response === null) {
    return;
  }

  let length = parseInt(response);

  // checking if input is invalid
  if (length < 10 || length > 64) {
    alert("please input a number between 10 and 64");
    return;
  }

  if (isNaN(length)) {
    alert("please input a number that is valid");
    return;
  }

  // Defined options object here to record length and prompts
  let options = { length: length };

  // Assigning prompt response directly to the object.

  // checking if the password should have lowerCase/upperCase/numberCharacter/specialCharacter
  options.lowerCase = confirm(
    "would you like to include lowercase? [`ok` for Yes or `cancel` for No]"
  );

  options.upperCase = confirm(
    "would you like to include uppercase? [`ok` for Yes or `cancel` for No]"
  );

  options.number = confirm(
    "would you like to include number character? [`ok` for Yes or `cancel` for No]"
  );

  options.special = confirm(
    "would you like to include special character? [`ok` for Yes or `cancel` for No]"
  );

  if (
    !options.lowerCase &&
    !options.upperCase &&
    !options.number &&
    !options.special
  ) {
    alert("please choose at least one option");
    return;
  }

  // returning options object so the generatePassword function can use it
  return options;
}

// Function for getting a random element from an array
function getRandom(arr) {
  let random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

// Function to generate password with user input
function generatePassword() {
  // Getting options from the getPasswordOptions function
  let options = getPasswordOptions();
  let password = "";

  if (options) {
    while (password.length < options.length) {
      if (password.length < options.length && options.upperCase) {
        password += getRandom(upperCasedCharacters);
      }
      if (password.length < options.length && options.lowerCase) {
        password += getRandom(lowerCasedCharacters);
      }
      if (password.length < options.length && options.number) {
        password += getRandom(numericCharacters);
      }
      if (password.length < options.length && options.special) {
        password += getRandom(specialCharacters);
      }
    }
  }
  // Return the password to the write password function
  return password;
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();

  if (password) {
    let passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // possible to switch out the function passed in - to test the functionality of the functions declared above
