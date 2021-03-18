// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    //Created the arrays
    let lowerCase =["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","z"]
    let upperCase =["A","B","C","D","E","F","G","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","z"]
    let numbers =[1,2,3,4,5,6,7,8,9,0];
    let spcChar =["!","@","#","$","%","&","?"]
    failArray = lowerCase.concat(upperCase,spcChar);
    //create prompt for character length and confirms for which arrays to concat
    let passLength = window.prompt("Please enter length of password");
    //added fail state
    if(8 > passLength || passLength > 120){
        console.log("bruh");
        return;
    }
    else if(isNaN(passLength)){
        console.log("Dude.. no");
        return;
    }
    
    let lCaseP = confirm("add lowercase?");
    let uCaseP = confirm("add uppercase?");
    let num = confirm("add numbers?");
    let spcC = confirm("add special Characters?");

    
    
    //create the generatepassword function
    function generatePassword(){
        let selectorArray = [];

        
    }
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    console.log("The button has been pressed");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword());
  