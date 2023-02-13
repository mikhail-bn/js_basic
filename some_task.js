//* Найти минимальное из трёх чисел

// const A = prompt('Введите число А');
// const B = prompt('Введите число B');
// const C = prompt('Введите число C');
// console.log('Введены числа А В С. Мы найдем минимальное из них');


// const minValue = (A, B, C) => {
//     let minVal = A;
//     if (B < minVal) {
//         minVal = B
//     } else if (C < minVal) {
//         minVal = C
//     }
//     return minVal
// }

// const result = minValue(A, B, C);
// console.log(`Минимальное значение ${result}`)
// alert(`Минимальное значение ${result}`);


//* Перевернуть слово


// const wordForReverse = 'Юла';
// const reversedWord = wordForReverse.split('').reverse().join('').toLowerCase();
// const reversedWordCap = reversedWord[0].toUpperCase() + reversedWord.slice(1);
// console.log('reversedWordCap: ', reversedWordCap);

// const userWord = prompt('Введите слово для первёртывания с конца в начало');
// const reverseFunc = (userWord) => {
//     const reversedWord = userWord.split('').reverse().join('').toLowerCase();
//     const reversedWordCap = reversedWord[0].toUpperCase() + reversedWord.slice(1);
//     return reversedWordCap;
    
// }
// const toSeeWord = reverseFunc(userWord);
// alert(`Если перевернуть то будет ${toSeeWord}`);


// MATE ACADEMY Задача про цену за номер в отеле

// function getRentalPrice(daysToRest) {
//     let totalCost = 0;  
//     if (daysToRest < 4 && daysToRest > 0) {
//       totalCost = daysToRest * 50;  
//     } else if (daysToRest < 7 && daysToRest > 3) {
//       totalCost = (daysToRest-3) * 40 + 150;    
//     } else if (daysToRest > 6) {
//       totalCost = (daysToRest-6) * 30 + 120 + 150;
//     }
//     return totalCost;
//   }
//   const mySpendings = getRentalPrice(8);
//   console.log('mySpendings : ', mySpendings );
 