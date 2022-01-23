
var x = 1;
var y = 2;

// This is a comment! 
// I like cats! 
console.log(x+y)
console.log("hello")

let a = 5;
let b = 3;
console.log(a*b)
console.log(a/y)

// function 
// needs a return keyword, is what you give back as a result 
function add(num1, num2){
	return num1 + num2;
}

// CALL a function
console.log(add(5,4))

// a function that substracts
function substract(num1,num2) {
	return num1 - num2;
}

console.log(substract(8,8))

// this is a function that returns triple the number it is given
function triple(num1) {
	return num1*3;
}

console.log(triple(3))

// this function returns the number added by 10
function add10(num1) {
		return num1 + 10;
}

console.log(add10(4))

// Conditional statements 

function checkLessEqualTo12(num1){
	if(num1 <= 12) { // checks if num1 < 12 
  	return num1 + 2
  } else {
  	return num1 + 10
  }
}

console.log(checkLessEqualTo12(12))
	
function between10And20(num1){
	if(num1 < 10) { // checks if num1 < 12 
  	return num1 + 1
  } else if (num1 < 20) {
  	return num1 + 2
  } else {
  	return num1 + 3
  }
}

console.log(between10And20(5)) // 6
console.log(between10And20(10)) // 
console.log(between10And20(20))
console.log(between10And20(15))

// Data Types 
// integer, boolean, string, list
// boolean is True or False
// booleans are used for conditions to check if tthey are true

console.log(10<15)

function alwaysTrue(num1) {
	 if(true){ // HINT: weird about this condition 
   	return 90;
   } else if (num1 < 5) {
   	return num1 + 5;
   } else {
   	return num1 + 8;
   }
}

console.log(alwaysTrue(12000000000))
console.log(alwaysTrue(0))
console.log(alwaysTrue(5))
console.log(alwaysTrue(2))
console.log(alwaysTrue(10))

// if score is > 90, to return "A"
// if score is between 80 and 90, to return "B"
// if score is between 70 and 80, to return "C"
// if score is between 60 and 70, to return "D"
// if score is less than 60, to return "F"
// left number is always exclusive, except 60 and 90
// HINT: you can use a lot of If and else if statements
function reportCard(score) {
	if(score > 90) {
  	return "A";
  } else if (score > 80 && score <=90) {
  	return "B";
  } else if (score > 70 && score <=80) {
  	return "C";
  } else if (score >= 60 && score <=70) {
  	return "D";
  } else {
  	return "F";
  }
  
}


// There is a more simple way to do this....
// && means and 
// || means or

// Step function method/staircase method 
function reportCardBetter(score) {
	if(score > 90) {
  	return "A";
  } else if (score > 80) {
  	return "B";
  } else if (score > 70) {
  	return "C";
  } else if (score >= 60) {
  	return "D";
  } else {
  	return "F";
  }
  
}
// Top-down execution, the code is read from top to bottom 
// Test cases 
console.log(reportCardBetter(86)) // B
console.log(reportCardBetter(80)) // C
console.log(reportCardBetter(60)) // D
console.log(reportCardBetter(72)) // C
console.log(reportCardBetter(100)) // A
console.log(reportCardBetter(0)) // F
