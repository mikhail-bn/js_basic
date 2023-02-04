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