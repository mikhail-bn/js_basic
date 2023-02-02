// function declaration Функция объявляется как ДО так И ПОСЛЕ определения

// feedAnimal('Пангалин');
// function feedAnimal(animalName = 'Кошара') {
//     console.log(`Животное ${animalName} покормлено`);
// };


// function expression Функция объявляется ТОЛЬКО ПОСЛЕ определения

// const feedAnimal = function (animalName = 'Кошара') {
//     console.log(`Животное ${animalName} покормлено`);
// };

// feedAnimal('Слон');


// Стрелочная функция Функция объявляется ТОЛЬКО ПОСЛЕ определения

const feedAnimal = (animalName = 'Кошара') => {
    console.log(`Животное ${animalName} покормлено`);
};
feedAnimal('Слон');
