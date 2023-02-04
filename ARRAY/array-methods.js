//* splice    someArray.splice(0, 1) 

// const cars = ['BMW', 'Mersedes', 'Skoda'];
// const removedElements = cars.splice(0, 2, 'Audi', 'Bugatti');
// console.log('cars: ', cars);
// console.log('removedElementss: ', removedElements);



//* slice не меняет исходный массив Не принимает новые аргументы для массива
// 

const agesOfDevelopers = [25, 35, 40, 80];

console.log('agesOfDevelopers.slice:', agesOfDevelopers.slice(0, 2));
console.log('agesOfDevelopers:', agesOfDevelopers);

const slicedAgesOfDevelopers = agesOfDevelopers.slice(0, 2);
console.log('slicedAgesOfDevelopers:', slicedAgesOfDevelopers);




//* indexOf
// возвращает индекс искомого элемента

// const favoriteFood = ['Icecream', 'Carrot', 'Potatos'];
// const indexOfFood = favoriteFood.indexOf('Potatos');
// console.log('indexOfFood:', indexOfFood);




//* includes 
// возвращает true/false при наличии элемента массива

 const technologies = ['Pyton', 'JavaScript', 'C++', 'HTML'];
// const isTechnologyExists = technologies.includes('CSS');
// console.log('isTechnologyExists: ', isTechnologyExists);



//* split + join
// формирование массива из строки принимает в себя символы разделения (', ')

// const listOfOrders = 'T-shirt, shorts, sneakers, backpack';
// const listOfOrdersToArray = listOfOrders.split(', ');
// console.log('listOfOrdersToArray:', listOfOrdersToArray);


// const ordersString = listOfOrdersToArray.join('; ');
// console.log('ordersString: ', ordersString);



//* reverse
// переворачивает массив с конца в начало

technologies.reverse();
console.log('technologies', technologies); 
