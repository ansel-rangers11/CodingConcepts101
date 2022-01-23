// Class 3 RPL Coding Concepts, 2021-05-05 

// Data types: 
// integer (4, 5), boolean (True or False), string ("Hello"), variable, function, array/list 

// DATA TYPE: ARRAY, list of stuff 
var listOfNumbers = [1,4,3,2,4,5] // list of integers 
// 0-BASED INDEXING, in coding we count everything starting from 0 not 1 

// Add items to the list 
listOfNumbers.push(0)
// Updates items within the list 
listOfNumbers[0] = 99;
listOfNumbers[1] = 300;
// Remove items from the list
listOfNumbers.pop()
console.log(listOfNumbers)

// Check the number of items in the list 
console.log(listOfNumbers.length)



// Iteration, going through the list 
// FOR LOOP 
var newList = ["hello", "my", "name", "is", "Ansel"] // list of string 
var i; // counter 
for(i=0; i < listOfNumbers.length; i++) {
	console.log(newList[i])
}


// Calculator 
var testCase1 = "3x5";
var testCase2 = "4+10";
var testCase3 = "90/9";

// + means addition, x means multiplication, - means substraction, / means division 
function calculator(input) {
	// Step 1: iterate through the string, make the string into a list
  var listOfLetters = input.split("")
  console.log(listOfLetters)
  
  // Step 2: figure out what is the operator being inputted 
  var operator = listOfLetters[1]
  
  
  // Step 3: to "parse" the numbers into actual numbers 
  var firstNumber = parseInt(listOfLetters[0]) // parseInt turns text into number 
  var secondNumber = parseInt(listOfLetters[2])
  
  // Step4: bunch of if stateements depending on what the operator is to set the correct result/calculation 
  var result;
  
  if (operator == "x") {
  	result = firstNumber*secondNumber;
  } else if (operator == "/") {
  	result = firstNumber/secondNumber;
  } else if (operator == "+") {// addition
  	result = firstNumber + secondNumber;
  } else if (operator == "-") {
  	result = firstNumber - secondNumber;
  }
  
  return result;



}


console.log(calculator("3x4"))