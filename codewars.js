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

//* 3. You get an array of numbers, return the sum of all of the positives ones.
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






//* 4. Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).


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

//* 5. Clock shows h hours, m minutes and s seconds after midnight.
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

//* 6. Simple, remove the spaces from the string, then return the resultant string.

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

//* 7.Nathan loves cycling. Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling. You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// function litres(time) {
//     return Math.floor(time / 2);    
//  }

//* 8.Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// function invert(array) {
//     return array.map(elem => -elem);
//  }

// Another solution 

// function invert(array) {
//     var newArr = [];
//     for(var i = 0; i < array.length; i++){
//       newArr.push(-array[i]);
//     }
//      return newArr;
//   }

//* 9.Создайте функцию с двумя аргументами, которая будет возвращать массив первых n кратных x.
//* Предположим, что и заданное число, и количество подсчетов будут положительными числами больше 0.

// TODO Мой вариант по моим тестам подходит, но не проходит по тестам на сайте
// let z = [];
// function countBy(x, n) {    
//     for (let i = 1; i < (n ** x) + 1; i += 1) {
//         if (x > 0 && n > 0 && i % x === 0 &&  z.length < n) {
//             z.push(i);
//         }
//     }
//     return z;
// }
// countBy(1, 10)
// console.log([...z]);

// Решение с сайта ((((((((((((( ППЦ....

// function countBy(x, n) {
//     let result = [];
//     for (let i = 1; i <= n; i++) {
//       result.push(x * i);
//     }
//     return result;
//   }

//* 10. Convert number to reversed array of digits. Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

//* Преобразовать число в перевернутый массив цифр. Учитывая случайное неотрицательное число, вы должны вернуть цифры этого числа в массиве в обратном порядке.

// let arr = [];
// function digitize(n) {
//     n = String(n);
//     arr = n.split('').reverse().map(Num => +Num);       
//     return arr;
//   }

// digitize(35231)
// alert([...arr])

//* 11.You will be given an array a and a value x. All you need to do is check whether the provided array contains the value. Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not.

// function check(a, x) {
//     let b = a.some(aElem => aElem === x);
//     return b;
//   }

// Another solution

// const check = (a,x) => a.includes(x);

//* 12.In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 (aug) new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

//! 99 Положительных тестов 1 отрицательный(

// let lastYear = 1; 
// function nbYear(p0, percent, aug, p) {
//     let population = p0;       
//     for (let i = 1; i <= lastYear; i += 1) {
//         if (population < p) {
//             population = population + population * percent / 100 + aug;
//             lastYear = i + 1
//         } else lastYear = i - 1;
//     }
//     return lastYear;    
// }

// nbYear(1000, 2, 50, 1200)
// alert(`Городу нужно ${lastYear} лет`)

// Solution also wrong but it's the same way

// function nbYear(p0, percent, aug, p) {
//     let years = 0;
//     for (years; p0 < p; years++) {
//       p0 += p0 * (percent / 100) + aug;
//     }
//     return years;
//   }
// Solution from codewars


// function nbYear(p0, percent, aug, p) {    
//     for (var years = 0; p0 < p; years++) {
//       p0 = Math.floor(p0 + p0 * percent / 100 + aug);
//     }
//     return years
//   }
 
//* 13.You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.


// let sMidIndex = 0;
// let midSymbol = '';
// function getMiddle(s){
//     if (s.length % 2 === 0) {
//       sMidIndex = s.length / 2;
//       midSymbol = s[sMidIndex-1] + s[sMidIndex];
//     } else {
//       sMidIndex = Math.floor(s.length / 2);
//       midSymbol = s[sMidIndex];
//     }
//      return midSymbol;
//    }


//* 14.Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// function repeatStr (n, s) {
//     let str = '';
//     for (let i = 0; i < n; i += 1) {
//       str += s;
//     }
//     return str;
//   }

//* 15.Given a list of integers, determine whether the sum of its elements is odd or even.
//* Give your answer as a string matching "odd" or "even".
//* If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

