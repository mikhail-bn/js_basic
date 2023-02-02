// Способы объявления строковых данных

const nameOne = 'Mikhail';
const nameTwo = "Mikhail";
const nameThree = `Mikhail`;

console.log(nameOne);
console.log(nameTwo);
console.log(nameThree);

// Объединение строк конкатенация

const profession = 'Programmer';
const allInfo = nameOne + ' ' + profession;
// console.log(allInfo);

const allInfoTwo = `${nameThree} ${profession}`;
console.log(allInfoTwo);

// Свойства строк

// Длина строки
const progLanguage = 'JavaScript';
console.log('length', progLanguage.length); //10

// Символ из строки
console.log('1st symbol: ', progLanguage[0]); //J




