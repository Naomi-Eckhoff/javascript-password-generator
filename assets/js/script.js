// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //bounced to the next function. Don't be upsetti try some spaghetti
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



//add function for generation of password and return 
function generatePassword() {
  //add prompt with var dec length (8 to 128)?
  var passLength;

  // Is it weird? Yes. Does it handle data validation? Also yes. EFFICIENCY!!!!!! *lies I tell myself*
  while (isNaN(passLength) || passLength < 8 || passLength > 128) {
    passLength = parseInt(window.prompt("How long should the password be (8 to 128 required)"));
  }

  //add prompt with var dev and if/switch include lowercase?
  //add prompt with var dev and if/switch capital letters?
  //add prompt with var dev and if/switch include numbers?
  //add prompt with var dev and if/switch include special characters?
  //if possible wrap those all up in one or two statements
  //validate for inclusion of at least 1 type of character probably an if with lots of ||

  var includedCharacters;
  var storageArray;
  var charactersArray = [];

  while (charactersArray.length === 0) {
    includedCharacters = window.prompt("What characters should be used? Enter you choices as digits all at once. Format is irrelevant. 1 Lowercase. 2 Capitals. 3 Numbers. 4 Special Characters. At least 1 number is required.")

    if (includedCharacters != null) {
      storageArray = includedCharacters.split("");
    }

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
  //Yep, that'll validate it
  //Due to some issues over on the parseInt I error checked this and it seems bullet proof


  //add prompt with var dec with switch no breaks. Those are for cowards. Only switch looping!
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var ALPHABET = alphabet.toUpperCase(); // It's a dumb joke, but I refuse to not use it.
  var numerals = "0123456789";
  var specialChars = "\\\"'!#$%&()*+,-./:;<=>?@[]^_`{|}~";
  var selectionArray = [];
  var selectionArrayLength = 0;



  //I got to learn that javascript does multidimensional arrays. I'm impressed but also slightly annoyed so now this exists.
  charactersArray.forEach(element => {
    switch (element) {
      case 1:
        alphabet = alphabet.split("");
        alphabet.forEach(element => {
          selectionArray.push(element);
        });
        selectionArrayLength += alphabet.length;
        break;
      case 2:
        ALPHABET = ALPHABET.split("");
        ALPHABET.forEach(element => {
          selectionArray.push(element);
        });
        selectionArrayLength += ALPHABET.length;
        break;
      case 3:
        numerals = numerals.split("");
        numerals.forEach(element => {
          selectionArray.push(element);
        });
        selectionArrayLength += numerals.length;
        break;
      case 4:
        specialChars = specialChars.split("");
        specialChars.forEach(element => {
          selectionArray.push(element);
        });
        selectionArrayLength += specialChars.length;
        break;
    }
  });


  //string building for loop
  var passString = "";

  for (var i = 0; i < passLength; i++) {
    passString += selectionArray[Math.trunc(Math.random() * selectionArrayLength)];
  }

  return passString;
}
//insert other function maybe

//trigger password update if needed



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);