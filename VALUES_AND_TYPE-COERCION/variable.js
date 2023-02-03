// //  ПРЕОБРАЗОВАНИЕ К СТРОКЕ
// const age = 20;
// console.log('number age:', typeof age);
// console.log('string age:', typeof String(age)); // Явное преобразование

// const updatedAge  = '1' + 20; // Не явное преобразование
// console.log('updatedAge', typeof updatedAge);


// //  ПРЕОБРАЗОВАНИЕ К ЧИСЛУ
// const experienceInJavaScript = '5';
// console.log('string experienceInJavaScript: ', typeof experienceInJavaScript);
// console.log('string experienceInJavaScript: ', typeof Number(experienceInJavaScript)); // Явное
// console.log('experienceInJavaScript', +experienceInJavaScript); // Не явное
// console.log('Hello world', Number('Hello world')); // NaN


// //  ПРЕОБРАЗОВАНИЕ К БУЛЕАН
// console.log('Hello world', Boolean('Hello world'));
// console.log('5', Boolean(5));

// // К false приводятся NaN undefined null 0 ''
// console.log('null', Boolean(null));
// console.log('undefined', Boolean(undefined));
// console.log(0, Boolean(0));
// console.log('', Boolean(''));

let someNumber = 8; // someNumber:  8 8 true
console.log('someNumber: ', Number(someNumber), String(someNumber), Boolean(someNumber));

let someString = 'home'; // someString:  NaN home true
console.log('someString: ', Number(someString), String(someString), Boolean(someString));

let someUndefined = undefined; // someUndefined:  NaN undefined false
console.log('someUndefined: ', Number(someUndefined), String(someUndefined), Boolean(someUndefined));

let someBoolean = true; // someBoolean:  1 true true
console.log('someBoolean: ', Number(someBoolean), String(someBoolean), Boolean(someBoolean));

let someNull = null; // someNull:  0 null false
console.log('someNull: ', Number(someNull), String(someNull), Boolean(someNull));

let someObject = {key: 1, key2: 2}; // someObject:  NaN [object Object] true
console.log('someObject: ', Number(someObject), String(someObject), Boolean(someObject));

let someBigInt = 10; // someBigInt:  10 10 true
console.log('someBigInt: ', Number(someBigInt), String(someBigInt), Boolean(someBigInt));
