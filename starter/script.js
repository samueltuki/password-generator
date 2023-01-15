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
  let length = parseInt (prompt(
    "how many characters would you like? [please choose between 10 and 64]")

    
  );

  // checking if input is invalid
  if (length < 10 || length > 64) {
    alert("please input a number between 10 and 64");
   return;
  }

  if (isNaN(length)) {
    alert("please input a number that is valid");
    
    return;
  }

  // checking if the password should have lowerCase/upperCase/numberCharacter/specialCharacter

  let lowerCasedCharacters = confirm("would you like to include lowercase? [`ok` for Yes or `cancel` for No]"
  );

  let upperCasedCharacters = confirm(
    "would you like to include uppercase? [`ok` for Yes or `cancel` for No]"
  );

  let numberCharacters = confirm(
  "would you like to include number character? [`ok` for Yes or `cancel` for No]")

  let specialCharacters = confirm ("would you like to include special character? [`ok` for Yes or `cancel` for No]");

  if (lowerCasedCharacters === false && upperCasedCharacters === false && numberCharacters === false && specialCharacters === false) {
    alert ("please choose at least one option");

    return;
  }


let options = {
  optionLength: length,
  optionLowerCase: lowerCasedCharacters,
  optionUppercase: upperCasedCharacters,
  optionNumber: numberCharacters,
  optionSpecialCharacter: specialCharacters
  
  
}; 


};

getPasswordOptions()

//  where should this function be called within the file?

// Function for getting a random element from an array
function getRandom(arr) {
let random = Math.floor(Math.random()* arr.length)

console.log(getRandom(optionLowercase.lowerCasedCharacters));
    
return arr[random];

  
}



// Function to generate password with user input
function generatePassword() {}
let userChoice = getPasswordOptions ();

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