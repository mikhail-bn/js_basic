//* Задание #1

//* Часто мы записываем даты в следующем формате “день.месяц.год”. Сейчас вам необходимо создать функцию getDateFormat, которая будет приводить дату к этому формату. Она принимает 2 параметра:

//* 1. date - объект даты, который нужно перевести в данный текстовый формат “день.месяц.год”

//* 2. separator - разделитель дня, месяца и года. По умолчанию он должен быть равен точке “.” Если в качестве разделителя будет передано тире “-”, то формат уже должен быть таким “день-месяц-год” Также, учтите, что номер месяца в JavaScript считается с 0 до 11. Кроме этого, если день либо месяц возвращают однозначное число, то вам к нему необходимо добавить 0. То есть результат должен быть не таким “5.5.2001”, а “05.05.2001”.

// let toFormat = (inputDateValue) => String(inputDateValue).length === 1 ? `0${inputDateValue}` : String(inputDateValue);

// let dateShow = [],
//     returnDate;
// function getDateFormat(someDate, separator) {    
//     const day = someDate.getDate();
//     const month = someDate.getMonth() + 1;
//     const year = someDate.getFullYear();    
//     dateShow =  [day, month, year].map(i => toFormat(i));
//     const returnDate = dateShow.join(separator);
//     return returnDate  
// }
// getDateFormat(new Date(2022, 1, 1), '.')
// console.log('dateShow: ', returnDate);


//* Задание #2

//* День рождения - это знаменательный праздник для каждого человека. А когда день рождения у вас? Уверен, что вы помните эту дату. А сколько дней осталось до вашего дня рождения? А вот это уже посложнее.
//* Сейчас ваша задача состоит в том, чтобы создать функцию getDaysBeforeBirthday, которая будет возвращать количество дней до следующего дня рождения. Данная функция должна принимать 1 параметр nextBirthdayDate, который является объектом даты и указывает на дату вашего ближайшего дня рождения. Год стоит указывать ближайший к текущей дате, а не год вашего рождения.


// function getDaysBeforeBirthday(nextBirthdayDate) {
//     let difference = nextBirthdayDate - Date.now();
//     let daysLeft = 0;    
//     if (difference > 0) {
//         daysLeft = difference / 1000 / 60 / 60 / 24;
//     } else if (difference < 0 && difference > -86400000) {
//         return  alert(`Поздравляю!`)
//     } else return  alert(`Эта дата уже прошла`) 
          
//     return Math.ceil(daysLeft)
// }
// const result = getDaysBeforeBirthday(new Date(2023, 2, 22))
// alert(`Дней до дня рождения осталось - ${result}`);


//* ===========================================================

// const convertMsToDays = (ms) => Math.round(ms / 1000 / 60 / 60 / 24);

// const getDaysBeforeBirthday = (birthdayDate) => {
//     const currentDateMs = Date.now();
//     const birthdayDateMs = birthdayDate.getTime();
//     return convertMsToDays(birthdayDateMs - currentDateMs);
// }

// console.log(getDaysBeforeBirthday(new Date(2024, 11, 10)))


//* Задание #3

//* В JavaScript объект даты может принимать в себя timestamp, т.е. количество миллисекунд с 1 января 1970 года 00:00:00 по UTC. По данному количеству миллисекунд генерируется объект даты. Благодаря этому, чтобы добавить определенное число миллисекунд, можно использовать следующую запись: new Date(Date.now() + 5000), где 5000 - это миллисекунды. В итоге мы получим дату, которая на 5000 миллисекунд больше  текущей.
//* Используя эти знания, вам необходимо создать функцию addDays, которая будет добавлять переданное количество дней к переданной дате. Она принимает в себя 2 параметра:

// 1. date - объект даты
// 2. days - количество дней, тип данных number, по умолчания данный параметр должен быть равен единице

//* Вам необходимо к параметру date прибавить определенное количество дней, которое передается в параметр days. Функция addDays должна возвращать  обновленную дату. Подсказка: не забывайте, что timestamp, который передается в date, должен измеряться в миллисекундах.

// const convertDayToMs = (days) => days * 24 * 60 * 60 * 1000;

// const addDays = (date, days) => {   
//     const nextDate = new Date(date.getTime() + convertDayToMs(days))    
//     return nextDate
// }

// const newDate = addDays(new Date(2022, 1, 24), 5);
// console.log('after', newDate);


//* Задание #4 (дополнительное)

//* Ваш заказчик - визовый центр. У них есть база данных клиентов, но нету скрипта, который бы автоматизировал процесс выдачи виз. Поэтому  визовый центр попросил помочь вас как веб-разработчика взять эту задачу на себя. Вам необходимо создать функцию allowVisa, которая будет фильтровать переданный массив из клиентов визового центра. Она принимает в себя массив клиентов. Каждый клиент - это объект с параметрами firstName (имя клиента), lastName (фамилия клиента), criminalRecord (тип данных boolean, есть ли судимость), passportExpiration (тип данных string, дата истечения срока действия паспорта).
//* Функция allowVisa должна возвращать отфильтрованный массив people, чтобы он удовлетворял следующим условиям:

//* 1. Текущая дата должна быть меньше свойства passportExpiration
//* 2. У клиента не должно быть судимости, т.е. значение свойства criminalRecord должно равняться false


// const stringToDate = (passportExpiration) => { 
//     const arrOfDate = passportExpiration.split('-'),
//           arrToDate = new Date(arrOfDate[0], arrOfDate[1], arrOfDate[2])

//     return arrToDate
// }


// function allowVisa(arrOfClients) {    
//         let filteredClients = [];
//         for (let i = 0; i < arrOfClients.length; i++) {
//             let date  = new Date
//             if (date.getTime() < stringToDate(arrOfClients[i].passportExpiration).getTime() || arrOfClients[i].criminalRecord === false) {
//                 filteredClients.push(arrOfClients[i])
//             }
//         }
//     return filteredClients   
// }

// const result = allowVisa([{firstName: 'Mikhail', lastName: 'Burkun', criminalRecord: false, passportExpiration: '2030-06-10'},
//                           {firstName: 'Vasiliy', lastName: 'Pupkin', criminalRecord: false, passportExpiration: '2035-06-10'},
//                           {firstName: 'Taras', lastName: 'Shevchenko', criminalRecord: true, passportExpiration: '1856-06-10'}, 
//                           {firstName: 'Alexandr', lastName: 'Soljenicin', criminalRecord: true, passportExpiration: '1960-06-10'}]);

// console.log('result: ', result);