


//* splice    someArray.splice(0, 1) 
// Удаляет элементы массива и добавляет новые с помощью ( индекс с какого начать удалять включая, индекс до каторого удалять не включая, элементы для вставки один или несколько через запятую) или не добавлять новые
// ИЗМЕНЯЕТ НАЧАЛЬНЫЙ МАССИВ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Соответственно может работать БЕЗ помещения в переменную



// const cars = ['BMW', 'Mersedes', 'Skoda'];
// const removedElements = cars.splice(0, 2, 'Audi', 'Bugatti');
// console.log('cars: ', cars);
// console.log('removedElementss: ', removedElements);



//* slice 
// НЕ МЕНЯЕТ исходный массив Не принимает новые аргументы для массива
// Принимает те же параметры что и предыдущий, поэтому работает через вставку в переменную
// Нельзя передавать замену, ТОЛЬКО ДВА ПАРАМЕТРА диапазон удаления

const agesOfDevelopers = [25, 35, 40, 80];

console.log('agesOfDevelopers.slice:', agesOfDevelopers.slice(0, 2));
console.log('agesOfDevelopers:', agesOfDevelopers);

const slicedAgesOfDevelopers = agesOfDevelopers.slice(0, 2);
console.log('slicedAgesOfDevelopers:', slicedAgesOfDevelopers);




//* indexOf
// возвращает индекс искомого элемента, поэтому либо его нужно помещать в переменную, либо метод к массиву будет работать в рамках другог выражения.
// При не нахождении отсутствующего параметра вместо индекса выдаёт -1

// const favoriteFood = ['Icecream', 'Carrot', 'Potatos'];
// const indexOfFood = favoriteFood.indexOf('Potatos');
// console.log('indexOfFood:', indexOfFood);




//* includes 
// возвращает true / false при наличии элемента массива, работает при помещении в новую переменную либо как выражение в рамках другого

//  const technologies = ['Pyton', 'JavaScript', 'C++', 'HTML'];
// const isTechnologyExists = technologies.includes('CSS');
// console.log('isTechnologyExists: ', isTechnologyExists);



//* split - разделяет строку в элементы массива      join - объединяет элементы массива в строку
// Методы строк
// формирование массива из строки, принимает в себя символы разделения (', '), соответственно вернёт НОВЫЙ массив, т.к. работает со строковой переменной, не сработает без помещения в переменную
// Без параметра разделения someString.split() - создаст массив из одного элемента - всей строкой в один элемент
// Если 



// const listOfOrders = 'T-shirt, shorts, sneakers, backpack';
// const listOfOrdersToArray = listOfOrders.split(', ');
// console.log('listOfOrdersToArray:', listOfOrdersToArray);


// const ordersString = listOfOrdersToArray.join('; ');
// console.log('ordersString: ', ordersString);



//* reverse
// переворачивает массив с конца в начало

// technologies.reverse();
// console.log('technologies', technologies); 