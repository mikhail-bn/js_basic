// Не стандартные сущности преобразования

console.log('console.log:', String(console.log), Number(console.log), Boolean(console.log)); 
// console.log: function log() { [native code] } // NaN // true

console.log('object:', String({ name: 'Maxim' }), Number({ name: 'Maxim' }), Boolean({ name: 'Maxim' }));
// object: [object Object] NaN true 

// console.log('Symbol("key"):', String(Symbol('key')), Number(Symbol('key')), Boolean(Symbol('key'))); 
// Error

console.log('Number:', String(Number), Number(Number), Boolean(Number)); 
// Number: function Number() { [native code] } NaN true

console.log('Кавычка:', String('"'), Number('"'), Boolean('"') ); 
// Кавычка: " NaN true

console.log('Ноль:', String(0), Number(0), Boolean(0) ); 
// Ноль: 0 0 false

console.log('-десять:', String(-10), Number(-10), Boolean(-10) ); 
// -десять: -10 -10 true

console.log('"-сто пять":', String('-105'), Number('-105'), Boolean('-105')); 
// "-сто пять": -105 -105 true




