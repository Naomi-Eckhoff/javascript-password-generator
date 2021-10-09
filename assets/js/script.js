// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //add prompt with var dec length (8 to 128)?

  //add prompt with var dev and if/switch with break include everything?

  //add prompt with var dev and if/switch include lowercase?

  //add prompt with var dev and if/switch capital letters?

  //add prompt with var dev and if/switch include numbers?

  //add prompt with var dev and if/switch include special characters?

  //if possible wrap those all up in one or two statements

  //validate for inclusion of at least 1 type of character probably an if with lots of ||

  //insert other function maybe

  //trigger password update if needed

  passwordText.value = password;
}

//add function for generation of password and return 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);