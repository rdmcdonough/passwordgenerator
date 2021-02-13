

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
console.log(finalArr.join(""))