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

// const groceries = {
//     "Orange Juice": { price : 1.5, discount: 10, },
//     "Chocolate": { price : 2, discount : 0, },    
//     }

// //* Функция getTotalPriceOfShoppingBag должна возвращать общую стоимость всех товаров в корзине с учетом скидок и с учетом указанных клиентом количеством продуктов. Итоговое значение должно быть округлено до сотых. Это можно сделать с помощью toFixed (https://developer.mozilla.org/...) 

// //* Посмотрите на возможно возвращаемое значение функции getTotalPriceOfShoppingBag:

// const shoppingBag = [
//     { product: 'Chocolate', quantity: 3 },
//     { product: 'Orange Juice', quantity: 23 },
//     ] 

// function getTotalPriceOfShoppingBag(shoppingBag) {
//     const shoppingItems = Object.values(shoppingBag); // Создание массива shoppingItems из значений объекта shoppingBag
//     console.log('shoppingItems: ', shoppingItems);

//     if (shoppingItems.length === 0) {
//         return 0;
//     }
//     // Далее объявление переменной в которой помещается массив с применением к нему метода reduce() с помещением в метод аккумулятора и элемента массива currentProduct
//     const totalPrice = shoppingItems.reduce((acc, currentProduct) => {
//         const { product, quantity } = currentProduct; // Объявляется объект присваивается объявленный в методе элемент currentProduct, соот. при первом переборе reduce() product примет значение 'Chocolate' а quantity - 3. Далее 'Orange Juice' и 23
//         const productObject = groceries[product]; // Объявляется переменная productObject в неё помещается элемент массива groceries, при данной итерации "Chocolate", то есть т.к. "Chocolate" строчный ключ объекта groceries в productObject будет помещено его ("Chocolate") значение кот является объектом -  { price : 2, discount: 0, }
//         const { price, discount } = productObject; // Действие аналогичное началу функции метода - price присвоится 2, discount - 0 
//         const priceWithDiscount = productObject.price - (price * discount / 100); // Объявляется priceWithDiscount, она принимает  -   productObject.price то есть на данной итерации 2  минус выражение 2*0 /100
//         let totalProductPrice = priceWithDiscount * quantity; // Объявляется totalProductPrice и на данном этапе это 2*3
//         return acc + totalProductPrice; // первая итерация 0+6   вторая 6+(1,5-10%)*23 итог 37,05
//     }, 0);

//     return totalPrice.toFixed(2); // toFixed(2) оставляет числу 2 знака после запятой, округлив значение по математическим правилам
// }

// const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
// console.log('totalPrice', totalPrice); // Возвращает 37.05




//* Задание #6 (дополнительное)

//* К вам пришёл заказчик, который является владельцем одной из игровых веб-платформ. Он хочет, чтобы вы разработали для его сайта новую игру, которая покорит сердца многих пользователей. В игре есть 2 игрока: герой и враг. Они будут драться друг с другом. У каждого игрока есть шкала здоровья, которая изначально равна 100. При каждом ударе у противоположного игрока отнимается по 10 единиц здоровья. Побеждает тот, у кого здоровье осталось больше 0. Сейчас вам необходимо создать функцию startGame, которая будет принимать в себя 2 параметра:
//* 1. heroPlayer. Объект игрока, который содержит свойства name - имя героя; health - шкала здоровья, которая изначально равна 100; heatEnemy - функция, которая принимает в себя объект enemy и отнимает у объекта enemy 10 единиц здоровья (ключ health)
//* 2. enemyPlayer. Объект врага, который содержит свойства name - имя героя; health - шкала здоровья, которая изначально равна 100; heatHero - функция, которая принимает в себя объект hero и отнимает у объекта hero 10 единиц здоровья (ключ health) Внутри функции startGame вам необходимо случайным образом генерировать число от 0 до 1. Если выпадает 0, то нужно вызвать метод heatEnemy у объекта heroPlayer, если 1 - то heatHero у enemyPlayer Для того, чтобы функция генерировала несколько раз случайные значения и игроки дрались, пока у кого-то не закончатся жизни, рекомендуется использовать цикл while, который будет выполнятся, пока у любого игрока свойство health не станет меньше либо равно нулю. После выполнения цикла необходимо определить, какой игрок выиграл, и вывести сообщение через,где name и health - значения свойств победившего игрока. alert(`${name} победил! У него осталось ${health} здоровья`) Для генерации случайных значений используйте следующую функцию. 

// // Генерация числа из диапазона min max включая их
// function getRandomNumberInRange(min, max) {
// return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// //* Для проверки работоспособности функции startGame используйте данный код. В нем нет методов heatEnemy и heatHero, вам необходимо самим их реализовать.

// const hero = {
// name: 'Batman',
// health: 100,
// heatEnemy: (enemy) => enemy.health -= 10
// } 
// const enemy = {
// name: 'Joker',
// health: 100,
// heatHero: (hero) => hero.health -= 10
// }

