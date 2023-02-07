//* 1. Implement a function which convert the given boolean value into its string representation. Note: Only valid inputs will be given.

// function booleanToString(b){
//     b = String(b);
//     return b;
//   }

//  // Another solutions
// function booleanToString(b){
//     return b.toString();
//   }
//   function booleanToString(b){    
//     return String(b);
//   }

//* 2. Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// function evenOrOdd(number) {
//     if (number % 2 === 0 && Number.isInteger(number) && !(number = 0)) {
//       return "Even";
//     } else if (number % 2 != 0 && Number.isInteger(number) && !(number = 0)){
//       return "Odd";
//     }  
//   }
//   // Another solutions
//   function even_or_odd(number) {
//     if (number%2 == 0) {
//       return "Even";
//     } else {
//       return "Odd";
//     }
//   }

//* You get an array of numbers, return the sum of all of the positives ones.
//* Example [1,-4,7,12] => 1 + 7 + 12 = 20
//* Note: if there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
//   let sumOfItems = 0;  
//   for (let i = 0; i < arr.length; i += 1) {    
//     if (Number.isInteger(arr[i]) && arr[i] > 0) {
//       sumOfItems += arr[i];
//     }
//   }
//   return sumOfItems;
// }

// // Another solution reduce
// const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);






//*Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).


// const arrayOfSheep = [true,  true, true, false, true, true, true,  true, true, false, true, false, true, false, false, true, true,  true,  true, true , false, false, true, true];
// function countSheeps(arrayOfSheep) {
//     // TODO May the force be with you
//     let presentSheeps = 0;
//     for (let i = 0; i <= arrayOfSheep.length; i += 1) {
//       if (arrayOfSheep[i]) presentSheeps += 1    
//     }
//     return presentSheeps;
// }
// countSheeps(arrayOfSheep);

//* Clock shows h hours, m minutes and s seconds after midnight.
//* Your task is to write a function which returns the time since midnight in milliseconds.

// function past(h, m, s){
//     //#Happy Coding! ^_^
//     const midnight = new Date(0,0,0,0,0,0,0);   
//     let someData = new Date(0,0,0,0,0,0,0);
//     someData.setHours(h);
//     someData.setMinutes(m)
//     someData.setSeconds(s);
//     const someDifference = someData - midnight;
//     return someDifference;
//   }

// Another solution
// function past(h, m, s){
//     return ((h*3600)+(m*60)+s)*1000;
//   }

//* Simple, remove the spaces from the string, then return the resultant string.

// function noSpace(x){
//     let newStringX = '';
//   for ( let i = 0; i < x.length; i += 1){
//     if(x[i] !== ' ') {
//       newStringX += x[i];
//     }
//   }
//   return newStringX;
// }

// Another solution

// function noSpace(x) {
//     return x.replaceAll(' ', '');
//   }