const goodInfo = {    
    id: 1,
    price: 80,
    currency: '$',
    name: 'shoes',
}
// console.log('goodInfo: ', goodInfo);



//* Цикл  =======   for in ===========

// for (const key in goodInfo) {
//     //console.log('key: ', key);
//     const value = goodInfo[key]
//     console.log('value: ', value);
// }

//* =======  Object.keys()  .values()   .entries()   ==========

const keys = Object.keys(goodInfo) // Создаст массив с ключами из объекта goodInfo
console.log('keys: ', keys);

const values = Object.values(goodInfo) // Создаст массив со значениями из объекта goodInfo
console.log('values: ', values);

const entries = Object.entries(goodInfo) // Создаст массив с массивами из объекта goodInfo в кот будут входить ключ-значение
console.log('entries: ', entries); 
console.log('entries: ', entries[0]); // выдаст первый - 0й - массив массива entries

