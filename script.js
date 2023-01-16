// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
let password = "";
//let passwordLength=12;
// Function to prompt user for password options
function getPasswordOptions() {
   passwordLength = prompt("Define password length : ");
   //need to limit size of password, 10 - 64
   lcyesorno = confirm("include lowercase letters?");
   numyesorno = confirm("include numbers?");
   console.log(lcyesorno + numyesorno);
   if(lcyesorno && numyesorno == false){
    let nochoice = confirm("try again");
  }
  //trying to give error warning if nothing selected
   console.log(lcyesorno + numyesorno)
     return;
}

// Function for getting a random element from an array
function getRandom(arr) {
var arraylength = arr.length;
randomnum = Math.floor(Math.random() * arraylength);
return arr[randomnum];
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  let charPool = []
  console.log("empty : "+ charPool)

if(lcyesorno){
  charPool = charPool.concat(lowerCasedCharacters);
}
console.log("lcs : " +charPool)

if(numyesorno){
  charPool = charPool.concat(numericCharacters);

}


console.log(charPool)
  for (let index = 0; index < passwordLength ; index++) {
        password += getRandom(charPool); 
        console.log(password)
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);