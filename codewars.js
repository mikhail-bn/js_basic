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

//* 25.Simple, given a string of words, return the length of the shortest word(s).
//*String will never be empty and you do not need to account for different data types.

// function findShort(s){
//     const sArr = s.split(' '); 
//     let theSmallestWord = sArr[0];
//     for (let i = 0; i < sArr.length; i += 1) {
//       if (sArr[i].length < theSmallestWord.length) {
//         theSmallestWord = sArr[i];      
//       }     
//     } 
  
//     return theSmallestWord.length;
//   }

//* 26.Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//* Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


// function reverseWords(str) {
//     const strReverse =  str.split(' ');
//     const strReverseWord = strReverse.map((word) => word.split('').reverse().join(''))    
//     console.log('strReverseWord: ', strReverseWord);
   
//     return strReverseWord.join(' ') ;
//   }

//* 27. You might know some pretty large perfect squares. But what about the NEXT one?

//* Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
//* If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

//* Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

// function findNextSquare(sq) {
//     let nextNumber = 0;
//     let nextNumberPow = 0;
//    if(!Number.isInteger(Math.sqrt(sq))){
//      return -1;
//    } else {
//      nextNumber = Math.sqrt(sq) +1;
//      nextNumberPow = Math.pow(nextNumber, 2)
//      console.log('nextNumberPow: ', nextNumberPow);   
//    }
//     return nextNumberPow;
//   }

//* 28. Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

//* If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0

//* Notes
//*The first argument can be an empty string
//* In languages with no distinct character data type, the second argument will be a string of length 1


// function strCount(str, letter){  
//     const arr = str.split('').filter((s) => s === letter);
//     return arr.length
//   }

// *===================================================  7kyu ========================================================
//! ===================================================================================================================
//! ===================================================================================================================
//! ===================================================================================================================
//! ===================================================================================================================
//! ===================================================================================================================
//! ===================================================================================================================
//! ===================================================================================================================
//! ===================================================================================================================

//* 1.Cats and shelves

//* Description
//* An infinite number of shelves are arranged one above the other in a staggered fashion. The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3 (the cat cannot climb on the shelf directly above its head), according to the illustration:

//*Input
//* Start and finish shelf numbers (always positive integers, finish no smaller than start)

//* Task
//* Find the minimum number of jumps to go from start to finish

//* Example
//* Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)

// function solution(start, finish) {  
//     const iterTree = Math.floor((finish - start) / 3);
//     const someChange = (finish - start) - iterTree * 3;  
//     const iter = iterTree + someChange;
//     return iter;
//   }

//* 2. In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

//* Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
//* --the order is: uppercase letters, lowercase, numbers and special characters.

//   function solve(s){   
//     const charUpper = (s.match(/[A-Z]/g)  || []).length;
//     const char = (s.match(/[a-z]/g) || []).length;
//     const numbers = (s.match(/[0-9]/g) || []).length;
//     const symbols = s.length - charUpper - char - numbers;  
//     return [charUpper, char, numbers, symbols];  
//   }

//* 3. Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.
//* Assume that the input n will always be a positive integer.

//* Examples: (Input --> output)

//* 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
//* 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

// function sumCubes(n){
//   let sum = 0;
//   for (let i = 1; i <= n; i += 1) {
//     sum += Math.pow(i, 3)
//   }
//     return sum;
//   }

//* 4.Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

//* For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]

//* So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

//* Note: You will always be given a non-empty list containing positive values.



// function sumOfMinimums(arr) {
//   let sum = 0,      
//   minFor = 0
// for (let i = 0; i < arr.length; i += 1) { 
// minFor = arr[i][0];
// for (let n = 1; n < arr[i].length; n += 1) {      
//   if (minFor > arr[i][n]){
//     minFor = arr[i][n];
//   }
// }
// sum += minFor;
// }
// return sum;
// }

//* 5. 21 Sticks
//* The game. In this game, there are 21 sticks lying in a pile. Players take turns taking 1, 2, or 3 sticks. The last person to take a stick wins. For example:

// 21 sticks in the pile

// Bob takes 2  -->  19 sticks left
// Jim takes 3  -->  16 sticks
// Bob takes 3  -->  13 sticks
// Jim takes 1  -->  12 sticks
// Bob takes 2  -->  10 sticks
// Jim takes 2  -->   8 sticks
// Bob takes 3  -->   5 sticks
// Jim takes 3  -->   2 sticks
// Bob takes 2  -->  Bob wins!

