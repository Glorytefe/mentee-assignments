// DATE: 12/3/21

//  1. Use the for loop to output even numbers from 2 to 10.
// ANSWER
    console.log('q1 Answer- Even Numbers');

for(let i = 0; i<11; i++){
    if(i>0 && i%2==0){
        console.log(i);
        
    }
}

// 2. Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
    //    for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );

// ANSWER
let i = 0;

while( i < 3){
      alert(`number ${i}!`);
      i++;
}

// 3. Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

// ANSWER
let number;
do{
  number =  prompt('Enter number greater than 100 only')
}while (number <= 100 && number)


//  4. An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.
// In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.
// For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.
// Write the code which outputs prime numbers in the interval from 2 to n.
// For n = 10 the result will be 2,3,5,7.

// ANSWER
let n = 10;

    console.log('q4 Answer- Prime Numbers');

primes:   
     for(let i=2; i <= n; i++){

    for(let p=2; p < i; p++){   

        if(i%p == 0) continue primes;
    
   }
    console.log(i);
}
    

// 5. Write the code using if..else which would correspond to the following switch:
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;
 
//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;
 
//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// ANSWER
let browser;
if(browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}

// 6. .   Rewrite the code below using a single switch statement:  let a = +prompt('a?', '');
 
// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }
 
// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

// ANSWER
let a = +prompt('a?', '');

switch(a){
    case 0: alert( 0 );
    break;

    case 1: alert( 1 );
    break;

    case 2 :
    case 3 :
     alert( '2,3' );
     break;
}