// function oddOrEven(array) {
//     let sumArr =  array.reduce((acc, num) => {return acc += num}, 0);    
//     if (sumArr % 2 !== 0) {
//       return 'odd'
//     } else return 'even'
//   }

//* 16.Trolls are attacking your comment section!

//*A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//*Your task is to write a function that takes a string and return a new string with all vowels removed.
//* For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

//* Note: for this kata  isn't considered a vowel.


// function disemvowel(str) {
//     let outputStr = '';
//     const letters = 'aeiouAEIOU';
//     for (let a = 0; a < str.length; a += 1) {
//         if (!letters.includes(str[a])) {
//             outputStr += str[a];
//         }
//     } 
//     console.log('outputStr: ', outputStr);   
//     return outputStr;    
//   }
//   disemvowel('This website is for losers LOL')

//* 17.Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
//* Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// function lovefunc(flower1, flower2) {
//     return flower1 % 2 !== flower2 % 2;
//   }

//* 18. Given an array of integers your solution should find the smallest integer.
//* For example:

//* Given [34, 15, 88, 2] your solution will return 2
//* Given [34, -345, -1, 100] your solution will return -345
//* You can assume, for the purpose of this kata, that the supplied array will not be empty.

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       let minVal = args[0];
//       for (let i = 0; i < args.length; i += 1) {      
//         if (minVal > args[i]) {
//           minVal = args[i]
//         }
//       }
//       return minVal;
//     }
//   }
  
//   // Another solution

//   class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min(...args)
//     }
//   }

//   class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min.apply(null, args);
//     }
//   }

//   class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return args.sort((a,b)=>a-b)[0];
//     }
//   }

//   class SmallestIntegerFinder {
//     findSmallestInt( $ ) {
//       return Math.min(...$);
//     }
//   }

//* 19. Given an array of ones and zeroes, convert the equivalent binary value to an integer.
//* Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

//* Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11

//* However, the arrays can have varying lengths, not just limited to 4.

// const binaryArrayToNumber = arr => { 
//     let number = 0;
//     arr = arr.reverse();
//     for (let i = 0; i < arr.length; i += 1) {
//       if (arr[i] === 1) {
//         arr[i] = Math.pow(2, i);
//         number += arr[i];
//     }      
//   }
//   return number;
// };

// Another solution

//const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);


//* 20.Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// function sum (numbers) {  
//     let sumOfnumbers = 0;
//     for (let i = 0; i < numbers.length; i += 1) {
//       sumOfnumbers += numbers[i]
//     }
//     return  sumOfnumbers
//   };

// Use reduce!

// function sum(numbers) {
//   return numbers.reduce((acc, num) => acc + num, 0);
// }
// const viewSum = sum([1, 5.2, 4, 0, -1]);
// console.log('viewSum: ', viewSum);

//* 21.Given an integral number, determine if it's a square number:

//* In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

//* The tests will always use some integral number, so don't worry about that in dynamic typed languages.


// var isSquare = function(n){
//     let squareNum = Math.sqrt(n);
//     return Number.isInteger(squareNum)
//     }

//* 22.Can you find the needle in the haystack?
//* Write a function findNeedle() that takes an array full of junk but containing one "needle"
//* After your function finds the needle it should return a message (as a string) that says:
//* "found the needle at position " plus the index it found the needle, so:
//* Example(Input --> Output)
//* ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

// function findNeedle(haystack) {
//     const newHaystack = haystack.indexOf('needle')
//     return `found the needle at position ${newHaystack}`;
//   }

//* 23.Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

//* Examples:
//* Input: 42145 Output: 54421
//* Input: 145263 Output: 654321
//* Input: 123456789 Output: 987654321

// function descendingOrder(n) {
//     n = String(n);  
//     let sortArr = n.split('').sort((a, b) => {
//       return b - a;
//     });
//     let getStr = sortArr.join('');    
//     return Number(getStr);
//   }

//* 24.Given the triangle of consecutive odd numbers:
//                 1   
//             3     5
//         7     9    11
//     13    15    17    19
// 21    23    25    27    29

//* Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
//* 1 -->  1
//* 2 --> 3 + 5 = 8

// function rowSumOddNumbers(n) {
//     return n * n * n
//     }