//* Your task
//* Create a robot that will always win the game. Your robot will always go first. The function should take an integer and returns 1, 2, or 3.

//* Note: The input will always be valid (a positive integer)


// function makeMove(sticks) {
//  return sticks % 4
// }

//* 6. Write a function that returns the number of occurrences of an element in an array.

//* This function will be defined as a property of Array with the help of the method Object.defineProperty, which allows to define a new method directly on the object (more info about that you can find on MDN). (Сколько раз элемент присутствует в массиве)

// Examples
// var arr = [0, 1, 2, 2, 3];
// arr.numberOfOccurrences(0) === 1;
// arr.numberOfOccurrences(4) === 0;
// arr.numberOfOccurrences(2) === 2;
// arr.numberOfOccurrences(3) === 1;


//* ================================================================


// Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
//     value : function numberOfOccurrences(element) {
//       let sum = 0;
//       for (let i = 0; i < this.length; i += 1) {
//         if (this[i] === element){
//           sum++
//         }
//       }
//       return sum
//     }
//   });



//* 7. Overview
//* Bubblesort is an inefficient sorting algorithm that is simple to understand and therefore often taught in introductory computer science courses as an example how not to sort a list. Nevertheless, it is correct in the sense that it eventually produces a sorted version of the original list when executed to completion.

//* At the heart of Bubblesort is what is known as a pass. Let's look at an example at how a pass works.

//* Consider the following list:

// 9, 7, 5, 3, 1, 2, 4, 6, 8
//* We initiate a pass by comparing the first two elements of the list. Is the first element greater than the second? If so, we swap the two elements. Since 9 is greater than 7 in this case, we swap them to give 7, 9. The list then becomes:

// 7, 9, 5, 3, 1, 2, 4, 6, 8
//* We then continue the process for the 2nd and 3rd elements, 3rd and 4th elements ... all the way up to the last two elements. When the pass is complete, our list becomes:

// 7, 5, 3, 1, 2, 4, 6, 8, 9
//* Notice that the largest value 9 "bubbled up" to the end of the list. This is precisely how Bubblesort got its name.

//* Task
//* Given an array of integers, your function bubblesortOnce/bubblesort_once/BubblesortOnce (or equivalent, depending on your language's naming conventions) should return a new array equivalent to performing exactly 1 complete pass on the original array. Your function should be pure, i.e. it should not mutate the input array.



// function bubblesortOnce(a) {
//     let cloneA = [...a]; // Добавить массив а как элемент в массив cloneA
//      for (let i = 0; i < cloneA.length - 1; i++){ 
//        if (cloneA[i] > cloneA[i + 1]) {
//          [cloneA[i],cloneA[i + 1]] = [cloneA[i + 1],cloneA[i]] // Строка меняет местами элементы массива
//        }
//      }
//      return cloneA;
//    }



//* 8. Task
//* For a given list of digits 0 to 9, return a list with the same digits in the same order, but with all 0s paired. Pairing two 0s generates one 0 at the location of the first one.

//* Examples
// input: [0, 1, 0, 2]
// paired: ^-----^
//     -> [0, 1,   2]
//   kept: ^

// input: [0, 1, 0, 0]
// paired: ^-----^
//     -> [0, 1,    0]
//   kept: ^        ^

// input: [1, 0, 7, 0, 1]
// paired:    ^-----^
//     -> [1, 0, 7,    1]
//   kept:    ^

// input: [0, 1, 7, 0, 2, 2, 0, 0, 1, 0]
// paired: ^--------^        ^--^
//     -> [0, 1, 7,    2, 2, 0,    1, 0]
//   kept: ^                 ^        ^

//* Notes
//* Pairing happens from left to right. For each pairing, the second 0 will always be paired towards the first ( right to left )
//* 0 s generated by pairing can NOT be paired again ( void where not applicable: ) Don't modify the input array or you may fail to pass the tests

