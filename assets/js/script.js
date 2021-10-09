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
  var passLength = 0

  // Is it weird? Yes. Does it handle data validation and resetting the variable on pressing the button again? Also yes. EFFICIENCY!!!!!! *lies I tell myself*
  while (passLength < 8 || passLength > 128) {
    passLength = parseInt(window.prompt("How long should the password be (8-128)"));
  }

  //add prompt with var dev and if/switch with break include everything?

  //add prompt with var dev and if/switch include lowercase?

  //add prompt with var dev and if/switch capital letters?

  //add prompt with var dev and if/switch include numbers?

  //add prompt with var dev and if/switch include special characters?

  //if possible wrap those all up in one or two statements

  //validate for inclusion of at least 1 type of character probably an if with lots of ||

  //insert other function maybe

  //trigger password update if needed

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);