// function startGame(heroPlayer, enemyPlayer) {
//     // Выполнять код пока значение ключа health у heroPlayer > 0   И   значение ключа health у enemyPlayer > 0 
//     while (heroPlayer.health > 0 || enemyPlayer.health > 0) {
//         const randomHeatIndex = getRandomNumberInRange(0, 1); // Помещение в переменную randomHeatIndex функцию случайной генерации числа, поскольку участников 2е и им должны даваться равные шансы в функцию помещаются 0 и 1  как min max
//         // Если из генератора получен 0 то...
//         if (randomHeatIndex === 0) {
//             heroPlayer.heatEnemy(enemyPlayer); // Выполнить функцию heatEnemy (=> enemy.health -= 10), то есть при генерации 0 вызывается ключ из помещённой переменной объекта heroPlayer (кот при вызове принимает объект hero) и этот ключ есть функция кот принимает объект enemy и отнимает у значения health 10.
//             if (enemyPlayer.health <= 0) { // Проверка состояния значения ключа health у enemy
//                 break; // Остановка выполнения while
//             }
//             // Если получается что randomHeatIndex === 0 не является true ( а это не только 1 ), то есть функция только под 2 переменных
//         } else {
//             enemyPlayer.heatHero(heroPlayer);
//             if (heroPlayer.health <= 0) { // Проверка состояния значения ключа health у hero
//                 break; // Остановка выполнения while
//             }
//         }
//     } // цикл прерван одной из break, то есть ключ health одной из 2х переменных принимающих соотв объекты <= 0 

//     if (heroPlayer.health <= 0) {
//         alert(`${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`);
//     } else {
//         alert(`${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`);
//     }
// }

// startGame(hero, enemy);




//* Задание #7 (дополнительное)


//* Представьте, что в полицейском участке проводится расследование. Было совершено несколько преступлений. У полицейских есть другие более приоритетные задания, поэтому они попросили вас написать программу, которая будет вычислять преступника по уже известным данным. Ваша задача состоит в том, чтобы создать функцию getKiller. getKiller принимает в себя 2 параметра:
//* 1. suspectInfo. Это объект, в котором ключи - это подозреваемые в преступлении люди, а значения - массивы людей, которых видели подозреваемые в день убийства
//* 2. deadPeople. Это массив с именами людей, которых убил преступник Преступником является тот, кто видел всех убитых  юдей в день убийства. Функция getKiller должна возвращать имя преступника.
//* Примеры результатов функции getKiller:


// function getKiller(suspectInfo, deadPeople) {
//   let killerName = '';
//   // Далее объект suspectInfo переводим в массив, и применяем метод перебора элементов forEach c помещением элемента перебора массива в data (имеющий 2 элемента - ключ-строка data[0] и значение массив data[1])
//   Object.entries(suspectInfo).forEach((data) => {
//     // Присвоение элементам  понятного имени
//       const suspectPerson = data[0];
//       const peopleWereSeen = data[1];
//     // Помещение в переменную isKiller функцию проверки всех элементов помещённой в неё переменной deadName условию, что массив peopleWereSeen включает в себя элемент из deadName, то есть есть ли в массиве peopleWereSeen элемент из deadName
//     // В первом переборе это будет:  peopleWereSeen === data[1] === ['Jacob', 'Bill', 'Lucas']
//     //                               deadPeople === ['Lucas', 'Bill']
//     // Условие заключается в том что все (every) элементы массива в переменной deadPeople должны быть в массиве peopleWereSeen
//       const isKiller = deadPeople.every((deadName) => peopleWereSeen.includes(deadName));
//       // Проверка возвращает ли функция true
//       if (isKiller) {
//         killerName = suspectPerson;
//       }
//   })
  
//   return killerName;
  
// }

// const killer = getKiller(  
// {
// 'James': ['Jacob', 'Bill', 'Lucas'],
// 'Johnny': ['David', 'Kyle', 'Lucas'],
// 'Peter': ['Lucy', 'Kyle'],
// },
// ['Lucas', 'Bill']
// ); // Убийца James
// getKiller(
// {
// 'Brad': [],
// 'Megan': ['Ben', 'Kevin'],
// 'Finn': [],
// },
// ['Ben']
// ); // Убийца Megan

// alert(`killer is ${killer}`);


//* Задание #8 (дополнительное)

//* Вы когда-нибудь играли в лотерею? Лотерея - это игра, в которой случайным образом определяют победителя и дают ему выигрыш. Сейчас ваша задача будет разработать логику для такой игры. Вам необходимо создать функцию getWinner, которая принимает в себя 2 параметра:
//* 1. applicants. Объект, в котором ключи - это номерки людей, по которым будет производится случайный отбор, а значения - это объекты кандидатов на выигрыш в лотерее
//* 2. winnerObject. Это объект, в котором хранится всего 1 ключ prize, хранящий значения размера выигрыша в лотерее Вам необходимо случайным образом выбрать победный номерок (случайный ключ в объекте applicants) и вернуть из функции getWinner объект, в котором будут хранится свойства из winnerObject и объект победителя. Для получения случайного значения в диапазоне используйте следующую функцию:

// const todaysWinner = {
//   prize: '10 000$',
// }

// const winnerApplicants = {
//   '001': {
//       name: 'Максим',
//       age: 25,
//   },
//   '201': {
//       name: 'Светлана',
//       age: 20,
//   },
//   '304': {
//       name: 'Екатерина',
//       age: 35,
//   },
// }

// function getRandomNumberInRange(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// const getWinner = (applicants, winnerObject) => {
//   const applicationNumbers = Object.keys(winnerApplicants);
//   const winnerIndex = getRandomNumberInRange(0, applicationNumbers.length);
//   const winnerNumber = applicationNumbers[winnerIndex];
//   const winnerPerson = applicants[winnerNumber];

//   return {
//       ...winnerObject,
//       ...winnerPerson,
//   };
// }

// const resultWinner = getWinner(winnerApplicants, todaysWinner);
// console.log('resultWinner', resultWinner);