// function pairZeros(arr) {
//     let cloneArr = [],
//         counter = 1;
//      for (let i = 0; i < arr.length; i++) {
//        if (arr[i] === 0 && counter % 2) {
//         cloneArr.push(arr[i]);
//         console.log(cloneArr)
//         counter += 1;
//        } else if (arr[i]) {
//         cloneArr.push(arr[i]);
//         console.log(cloneArr)
//        } else counter += 1;
//      }
//      console.log(cloneArr)
//      return cloneArr;
//    }

//* 9. Exclamation marks series #18: a simple slot machine that only contains exclamation marks and question marks
//* Description:
//* You are playing a simple slot machine that only contains exclamation marks and question marks. Every time the slot machine is started, a string of 5 length is obtained. If you're lucky enough to get a Special permutation, you'll win the bonus. Give you a string s, return the highest bonus.

//* Bouns list:

// Five-of-a-Kind:   ---- 1000
// "!!!!!" or "?????"

// Four-of-a-Kind:    ---- 800
// The string contains a "!!!!" or "????"
// "!!!!?","?!!!!","????!","!????"

// Full House:         ----500
// such as "!!!??" or "???!!"...

// Three-of-a-Kind:    ---- 300
// The string contains a "!!!" or "???"
// such as "!!!?!","!???!"...

// Two pair:           ---- 200
// The string contains two "!!" or "??"
// such as "??!!?","!!?!!"

// A Pair:             ---- 100
// The string contains a "!!" or "??"
// such as "?!??!","!!?!?"

// Others              ---- 0
// such as "?!?!?","!?!?!"

// Examples

// slot("!!!!!") === 1000
// slot("!!!!?") === 800
// slot("!!!??") === 500
// slot("!!!?!") === 300
// slot("!!?!!") === 200
// slot("!!?!?") === 100
// slot("!?!?!") === 0

//*===========================================================

// function slot(s){
//     if (s === "!!!!!" || s === "?????") {return 1000};
//     if (s.includes("!!!!") || s.includes("????")) {return 800};
//     if (s === "!!!??" || s === "???!!" || s === '??!!!' || s === '!!???') {return 500};
//     if (s.includes("!!!") || s.includes("???")) {return 300};
//     if (s === "!!?!!" || s === "??!??" || s === '!!??!' || s === '??!!?' || s === '!??!!' || s === '?!!??') {return 200};
//     if (s.includes("??") || s.includes("!!")) {return 100};
//     return 0;
//   }


//* 10. Return a function that will trim a string (the first argument given) if it is longer than the maximum string length (the second argument given). The result should also end with "..."

//* These dots at the end also add to the string length.

//* So in the above example, trim("Creating kata is fun", 14) should return "Creating ka..."

//* If the maximum string length is smaller than or equal to 3 characters, then the length of the dots is not added to the string length.

//* e.g. trim("He", 1) should return "H...", because 1 <= 3

//* If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.

//* e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"


// function trim(str, size) {
//     if (str.length <= size) return str;
//     if (str.length < 3 || size <= 3) {
//       return str.slice(0, size) + '...';
//     } else return str.slice(0, size-3)+'...';    
//     }

//* 11. Covfefe
//* Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.

//* For the languages where the string is mutable (such as ruby), don't modify the given string, otherwise this will break the test cases.

// function covfefe(str){
//     //covfefe !    
//     if(str.includes('coverage')) {
//         str = str.replaceAll('coverage', 'covfefe');      
//     } else str = str + ' covfefe';
//     console.log('str: ', str);
//     return str;
//   }

//* 12. Set Reducer
//* Intro
//* These arrays are too long! Let's reduce them!

//* Description
//* Write a function that takes in an array of integers from 0-9, and returns a new array:

//* Numbers with no identical numbers preceding or following it returns a 1: 2, 4, 9  => 1, 1, 1
//* Sequential groups of identical numbers return their count: 6, 6, 6, 6 => 4
//* Example

// [0, 4, 6, 8, 8, 8, 5, 5, 7] => [1, 1, 1, 3, 2, 1]

//*Your function should then repeat the process on the resulting array, and on the resulting array of that, until it returns a single integer:

// [0, 4, 6, 8, 8, 8, 5, 5, 7] =>  [1, 1, 1, 3, 2, 1] => [3, 1, 1, 1] => [1, 3] => [1, 1] => [2]

//* When your function has reduced the array to a single integer following these rules, it should return that integer.

// [2] => 2

