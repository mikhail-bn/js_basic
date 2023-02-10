
//* Ключи могут принимать тип     string  и symbol
//* Значения могут принимать любой тип

const id = Symbol('id');
const id2 = Symbol('id2');
const user = {  
    [id]: 1,  
    name: 'Mikhail',
    name: 'Vasya', // одинаково названные ключи отобразит только последний
    10: '1234',
    undefined: undefined,
    [false]: false,
} // То есть все ключи будут "преобразованы" в строчный тип

console.log(Object.keys(user)); // выдаст массив из ключей объекта User
console.log('user:', user[id]); // Обращение в скобках без кавычек - к Symbol
console.log('user:', user['name']); 


// in

console.log('name' in user); // Проверка выдаст true
console.log('lang' in user); // Выдаст false, т.к. ключа lang не существует
console.log(id in user); // Обращение к ключу с типом данных Symbol - без кавычек - выдаст true
console.log(id2 in user); // Обращение к ключу не добавленному в объект с типом данных Symbol выдаст false