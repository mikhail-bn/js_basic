// toUpperCase() toLowerCase()

const animal = 'Monkey';
console.log('toUpper: ', animal.toUpperCase());
console.log('toLower: ', animal.toLowerCase());
 // При этом строка переменной остается без изменений
console.log(animal);

// Поиск символов  -  indexOf - номер символа с начала,  includes - true/false

const text = `Мой любимый язык программирования Javascript`;
console.log('indexOf поиск: ', text.indexOf(`Javascript`)); // 34
console.log('indexOf поиск: ', text.indexOf(`123`)); // -1
console.log('indexOf поиск: ', text.indexOf(`о`)); // 1
console.log('includes:', text.includes('Javascript')); // true
console.log('includes:', text.includes('000')); // false

// Обрезка строки slice(первый символ - начало - включается, второй - конец - не включается), 
// substring(первый символ - начало - включается, второй - конец - не включается)

const progLanguage = `JavaScript`;
console.log('slice:', progLanguage.slice(1,5));
console.log('substring:', progLanguage.substring(1,5));

// Замена символов в строке       replace(на что заменить, что заменить)  - один первый символ
// replaceAll() - все символы в переменной, может содержать переменные в скобках.

const programmingLanguage = 'JavaScript';
console.log('replace: ', programmingLanguage.replace('a', 'A'));
console.log('replaceAll: ', programmingLanguage.replaceAll('a', 'A'));

// repeat - повторить(кол-во раз)

const textHello = `Привет`;
console.log('repeat: ', textHello.repeat(3));

// trim - убирает пробелы в начале и в конце

const nameOfUser = prompt('Ваше имя?');
console.log('nameOfUser', nameOfUser.trim()); 