//* Rules and assertions
//* All test arrays will be 2+ in length
//* All integers in the test arrays will be positive numbers from 0 - 9
//* You should return an integer, not an array with 1 element

// function setReducer(input) {
//     let finalNumber = 0;               
//         while (input.length > 1) {
//             let preview = input[0],
//                 counter = 1,
//                 tempArr = [];
//             for (let i = 1; i <= input.length; i += 1) { 
//                 if (input[i] !== preview) {
//                     tempArr.push(counter);
//                     counter = 1;                                                 
//                 } else counter += 1;
//                 preview = input[i];                
//             }   
//         input = tempArr;
//         tempArr = [];         
//         }
//     finalNumber = input.toString(); 
//     return Number(finalNumber)
// } 


//* 13. Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

//* Consult the solution set-up for the exact data structure implementation depending on your language.

//* Example:

//orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

// const orderedCount = function (text) {
//     const baseArr = text.split('')
//     let arr = [],
//         tempArr = [],
//         count = [],
//         tempStr = ''
//     for (let i = 0; i < baseArr.length; i += 1) {
//        if (!tempStr.includes(baseArr[i])) {
//             tempArr.push(baseArr[i]);
//             tempStr += baseArr[i]
//             count = baseArr.filter((symbol) => {return symbol === baseArr[i]} )
//             tempArr.push(count.length);            
//             arr.push(tempArr);
//             tempArr = [];
//         }
//     }
    
//     return [...arr];
//   }

//* 14. Help Suzuki count his vegetables....
//* Suzuki is the master monk of his monastery so it is up to him to ensure the kitchen is operating at full capacity to feed his students and the villagers that come for lunch on a daily basis.
//* This week there was a problem with his deliveries and all the vegetables became mixed up. There are two important aspects of cooking in his kitchen, it must be done in harmony and nothing can be wasted. Since the monks are a record keeping people the first order of business is to sort the mixed up vegetables and then count them to ensure there is enough to feed all the students and villagers.
//* You will be given a string with the following vegetables:

// "cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"

//* Return a list of tuples with the count of each vegetable in descending order. If there are any non vegetables mixed in discard them. If the count of two vegetables is the same sort in reverse alphabetical order (Z->A).

// (119, "pepper"),
// (114, "carrot"),
// (113, "turnip"),
// (102, "onion"),
// (101, "tofu"),
// (100, "cabbage"),
// (93, "mushroom"),
// (90, "cucumber"),
// (88, "potato"),
// (80, "celery")

//! Проработать!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function countVegetables(string){

//     const dict=["cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"]
//     const arr=[].concat(string.split(' ')).map(v=>v.replace(/\n$/g,'')).filter(v=>v.length&&dict.includes(v));
//     let obj={};
//     arr.map(v=>obj[v]=obj[v]?obj[v]+1:1);
//     const keys=Object.keys(obj)
//     const values=Object.values(obj)
//     const answ=[];
//     keys.map((v,i)=>answ.push([values[i],v]))
//     return answ.sort((a,b)=>{
//     if (a[0]<b[0]){
//     return 1}
//     if (a[0]>b[0]){
//     return -1}
//     if (a[0]===b[0]){
//       return b[1].localeCompare(a[1])
//     }
//     })
//   }

//* 15. Complete the function that takes a string of English-language text and returns the number of consonants in the string.

//* Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

// function consonantCount(str) {
//     let count = 0;
//      for (let letter of str) {
//       if ('qwrtplkjhgfdszxcvbnmyQWRTPLKJHGFDSZXCVBNMY'.includes(letter)) {
//         count += 1
//       }
//      }
//      return count
//   }

//* 16. Please write a function that sums a list, but ignores any duplicate items in the list.
//* For instance, for the list [3, 4, 3, 6] , the function should return 10.

// function sumNoDuplicates(numList) {
//     let sum = 0,
//         arr = numList.slice(0);
//     for (let i = 0; i < arr.length; i += 1) {
//       let num = arr[i];
//       delete arr[i];
//       if (!arr.includes(num)) {
//         sum += num;
//       } else arr = numList.slice(0);
//     }
//     console.log(sum)
//     return sum;
//   }

//* Правильный вариант))))))))

// function sumNoDuplicates(numList) {
//     const uniqueArr = numList.filter((num,index) => numList.indexOf(num) === index && numList.lastIndexOf(num) === index)
//     return uniqueArr.reduce((x,y) => x + y, 0);
//     }

