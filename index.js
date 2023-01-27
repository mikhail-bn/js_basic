// Типы переменных ========================================================================================================================================================

// 1. ПРИМИТИВЫ - 7
// 2. НЕ ПРИМИТИВЫ - 1 object

console.log('Hello');
// alert('Закрывай!'); 
// prompt('Who are you?', 'Ты кто?');

// 1. String
const favoriteDrink = 'Coffee' ;
console.log(favoriteDrink);

// 2. Number
const numberOfCups = 5;
console.log(numberOfCups);

// 3. Boolean
const isDrinkCold = true;
console.log(isDrinkCold);

// 4. Null
const studentFavoriteDrink = null;
console.log(studentFavoriteDrink);

// 5. Udefined
let carOwner;
console.log(carOwner);

// 6. Object
const drink =  {
    favoriteDrink: 'Coffee',
    isDrinkCold: true,
    numberOfCups: 5
}
console.log(drink);

// 7. Symbol
const id = Symbol('id');
console.log(id);

// 8. Bigint 2^53-1
const bigIntNumber = BigInt(10);
//                 = 10n;
console.log(bigIntNumber);

// ========================================================================================================================================================

// 1. ПРИМИТИВЫ - 7
// 2. НЕ ПРИМИТИВЫ - 1 object