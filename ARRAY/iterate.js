// const developerNames = ['Mikhail', 'Igor', 'Nastya', 'Ivan'];
// console.log(developerNames[2]);

// // for (начальное значение; условие; шаг)

// for (let i = 0; i < developerNames.length; i += 1) {
//     console.log('i', i);
//     console.log('item of array', developerNames[i]);
// }

// // for of (начальное значение; условие; шаг)

// for (const name of developerNames) {
//     console.log('name', name);
// }

// forEach  nameOfArray.forEach((name, index, array) => {});

// developerNames.forEach((name, index, array) => {
//     console.log('name', name);
//     console.log('index', index);
//     console.log('array', array);
// });





// map 

const salariesOfDevelopers = [400, 550, 700, 2000, 250, -2];
// const updatedSalaries = salariesOfDevelopers.map((salary, index, array) => {
//     return salary ** 2;
// });
// console.log('updatedSalaries: ', updatedSalaries);





// filter

// const filteredSalaries = salariesOfDevelopers.filter((salary, index, array) => {
//     return index % 2 === 0 && index != 0;
// });

// console.log('salariesOfDevelopers: ', salariesOfDevelopers);
// console.log('filteredSalaries: ', filteredSalaries);

// find

// const foundSomeSalary = salariesOfDevelopers.find((salary) => {
//     return salary  < 2000;
// });

// console.log('foundSomeSalary: ', foundSomeSalary);




// findIndex

// const searchSomeSalary = salariesOfDevelopers.findIndex((salary) => {
//     return salary === 2000;
// });

// console.log('searchSomeSalary: ', searchSomeSalary);




// some (возвращает true false)               every

// const elementExist = salariesOfDevelopers.some((salary) => {
//     return salary > 1000;
// });

// console.log('elementExist: ', elementExist);


const allElementsExist = salariesOfDevelopers.every((salary) => {
    return salary > 0;
});

console.log('allElementsExist: ', allElementsExist);


// reduce  someArray.reduce((acc, item1, index, array) => {}, 0)

salariesOfDevelopers.reduce((acc, salary, index, array) => {
    console.log('acc:', acc);
}, 0);