//* 17. Rock Paper Scissors Lizard Spock 
//* In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:

// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock
// Rock crushes Scissors

//* Task:
//* Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

//* Inputs
//* Values will be given as one of "rock", "paper", "scissors", "lizard", "spock".

// function rpsls(pl1, pl2) {
//     if (pl1 === 'rock') {
//       switch (pl2) {
//         case 'lizard':
//         case 'scissors': return 'Player 1 Won!';
//         case 'rock': return 'Draw!';      
//         default: return 'Player 2 Won!';      
//       }
//     } else if (pl1 === 'lizard') {
//       switch (pl2) {
//         case 'spock':
//         case 'paper':
//           return 'Player 1 Won!';
//         case 'lizard': return 'Draw!';
//         default: return 'Player 2 Won!';      
//       }
//     } else  if (pl1 === 'scissors') {
//       switch (pl2) {
//         case 'lizard':
//         case 'paper':
//           return 'Player 1 Won!';
//         case 'scissors': return 'Draw!';
//         default: return 'Player 2 Won!';      
//       }
//     } else  if (pl1 === 'paper') {
//       switch (pl2) {
//         case 'rock':
//         case 'spock':
//           return 'Player 1 Won!';
//         case 'paper': return 'Draw!';
//         default: return 'Player 2 Won!';      
//       }
//     } else  if (pl1 === 'spock') {
//       switch (pl2) {
//         case 'rock':
//         case 'scissors':
//           return 'Player 1 Won!';
//         case 'spock': return 'Draw!';
//         default: return 'Player 2 Won!';      
//       }
//     }
//     console.log(pl1, pl2);
//   }

//* С помощью объектов

// function rpsls(pl1, pl2) {
//   if (pl1 === pl2) return 'Draw!'
//   let rules = {
//       'paper': ['rock', 'spock'],
//       'rock': ['lizard', 'scissors'],
//       'lizard': ['spock', 'paper'],
//       'spock': ['scissors', 'rock'],
//       'scissors': ['lizard', 'paper']       
//   }
//   if (rules[pl1].includes(pl2))
//       return 'Player 1 Won!'
//   else
//       return 'Player 2 Won!'
// }

//* 18. Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

// function removeConsecutiveDuplicates(s)  {
//   let tempS =  s.split(' '),
//   cloneS = []
// for (let i = 0; i < tempS.length; i += 1) {
// if (tempS[i + 1] !== tempS[i]){
//   cloneS.push(tempS[i])    
// }
// }
// return cloneS.join(' '); 
// }

//* OR....
// const removeConsecutiveDuplicates = s => s.split(" ").filter((x,i,arr) => x!=arr[i-1]).join(" ");


//* 19.Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
//* The input will be a lowercase string with no spaces and an array of digits.

//*Good luck!

// function capitalize(s, arr) {
//     let tempArr = s.split(''),
//         newArr = [];    
//       for (let i = 0; i < tempArr.length; i++) {        
//         if (arr.includes(i)) {
//           newArr.push(tempArr[i].toUpperCase())
//           } else newArr.push(tempArr[i])
//         }     
//     return newArr.join('');
//   };

//* OR.. with .MAP

// function capitalize(str, arr){
//     const arrLetters = [...str]
//     arr.map(el=>  el > str.length ? '' : arrLetters[el] = arrLetters[el].toUpperCase() )
//     return arrLetters.join('')
//   };
//* OR...
// function capitalize(s,arr){
//     return [...s].map((x,i)=>arr.includes(i)?x.toUpperCase():x).join('')
//   };


//* 20. Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

//* The input will be a lowercase string with no spaces.

// function capitalize(s) {
//     let evenString = [],
//         oddString = [];
//     evenString.push(s[0].toUpperCase());
//     oddString.push(s[0]);
//     for (let i = 1; i < s.length; i++) {
//       if (i % 2 === 0) {
//         evenString.push(s[i].toUpperCase());
//         oddString.push(s[i]);
//       } else {evenString.push(s[i]);
//               oddString.push(s[i].toUpperCase());}
//     }
//     return [evenString.join(''), oddString.join('')];
//   }

//* OR... with .MAP

