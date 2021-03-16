// TASK 3/3/21

// 1. What are the final values of all variables a, b, c and d after the code below?

let a = 1;
 b = 1;

let c = ++a; // ?
let d = b++; // ?

// ANSWER
// a= 2
// b= 2
// c= 2 
// d= 1

//2. What will be the result for these expressions?
let x = 5 > 4; //true
let y  = ("apple" > "pineapple"); // false
let z  = ("2" > "12"); //true
let ax = (undefined == null); //true
let ay = (undefined === null); //false
let az = (null == "\n0\n"); //false
let aa = (null === +"\n0\n"); //false

// 3. Create a web-page that asks for a name and outputs it. 
// Using if..else, write the code which gets a number via prompt and then shows in alert:
// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.
// In this task we assume that the input is always a number.


// ANSWER
//  document.addEventListener("DOMContentLoaded", () => {
//     let numbers = prompt()
//    if(numbers > 0){
//     alert(1)
// } else if (numbers < 0){
//     alert(-1)
// } else if (numbers == 0){
//     alert(0)
// }
//   });

//4. Rewrite this if using the conditional operator '?':
let result;
// ANSWER
let tenary = (a + b < 4) ? result = 'Below' : result = 'Over';

//5. Rewrite if..else using multiple ternary operators '?'.   For readability, it’s recommended to split the code into multiple lines.
let message;

// ANSWER 
// let tenarya =  (login == 'Employee') ? message = 'Hello' : (login == 'Director') ? message = 'Greetings': (login == '') ? message = 'No login': message = '';


// 6. What is the code below going to output?
alert( null || 2 || undefined )
//ANSWER: 2

// 7. Write an “if” condition to check that age is between 14 and 90 inclusively. 
// “Inclusively” means that age can reach the edges 14 or 90.


// ANSWER:  if(age >= 14 && age <= 90)

// 8. Write an if condition to check that age is NOT between 14 and 90 inclusively.
//  Create two variants: the first one using NOT !, the second one – without it.

// ANSWER:  

// variant 1 if(!(age >= 14) && !(age <= 90))

// variant 2: if(age <= 14 && age >= 90)
   


// 9. Write the code which asks for a login with prompt.
// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
// The password is checked as follows:
// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”
// Please use nested if blocks. Mind the overall readability of the code.
// Hint: passing an empty input to a prompt returns an empty string ''. Pressing ESC during a prompt returns null.

// Answer

let visitor = prompt()

if(visitor == "Admin"){
    let pass = prompt('Input your password')
    if(pass == "TheMaster"){
        alert('Welcome!')
    } else{
        alert("Wrong password")
    }
} else if (visitor == ""){
    alert('Cancelled')
} else{
    alert("I don’t know you")
}