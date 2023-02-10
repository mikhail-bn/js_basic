
//* Типы переменных в JavaScript:
// 7 - примтывы - не ссылочный тип
// 1 - не примитив OBJECT - ссылочный тип

let name = '';

const setName = (entity, value) => {
    if (typeof entity === 'object') {
        entity.name = value;
    } else {
        entity = value;
    }
}

const developer = {
    name: 'Mikhail',
}

let developerName = 'Mikhail';

setName(developer, 'Mihai');
setName(developerName, 'Mihai');


// console.log('developer: ', developer);
// console.log('developerName: ', developerName);


const entity = {};
const entityCopy = entity;

console.log(entity === entityCopy); // Выведет true, т.к. ссылка на объект одна и таже
console.log({} === {}); // Выведет false, т.к. {} - это объект ссылочный и  эти ссылки различны
console.log([] === []); // Выведет false, т.к. [] - это тоже object


console.log('hello' == 'hello'); // Выведет true, т.к примитивы не имеют ссылок