// function capitalize(s){
//     return [[...s].map((x,i) => i % 2 == 0 ? x.toUpperCase() : x).join(''),
//             [...s].map((x,i) => i % 2 != 0 ? x.toUpperCase() : x).join('')]
//   }

// function capitalize(s){
//     return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
//   };

  //* OR...

//   function capitalize(s) {
//     return s.split('').reduce((acc, val, i) => {
//         acc[0] += i % 2 === 0 ? val.toUpperCase() : val.toLowerCase();
//         acc[1] += i % 2 === 0 ? val.toLowerCase() : val.toUpperCase();
//         return acc;
//     }, ['', '']);
// };

//* 21. Given an array, return the difference between the count of even numbers and the count of odd numbers. 0 will be considered an even number.

// For example:
// solve([0,1,2,3]) = 0 because there are two even numbers and two odd numbers. Even - Odd = 2 - 2 = 0.  

//* Let's now add two letters to the last example:

//* solve([0,1,2,3,'a','b']) = 0. Again, Even - Odd = 2 - 2 = 0. Ignore lettersThe input will be an array of lowercase letters and numbers only.

//* solve ["0","1","2","3","a","b"] = 0 

// function solve(a){
//     let diff = 0,
//         oddSum = 0,
//         evenSum = 0,
//         onlyNum = [];
//     a.forEach((num) => {
//         if (Number(num)  || num === 0) {
//         onlyNum.push(num);
//         }
//         });
//     onlyNum.forEach((num) => num % 2 === 0 ? evenSum += 1 : oddSum += 1);
//     diff = evenSum - oddSum;  
//     return diff;
//   }
//* OR...
// function solve(a){
//     return a.reduce(((x, y) => Number.isInteger(y) ? (y%2 === 0 ? x+1 : x-1) : x), 0);
//   } 

//* 22 The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// function solve(s) {
//     let sArr = s.split(''),    
//         counts = 1,
//         result = [];
//     for (let i = 0; i < sArr.length; i++) {
//      if ('aeiou'.includes(sArr[i]) && 'aeiou'.includes(sArr[i - 1])) {
//        counts += 1;
//        result.push(counts);  
//      } else  counts = 1;
//     }
//     result.push(counts); 
//     result.sort((a, b) => b - a);
//      console.log(s)
//     return result[0];
//     }

//* OR...

// const solve = s => s.split(/[^aeiou]/).reduce((s,n)=> Math.max(s,n.length),0);
//* OR...
 //function solve(s){
//  return Math.max(...s.match(/[aeiou]+/g).map(x => x.length));
// }

//* My PC got infected by a strange virus. It only infects my text files and replaces random letters by *, li*e th*s (like this).

//* Fortunately, I discovered that the virus hides my censored letters inside root directory.

//* It will be very tedious to recover all these files manually, so your goal is to implement uncensor function that does the hard work automatically.

// Examples
// uncensor("*h*s *s v*ry *tr*ng*", "Tiiesae") ➜ "This is very strange"

// uncensor("A**Z*N*", "MAIG") ➜ "AMAZING"

// uncensor("xyz", "") ➜ "xyz"

//* Notes
//* Expect all discovered letters to be given in the correct order. Discovered letters will match the number of censored ones. Any character can be censored.

// function uncensor(infected, discovered) {
//     let count = 0,
//         uncensoredStr = infected;
//     for (let i = 0; i < infected.length; i++) {
//       if (infected[i] === '*') {      
//          uncensoredStr = uncensoredStr.replace(infected[i], discovered[count]);
//         count++
//       }
//     }  
//     return uncensoredStr;
//   }

//* OR...

// function uncensor(infected, discovered, it=0) {
//     return infected.replace(/\*/g, e=>discovered[it++]);
//   }

//* 24. Growth of a Population

//* In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

//* At the end of the first year there will be: 
//*1000 + 1000 * 0.02 + 50 => 1070 inhabitants

//* At the end of the 2nd year there will be: 
//* 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

//* At the end of the 3rd year there will be:
//* 1141 + 1141 * 0.02 + 50 => 1213

//* It will need 3 entire years.
//* More generally given parameters:

//* p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass) the function nb_year should return n number of entire years needed to get a population greater or equal to p. aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
//* Note: Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

