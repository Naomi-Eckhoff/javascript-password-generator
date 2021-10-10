// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //bounced to the next function for processing
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

//add function for generation of password and return 
function generatePassword() {

  //variable to record desired length (8 to 128)
  var passLength;
  //Gets desired length. Conditionals force loop until data is valid
  while (isNaN(passLength) || passLength < 8 || passLength > 128) {
    passLength = parseInt(window.prompt("How long should the password be (8 to 128 required)"));
  }

  //variables that control what characters are used
  var includedCharacters;
  var storageArray;
  var charactersArray = [];
  //while loop's condition validates that at least one option is chosen
  while (charactersArray.length === 0) {
    //prompt takes what options the user wants as a string
    includedCharacters = window.prompt("What characters should be used? Enter you choices as digits all at once. Format is irrelevant. 1 Lowercase. 2 Capitals. 3 Numbers. 4 Special Characters. At least 1 number is required.")
    //this if statement splits up the previos string into individual characters
    if (includedCharacters != null) {
      storageArray = includedCharacters.split("");
    }
    //This chunk of ifs check for the presence of 1 to 4 and then appends them to the charactersArray. This allows entry as 1.2.3..., 1,2,3,... or even 4 and 2 and 4 and 3 without issues
    if (storageArray.includes("1")) {
      charactersArray.push(1);
    }

    if (storageArray.includes("2")) {
      charactersArray.push(2);
    }

    if (storageArray.includes("3")) {
      charactersArray.push(3);
    }

    if (storageArray.includes("4")) {
      charactersArray.push(4);
    }
  }

  //variables containing a string of all possible characters of each type. This could be split off into it's own function but due to size I don't feel it's necessary.
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var ALPHABET = alphabet.toUpperCase(); //The name is a dumb joke that I'll defend with my life
  var numerals = "0123456789";
  var specialChars = "\\\"'!#$%&()*+,-./:;<=>?@[]^_`{|}~";
  var selectionArray = [];
  //this is a forEach loop, nested in a switch, nested in a forEach loop. It splits the strings that are needed into arrays and pushes those elements to a shared array
  charactersArray.forEach(element => {
    switch (element) {
      case 1:
        alphabet = alphabet.split("");
        alphabet.forEach(element => {
          selectionArray.push(element);
        });
        break;
      case 2:
        ALPHABET = ALPHABET.split("");
        ALPHABET.forEach(element => {
          selectionArray.push(element);
        });
        break;
      case 3:
        numerals = numerals.split("");
        numerals.forEach(element => {
          selectionArray.push(element);
        });
        break;
      case 4:
        specialChars = specialChars.split("");
        specialChars.forEach(element => {
          selectionArray.push(element);
        });
        break;
    }
  });

  //variable that gets returned as a string
  var passString = "";
  //for loop that selects a random elements of the combined characters array and concatenates it to passString
  for (var i = 0; i < passLength; i++) {
    passString += selectionArray[Math.trunc(Math.random() * selectionArray.length)];
  }
  //this string is returned as the value of the calling password variable
  return passString;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);