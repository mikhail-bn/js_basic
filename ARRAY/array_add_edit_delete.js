const salariesOfDevelopers = [400, 550, 700, 2000, 250];


// Добавление элементов - push - в конец массива;  unshift - в начало


const newSeniorDeveloperSalary = 5000;
salariesOfDevelopers.push(newSeniorDeveloperSalary, 5001, 5002);
console.log('salariesOfDevelopers push:', salariesOfDevelopers);

salariesOfDevelopers.unshift(100, 101);
console.log('salariesOfDevelopers unshift:', salariesOfDevelopers);





// Удаление элементов shift - с начала, pop - с конца;


const firstRemovedElement = salariesOfDevelopers.shift(); // Покажет удаляемый элемент
console.log('firstRemovedElement: ', firstRemovedElement);
salariesOfDevelopers.shift();
console.log('salariesOfDevelopers shift:', salariesOfDevelopers);

const lastRemovedElement = salariesOfDevelopers.pop();
console.log('lastRemovedElement: ', lastRemovedElement);
console.log('salariesOfDevelopers pop:', salariesOfDevelopers);




// Изменять элементы массива

//salariesOfDevelopers[4] = 6000;
console.log('salariesOfDevelopers change 4:', salariesOfDevelopers);