// function nbYear(p0, percent, aug, p) {
//     let years = 0;
//     for (years; p0 < p; years++) {
//       p0 += p0 * (percent / 100) + aug;
//       p0 = Math.floor(p0);
//     }
//     return years;
//   }




//* 25. Jenny the youngest detective

//* Jenny is 9 years old. She is the youngest detective in North America. Jenny is a 3rd grader student, so when a new mission comes up, she gets a code to decipher in a form of a sticker (with numbers) in her math notebook and a comment (a sentence) in her writing notebook. All she needs to do is to figure out one word, from there she already knows what to do. And here comes your role - you can help Jenny find out what the word is!

//* In order to find out what the word is, you should use the sticker (array of 3 numbers) to retrive 3 letters from the comment (string) that create the word.

//* Each of the numbers in the array refers to the position of a letter in the string, in increasing order. Spaces are not places, you need the actual letters. No spaces. The returned word should be all lowercase letters. if you can't find one of the letters using the index numbers, return "No mission today". Jenny would be very sad, but that's life... :(

//Example: input: [5, 0, 3], "I Love You" output: "ivy" (0 = "i", 3 = "v", 5 = "y")



// function missingWord(nums, str) {
//     nums.sort((a,b) => a - b)
//     str = str.split(' ').join('')
//     let strArr = [...str],
//         word = [];
//     for (let i = 0; i < nums.length; i++) {
//       word.push(strArr[nums[i]])
//     }  
//     if (word.join('').toLowerCase().length === 3){
//       return word.join('').toLowerCase()
//     } else return 'No mission today'
//   }
  

//* OR...!!!!!!!!!!!!!!!!!!!!!!!

// function missingWord(nums, str) {
//     return str.replace(/\s/g,'').length > Math.max(...nums) ? nums.sort((a,b)=>a-b).map(v=>str.replace(/\s/g,'')[v]).join('').toLowerCase() : 'No mission today';
//   }



//* 26. Page replacement algorithms: FIFO

//*In a computer operating system that uses paging for virtual memory management, page replacement algorithms decide which memory pages to page out when a page of memory needs to be allocated. Page replacement happens when a requested page is not in memory (page fault) and a free page cannot be used to satisfy the allocation, either because there are none, or because the number of free pages is lower than some threshold.

//* The FIFO page replacement algorithm
//* The first-in, first-out (FIFO) page replacement algorithm is a low-overhead algorithm that requires little bookkeeping on the part of the operating system. The idea is obvious from the name: the operating system keeps track of all the pages in memory in a queue, with the most recent arrival at the back, and the oldest arrival in front. When a page needs to be replaced, the oldest page is selected. Note that a page already in the queue is not pushed at the end of the queue if it is referenced again.

//* Your task is to implement this algorithm. The fifo function will take two parameters as input: the number of maximum pages that can be kept in memory at the same time n and a reference list containing numbers. Every number represents a page request for a specific page (you can see this number as the unique ID of a page). The expected output is the status of the memory after the application of the algorithm. Note that when a page is inserted in the memory, it stays at the same position until it is removed from the memory by a page fault.

// Example:
// Given:

// N = 3,
// REFERENCE LIST = [1, 2, 3, 4, 2, 5],
//   * 1 is read, page fault --> memory = [1];
//   * 2 is read, page fault --> memory = [1, 2];
//   * 3 is read, page fault --> memory = [1, 2, 3];
//   * 4 is read, page fault --> memory = [4, 2, 3];
//   * 2 is read, already in memory, nothing happens;
//   * 5 is read, page fault --> memory = [4, 5, 3].
// So, at the end we have the list [4, 5, 3], which is what you have to return. If not all the slots in the memory get occupied after applying the algorithm, fill the remaining slots (at the end of the list) with -1 to represent emptyness (note that the IDs will always be >= 1).

//* NOT works

// function fifo(n, referenceList) {
//     let result = [],
//         count = 0;  
//    for (let i = 0; i < referenceList.length; i++) {
//      if (!result.includes(referenceList[i])){
//        if (result.length < n) {
//           result.push(referenceList[i])
//         } else {        
//             if (count < n) {
//               if (!result.includes(referenceList[i])){
//                 result.splice(count, 1, referenceList[i])
//               };
//               count++
//             } else {
//               count = 0;
//               if (!result.includes(referenceList[i])) 
//               {result.splice(count, 1, referenceList[i])}
//             }         
//           }
//       }
//    }
//    for (let j = 0; j <= n; j++) {
//     if (result.length < n) result.push(-1)
//    } 
//       return result;
//   }

