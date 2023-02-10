const developerInfo = {
    age: 25,
    experience: 3,
    name: 'Mikhail',
}

const developerExtraInfo = {
    name: 'Ivan',  // при объединении с совпадением ключей применится последний кот указан в объединении, т.е.ключ из массива developerExtraInfo потому что в объединении он указан последним
    height: 180,
    isJunior: false,
    
}

const developer = {    
    ...developerInfo,
    ...developerExtraInfo,
    name: 'Vasya', // сюда можно добавлать новые ключи и если они совпвдают с предыдущими ключами в объектах то отображаться будет последний
}
console.log('developer: ', developer);

//* =========    Object.assign

const developerTwo = Object.assign(developerInfo, developerExtraInfo)
console.log('developerTwo: ', developerTwo);