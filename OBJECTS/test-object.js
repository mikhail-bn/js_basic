//* Задание №1

//* Вам дан массив пользователей users. У каждого из них есть свойство status, которое может равняться или “online”, или “offline”.
// const users = [
//     {
//     username: 'David',
//     status: 'online',
//     lastActivity: 10
//     },
//     {
//     username: 'Lucy',
//     status: 'offline',
//     lastActivity: 22
//     },
//     {
//     username: 'Bob',
//     status: 'online',
//     lastActivity: 104
//     }
// ]
//* Вам необходимо создать новый массив onlineUsers, который будет содержать объекты только тех пользователей, у которых status равен “online”. После выведите через alert сообщение “Сейчас в онлайн следующие пользователи: usersOnlineNames”, где usersOnlineNames - строка, в которой имена пользователей отображаются через запятую. Для кода выше результат должен быть следующим: “Сейчас в онлайн следующие пользователи: David, Bob”.

// 1. Создание usersOnline массива методом фильтра общего массива с условием равенства ключа status значению 'online'
// Для этого в функцию значению отвечающему за элемент массива помещаем person (весь элемент массиваб являющийся объектом)
// В теле функции прописываем условие обратившись в "подэлементу" через точку

// const usersOnline = users.filter((person) => person.status === 'online');
// console.log('usersOnline: ', usersOnline);

// 2. Далее создадим массив с помощю метода map (преобразование элементов массива) в который войдут только значения ключа username из подобъекта, присвоив в значение отвечающее за элемент массива само значение ключа обратившись к ключу someItem.username как к значению
// Методом join превратим массив в строку

// const usersOnlineNames = usersOnline.map((person) => person.username).join(', ');
// console.log('usersOnlineNames: ', usersOnlineNames);
// alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);


//* Задание №2

//* Представьте, что вы разрабатываете программу выдачи талончиков для местной больницы. До этого талончики выписывались вручную и вам необходимо оптимизировать данную задачу.
//* Вам требуется создать функцию giveTalonsInOrder, которая сортирует очередь из пациентов. Она принимает в себя 2 параметра:
//* 1. patients - массив объектов. Каждый объект хранит информацию об имени пациента и его уникальном номере - id.
//* 2. orders - массив уникальных номеров id, который указывает порядок, в котором должны стоять в очереди пациенты.
//* Функция должна возвращать новый массив, в котором объекты из массива patients будут отсортированы по id из массива  orders.

//* Посмотрите на возможный результат функции giveTalonsInOrder:

// const ordersArr = [4, 2, 1, 3];
// const people = [    
// { id: 1, name: "Максим" },
// { id: 2, name: "Николай" },
// { id: 3, name: "Ангелина" },
// { id: 4, name: "Виталий" },
// ];
// console.log('people: ', people);

// function giveTalonsInOrder(patients, orders) {    
//     const objectWithIndexes = patients.reduce((acc, curPerson) => { // acc - в данном случае является объектом из объектов, то есть данной функцией мы преобразовываем массив объектов (в примере - people) в объект с объектами objectWithIndexes 
//         // curPerson - самим объектом
//         acc[curPerson.id] = curPerson; // Сопоставления индекса объекта acc ( acc[0], acc[1], ... ) со значением ключа id объекта curPerson в объекте объектов acc, то есть curPerson.id выдаст номер, кот помещен в выражение выдающее индекс самого того объекта
//         return acc;
//     }, {});
//     console.log('objectWithIndexes: ', objectWithIndexes);
//     return orders.map((order) => objectWithIndexes[order]); // Преобразование элемента массива orders (а в примере ordersArr) путем присвоения числового значения элемента массива  
// }

// // Вызов функции с помещением соответствующих массивов в значения 
// const result = giveTalonsInOrder(people, ordersArr);
// console.log('result', result);

/* Возвращает массив
[
{ id: 4, name: 'Виталий' },
{ id: 2, name: 'Николай' },
{ id: 1, name: 'Максим' },
{ id: 3, name: 'Ангелина' }
]
*/


//* Задание №3

//* Вам необходимо создать функцию, которая будет работать с объектами. Назовите ее handleObject. handleObject принимает в себя 3 параметра:

//* 1. obj. Объект, с которым будет работать функция
//* 2. key. ключ объекта
//* 3. action. Действие, которое мы будем совершать над объектом
        //* Параметр action может быть 4-мя значениями:
        //* 1. ‘get’. Если action равен ‘get’, то функция handleObject должна вернуть значение ключа key в объекте obj.
        //* 2. ‘add’. Если action равен ‘add’, то функция handleObject должна добавить новый ключ key в объект object и присвоить значение пустой строки “”. Также из функции необходимо возвратить обновленный объект obj.
        //* 3. ‘delete’. Если action равен ‘delete’, то функция handleObject должна удалить свойство key из объекта obj и возвратить обновленный объект. Если action равен любому другому значению, то функция handleObject должна возвратить объект obj.

//* Протестируйте функцию на этом коде:

// const student = {
// name: 'Maxim',
// programmingLanguage: 'JavaScript',
// }

// function handleObjects(obj, key, action) {
//  if (action === 'delete') {
//     delete obj[key];
//     return obj;
//  } else if (action === 'get') {
//     return obj[key]
//  }  else if (action === 'add') {
//     obj[key] = '';
//     return obj
//  }
// }
// const result = handleObjects(student, 'programmingLanguage',
// 'get');
// console.log('result', result);

//* Задание #4

//*Вам необходимо создать функцию giveJobToStudent, которая будет добавлять новое свойство в объект и выводить информацию в модальном окне. Она принимает в себя 2 параметра:
//* 1. student - объект, содержащий информацию о студенте
//* 2. jobName - название новой работы студента

//* Функция giveJobToStudent выводит в модальное окно сообщение “Поздравляем! У студента fullName появилась новая работа! Теперь он jobName”, где fullName - это имя студента, а jobName - название новой работы студента. Функция giveJobToStudent должна возвращать новый объект студента, в котором будут все ключи из объекта student и также появится новый ключ job со значением параметра jobName.

//* Для теста функции giveJobToStudent используйте следующий код:

// const student = {
// fullName: 'Максим',
// experienceInMonths: 12,
// stack: ['HTML', 'CSS', 'JavaScript', 'React'],
// }

// function giveJobToStudent(student, jobName) {
//     alert(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`);
//     student.job = jobName;    
//     return student;
//     /* или return {
//         ...student,
//         job: jobName,
//     }*/
// }
// const updatedStudent = giveJobToStudent(student, 'Веб-разработчик');
// console.log('updatedStudent: ', updatedStudent);

/*
updatedStudent = {
fullName: 'Максим',
experienceInMonths: 12,
stack: ['HTML', 'CSS', 'JavaScript', 'React'],
job: 'веб-разработчик',
}
*/

//* Задание #5 (дополнительное)

//* Представьте, что вы разрабатываете интернет магазин по доставке еды. Вам поставили задачу подсчета итоговой суммы всех товаров в корзине. Вам необходимо создать функцию getTotalPriceOfShoppingBag, которая будет принимать в себя 1 параметр shoppingBag. shoppingBag - это массив продуктов в корзине, состоящий из объектов, в каждом из которых хранится информация о названии продукта (product) и о количестве продукта в корзине (quantity). Также у интернет-магазина есть глобальный объект, в котором хранится вся нужная информация о каждой единице продукта:

const groceries = {
    "Orange Juice": { price : 1.5, discount: 10, },
    "Chocolate": { price : 2, discount : 0, },
    
    }

//* Функция getTotalPriceOfShoppingBag должна возвращать общую стоимость всех товаров в корзине с учетом скидок и с учетом указанных клиентом количеством продуктов. Итоговое значение должно быть округлено до сотых. Это можно сделать с помощью toFixed (https://developer.mozilla.org/...) 

//* Посмотрите на возможно возвращаемое значение функции getTotalPriceOfShoppingBag:

const shoppingBag = [
    { product: 'Chocolate', quantity: 3 },
    { product: 'Orange Juice', quantity: 23 },
    ] 

function getTotalPriceOfShoppingBag() {
    
}
const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log('totalPrice', totalPrice); // Возвращает 37.05


