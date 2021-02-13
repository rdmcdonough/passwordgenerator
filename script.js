// Assignment Code
var generateBtn = document.querySelector("#generate");
//^^already in hmw file - created for event listener

var passwordSpan = document.querySelector("#password");
//created for using textContent downline to fill in the user generated password

var passwordGenerated = "";
//password starts as empty vessel to be generated then final string get pushed in
var userLength = prompt("What length do you want your password?");
// this will be used to create the length of finalArr

//must create arrays of all possible password content for user to choose to use array or not use array
// var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
// var lowerCase = ["a", "b", "c", "d"]
var lowerCaseArr = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numberArr = "0123456789".split("");
var specialArr = "!#$%&'()*+,-./:;<=>?@^_`{|}~".split("");

//must ask user what content they want in password
var lowerCaseChoice = confirm("Do you want lower case?");
var upperCaseChoice = confirm("Do you want Upper case?");
var numberChoice = confirm("Do you want numbers?");
var specialChoice = confirm("Do you want special characters? '!#$%&'()*+,-./:;<=>?@^_`{|}~'");

//must create array of all possible password content after user selection
var logicArr = [];
//must create array the length of the user slected "what length do you want your password?" promt
var finalArr = [];


// Write password to the #password input
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 //^^^already written in homework file - need to check variables match

  //must fill logicArray with all the content the user selects in confirms
  if (lowerCaseChoice) {
    for(var i = 0; i < lowerCaseArr.length; i++) {
        logicArr.push(lowerCaseArr[i])
    } else {

    }
  }

  if (upperCaseChoice) {
     for(var i =0; i < upperCaseArr.length; i++) {
         logicArr.push(upperCaseArr[i])
    } else {

    }
  }

  if (numberChoice) {
     for(var i = 0; i < numberArr.length; i++) {
         logicArr.push(numberArr[i])
    } else {

    }
  }

  if (specialChoice) {
     for(var i = 0; i < specialArr.length; i++) {
         logicArr.push(specialArr[i])
    } else {

    }
  }

   // so far created a master array of user defined content possibilty by pushing into logicArr
  //must fill finalArr with RANDOM selection of items from logicArr with a length equal to userLength


  for(var i = 0; i < userLength; i++) {
    finalArr.push(logicArr(Math.floor(Math.random() * logicArr.length)))
  }

  // now that finalArr is filled with random content of type chosen by user the length of user choice the password has been generated as finalArr which is Array format
  //this finalArr has to be transformed into a string in order to be used as password
  //this final string is then pushed to passwordGenerated
  passwordGenerated.push(finalArr.join(""));
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//^^ already in hmw file

//when button is clicked run writePassword function then diplay generated password
//passwordGenerated needs to be displayed.. 
passwordSpan.textContent = passwordGenerated;