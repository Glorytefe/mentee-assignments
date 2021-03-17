// DATE: 3/17/21

// 1.   The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }
// Rewrite it, to perform the same, but without if, in a single line.
// Make two variants of checkAge:
// Using a question mark operator ?
// Using OR ||

// ANSWER
let age = 19;

// VARIANT 1:
let ageChecker = () =>{
 (age > 18) ? true :confirm('Did parents allow you?');
}

// VARIANT 2: 
function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}


// 2.   Write a function min(a,b) which returns the least of two numbers a and b.
//     	    For instance:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

// ANSWER
function mins (a, b){
if(a < b){
    alert(a)
} else alert (b)
}

mins(1, 1)



// 3. Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by    itself n times and returns the result.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

// ANSWER
let x = prompt('enter value for x', 0);
let n = prompt('enter value for n', 0);

function pows (x, n){
   if(x && n){
        let powd = x ** n;
    alert(`x in power n = ${powd}`)
   } else{
alert('No value was entered') 
   } 
}

pows(x, n)



// 4.  The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

// convertToF(0) should return a number
// convertToF(-30) should return a value of -22
 
// convertToF(-10) should return a value of 14

// ANSWER
let cel = prompt('Pls enter temp in celsius', 0)
function celToFa (cel){
   if(cel){
        let fah = cel * 1.8 + 32
    alert(`${cel} celsius converted to fahrenheit is ${fah}`)
   } else {
       alert('No value was entered')
   }
}

celToFa(cel)
