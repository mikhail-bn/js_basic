 // const developerNames = ['Mikhail', 'Igor', 'Nastya', 'Ivan'];
// console.log(developerNames[2]);

 //*  ==================================    for   (  начальное значение;    условие;    шаг  )

// for (let i = 0; i < developerNames.length; i += 1) {
//     console.log('i', i);
//     console.log('item of array', developerNames[i]); //* Для показа элементов массива вставить console.log
// }





 //* ====================================   for of (   const someItem    of    someArray  )

// for (const name of developerNames) {
//     console.log('name', name);
// }





//* ========================================== forEach  nameOfArray.forEach((  item,   index,     array) => {});
// позволяет перебирать массив с параметром элемента
// forEach -  callback функия + функция


// developerNames.forEach((item, index, array) => {
//     console.log('name', name);
//     console.log('index', index);
//     console.log('array', array);
// });





//* ========================================================   map 
// позволяет умножить все элементы массива. Создает новый массив, поэтому рекомендуется использовать стрелочную функцию 


// const salariesOfDevelopers = [400, 550, 700, 2000, 250, -2];
// const updatedSalaries = salariesOfDevelopers.map((salary, index, array) => {
//     return salary ** 2;
// });
// console.log('updatedSalaries: ', updatedSalaries);





//* ========================================================   filter
// фильтрует массив создавая новый согласно условия, выводит ВСЕ элементы удовлетворяющие условию. Создает новый массив, поэтому рекомендуется использовать стрелочную функцию 



// const filteredSalaries = salariesOfDevelopers.filter((salary, index, array) => {
//     return index % 2 === 0 && index != 0; //* возвращает новый массив согласно условия
// });

// console.log('salariesOfDevelopers: ', salariesOfDevelopers);
// console.log('filteredSalaries: ', filteredSalaries);





//*  ===========================================================   find (() => {})
// Принимает также три параметра, которые при не использовании можно не писать, применяется как правило для вывода одного элемента массива согласно условию, т.к результатом метода является вывод ОДНОГО первого найденного элемента, старый массив сохраняет,  поэтому рекомендуется использовать стрелочную функцию, если не находит параметр выводит undefined



// const foundSomeSalary = salariesOfDevelopers.find((salary) => {
//     return salary  < 2000;
// });

// console.log('foundSomeSalary: ', foundSomeSalary);




//* ======================================================  findIndex
// таже самое что предыдущий метод только возвращает индекс искомого элемента, если не найдет вернёт -1

// const searchSomeSalary = salariesOfDevelopers.findIndex((salary) => {
//     return salary === 2000;
// });

// console.log('searchSomeSalary: ', searchSomeSalary);




//* ========================================================    some    every   TRUE / FALSE
// Структура та же с callback, возвращает true / false  - some - хотябы один элемент удовлетворяющий условию;  every - все элементы  



// const elementExists = salariesOfDevelopers.some((salary) => {
//     return salary > 1000;
// });

// console.log('elementExists: ', elementExists);


// const allElementsExist = salariesOfDevelopers.every((salary) => {
//     return salary > 0;
// });

// console.log('allElementsExist: ', allElementsExist);




//* ================================  reduce  someArray.reduce((acc, item1, index, array) => {}, 0)
// Принимает параметр ACC кроме трех предыдущих параметров 
// обязательно содержит (callback, в конце через запятую после функции содержит начальную величину аккумуляции массива)
// Удобен для подсчета суммы всех элементов массива, так как без оператора цикла перебирает элементы массива и при надлежащем условии например может добавлять элементы в аккумуляцию (return acc + item)




// const sum = salariesOfDevelopers.reduce((acc, salary, index, array) => {
//     console.log('acc/salary:', acc, salary);
//     return acc + salary; //* Аккумулятор + значение/следующее значение
// }, 0);
// console.log(sum);




//* ===========================================   sort   someArray.sort((a, b) => {})
// Принивает элементы a и b в callback для условий сортировки
// ИЗМЕНЯЕТ ТЕКУЩИЙ МАССИВ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// const someSort = salariesOfDevelopers.sort((a, b) => {
//     console.log();
        // return a - b //* По возрастанию
//         return b - a; //* Обратная сортировка
// });  
// console.log(salariesOfDevelopers);


//* Если убрать callback из sort элементы примут строковые параметры
// developerNames.sort(); //* Сортировка по алфавиту строковых
// console.log('developerNames: ', developerNames);

//* Строковая сортировка
// developerNames.sort((a, b) => {
//     if (a < b) {
//         return 1;
//     } 
//     if (a > b) {
//         return -1;
//     } return 0;
// }); //* Сортировка по алфавиту обратный порядок строковых
// console.log('developerNames: ', developerNames);


