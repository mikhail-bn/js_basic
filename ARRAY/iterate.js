const developerNames = ['Mikhail', 'Igor', 'Nastya', 'Ivan'];
// console.log(developerNames[2]);

 //*  ==================================    for (начальное значение; условие; шаг)

// for (let i = 0; i < developerNames.length; i += 1) {
//     console.log('i', i);
//     console.log('item of array', developerNames[i]);
// }





 //* ====================================   for of (начальное значение; условие; шаг)

// for (const name of developerNames) {
//     console.log('name', name);
// }





//* ========================================== forEach  nameOfArray.forEach((name, index, array) => {});


// developerNames.forEach((name, index, array) => {
//     console.log('name', name);
//     console.log('index', index);
//     console.log('array', array);
// });





//* ========================================================   map 
// позволяет умножить все элементы массива 


const salariesOfDevelopers = [400, 550, 700, 2000, 250, -2];
// const updatedSalaries = salariesOfDevelopers.map((salary, index, array) => {
//     return salary ** 2;
// });
// console.log('updatedSalaries: ', updatedSalaries);





//* ========================================================   filter
// фильтрует массив согласно условия

// const filteredSalaries = salariesOfDevelopers.filter((salary, index, array) => {
//     return index % 2 === 0 && index != 0;
// });

// console.log('salariesOfDevelopers: ', salariesOfDevelopers);
// console.log('filteredSalaries: ', filteredSalaries);





//*  ===========================================================   find


// const foundSomeSalary = salariesOfDevelopers.find((salary) => {
//     return salary  < 2000;
// });

// console.log('foundSomeSalary: ', foundSomeSalary);




//* ======================================================  findIndex
// возвращает индекс искомого элемента

// const searchSomeSalary = salariesOfDevelopers.findIndex((salary) => {
//     return salary === 2000;
// });

// console.log('searchSomeSalary: ', searchSomeSalary);




//* ========================================================    some    every   
// возвращает true false  - some - хотябы один элемент удовлетворяющий условию;  every - все элементы  



// const elementExist = salariesOfDevelopers.some((salary) => {
//     return salary > 1000;
// });

// console.log('elementExist: ', elementExist);


// const allElementsExist = salariesOfDevelopers.every((salary) => {
//     return salary > 0;
// });

// console.log('allElementsExist: ', allElementsExist);




//* ================================  reduce  someArray.reduce((acc, item1, index, array) => {}, 0)
// обязательно содержит (callback, начальная величина аккумуляции массива)


// const sum = salariesOfDevelopers.reduce((acc, salary, index, array) => {
//     console.log('acc/salary:', acc, salary);
//     return acc + salary;
// }, 0);
// console.log(sum);




//* ===========================================   sort   someArray.sort((a, b) => {}, 0)


// const someSort = salariesOfDevelopers.sort((a, b) => {
//     console.log();
//     return b - a;
// }, 0);
// console.log(salariesOfDevelopers);



// developerNames.sort(); // Сортировка по алфавиту строковых
// console.log('developerNames: ', developerNames);


developerNames.sort((a, b) => {
    if (a < b) {
        return 1;
    } 
    if (a > b) {
        return -1;
    } return 0;
}); // Сортировка по алфавиту обратный порядок строковых
console.log('developerNames: ', developerNames);