//* Solution 

// function fifo(n, referenceList) {
//     let result = Array(n).fill(-1),
//         position = 0
// for (let i of referenceList) {
//     if (!result.includes(i)) {
//         result[position] = i
//         position = (position + 1) % n
//     }
// }
// return result
// }       


//* 27. Arithmetic progression

//*  In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

//* The result should be a string of numbers, separated by comma and space.

// Example
// # first element: 1, difference: 2, how many: 5
// arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"

// function arithmeticSequenceElements(a, d, n) {
//     let arr = [],
//         num = a;
//     arr.push(a)
//     for (let i = 1; i < n; i++) {
//       num += d
//       arr.push(num)
//     }
//       return arr.join(', ');
//   }

//* OR

// [...Array(count)].map((_, index) => start + difference * index).join(', ');




//*  28. Sort by Last Char
//* Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

//*If two words have the same last letter, they returned array should show them in the order they appeared in the given string.
//* All inputs will be valid.

// function last(x){
//   return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
//   }

//* 29 T.T.T.#5: Only you ===========!!!! NOT SOLVED  !!!!===================

//* Rules
//* Please determine if the string s is "only you":

//* The string should contains "you". Such as "only you","I love you","Nice to meet you";
//* "you" can be discontinuous. Such as "y o u","y@o#u","yaobu";
//* "you" should ignore case. Such as "You","YOU","YoU".
//* The string should NOT contains "I","me","he","him","they","them","we". They MUST be continuous, but ignore the case.
//* If the string s conforms to the above condition, returns true; otherwise, returns false.

// Examples
// onlyYou("you") should return true
// onlyYou("YoU") should return true
// onlyYou("y o u") should return true
// onlyYou("yxoxu") should return true
// onlyYou("only you") should return true
// onlyYou("I love you") should return false
// onlyYou("I hate you") should return false
// onlyYou("Do you love me?") should return false
// onlyYou("we trust you") should return false
// onlyYou("you hit him") should return false
// onlyYou("I love youtube") should return false

// function onlyYou(s){
//   s=s.replace(/[^\w]/g,'')
//   if (/I|me|he|him|they|them|we/gi.test(s)) return false
//   s=s.replace(/[^you]/gi,'')
//   if (/y(.*?)o(.*?)u/gi.test(s)) return true
//   return false
//  }


//* 29. Find the nth Digit of a Number

//*Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

// Note
// If num is negative, ignore its sign and treat it as a positive value
// If nth is not positive, return -1
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
// Examples(num, nth --> output)
// 5673, 4 --> 5
// 129, 2 --> 2
// -2825, 3 --> 8
// -456, 4 --> 0
// 0, 20 --> 0
// 65, 0 --> -1
// 24, -8 --> -1




// function findDigit(num, nth) {  
//   console.log(num, nth)
//   if (nth <= 0) {
//    return -1
//  } else if (nth > Math.abs(num).toString().length) {
//    return 0
//  } else  {
//     let arr = num.toString().split('').map(i => +i)
//     return arr[arr.length - nth] 
//    }
// }

//* 30. Vowel Count

//* Return the number (count) of vowels in the given string.
//* We will consider a, e, i, o, u as vowels for this Kata (but not y).
//* The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//   let arr = [];
//   [...str].filter(s => 'aeiou'.includes(s) ? arr.push(s) : s)
//   return arr.length
// }

//* OR...

// function getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }

//* 31. Digit*Digit

//* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

//* For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

//*Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

//* Note: The function accepts an integer and returns an integer.



// function squareDigits(num){
//   return Number(num.toString().split('').map(s => +s).map(n => Math.pow(n, 2)).join(''))
//  }





//* 32. Highest and Lowest
//* In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

//* Notes
//* All numbers are valid Int32, no need to validate them. There will always be at least one number in the input string. Output string must be two numbers separated by a single space, and highest number is first.

// function highAndLow(numbers){
//   let arr = [],
//       numArr = numbers.split(' ').map(n => +n)      
//   arr.push(Math.max(...numArr), Math.min(...numArr))  
//   return arr.map(n => n.toString()).join(' ')
// }