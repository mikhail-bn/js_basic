// Задание #3 =============================================================================================================

// firstQuestion = confirm('JavaScript появился в 1995 году?');
// if (firstQuestion) {
//     alert('Верно');
// } else {
//     alert('Задуманный Бренданом Эйхом (тогда работал в Netscape Corporation) как серверный язык, Javascript появился в Netscape Navigator 2.0 в сентябре 1995 года.');
// }
// secondQuestion = confirm('Спецификация JavaScript называется ECMAScript?');
// if (secondQuestion) {
//     alert('Верно');
// } else {
//     alert('ECMAScript — стандарт мови програмування, затверджений міжнародною організацією ECMA згідно зі специфікацією ECMA-262. Найвідомішими реалізаціями стандарту є мови JavaScript, JScript та ActionScript, які широко використовується у веброзробці.');
// }
// thirdQuestion = confirm('JavaScript был создан за 1 месяц?');
// if (thirdQuestion) {
//     alert('Только в ноябре 1996 года компания Netscape отправила в организацию Ecma International заявку для языка Javascript как языка промышленного стандарта. Третья редакция вышла лишь в декабре 1999 года,  последняя версия спецификации стандарта ECMAScript вышла в июне 2020 года');
// } else {
//     alert('Верно.');
// }

// Задание #4 ==============================================================================================================

// for (let i = 0; i < 3; i += 1) {
//     let newStudent = prompt('Введите имя нового студента!');
//     newStudent = newStudent.trim();
//     if (newStudent) {
//     alert(`Добро пожаловать, ${newStudent}!`)
//     }
//     }

// let i = 0;
// do {
//     let newStudent = prompt('Введите имя нового студента!');
//     if (newStudent) {
//         newStudent = newStudent.trim();
//         alert(`Добро пожаловать, ${newStudent}!`)
//     }
//     i =+ 1;
// } while (i < 3)

// let i = 0;
// while (i < 3) {
//     let newStudent = prompt('Введите имя нового студента!');
//     if (newStudent) {
//         newStudent = newStudent.trim();
//         alert(`Добро пожаловать, ${newStudent}!`)
//     }
//     i += 1;
// }

// Задание #5 ==============================================================================================================

// let sum = 0;
// for (let i = 0; i < 101; ++i) {    
//     sum = sum + i;        
// }
// alert(`Результат сложения всех чисел от ноля до ста  ${sum}`)

// Задание #6 ===============================================================================================================

// let clientName = 'Igor';
// let clientSpentForAllTime = 110;
// let clientSpentToday = 335;
// clientSpentForAllTime = clientSpentForAllTime + clientSpentToday;
// let discount = 0;
// if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300 ) {
//     discount = 10;
// } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
//     discount = 20;
// } else if (clientSpentForAllTime >= 500) {
//     discount = 30;
// }
// alert(`Вам предоставляется скидка в ${discount}%!`);
// alert(`Ваш счет ${clientSpentToday}$`)
// clientSpentToday = clientSpentToday - clientSpentToday * discount / 100;
// alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`);

// Задание #7 ===============================================================================================================

// clientName = prompt('Введите имя клиента');
// clientName = clientName.trim();
// clientSpentToday = prompt('Сколько клиент потратил сегодня?');
// clientSpentToday = Number(clientSpentToday);
// console.log(clientSpentToday);
// clientSpentForAllTime = prompt('Сколько клиент потратил за все время?');
// clientSpentForAllTime = Number(clientSpentForAllTime);
// console.log(clientSpentForAllTime);
// if (!clientSpentForAllTime || !clientSpentToday) {
//     alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку.')

// } else {
// clientSpentForAllTime = clientSpentForAllTime + clientSpentToday;
// let discount = 0;
// if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300 ) {
//     discount = 10;
// } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
//     discount = 20;
// } else if (clientSpentForAllTime >= 500) {
//     discount = 30;
// }
// alert(`Вам предоставляется скидка в ${discount}%!`);
// alert(`Ваш счет ${clientSpentToday}$. Программа скидок работает следующим образом:
// За всё время -
// 1. Если клиент потратил от 100$ до 300$, то скидка 10%;
// 2. Если клиент потратил от 300$ до 500$, то скидка 20%;
// 3. Если клиент потратил от 500$, то скидка 30%; `)
// clientSpentForAllTime -= clientSpentToday;
// clientSpentToday = clientSpentToday - clientSpentToday * discount / 100;
// clientSpentForAllTime += clientSpentToday;
// alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`);}

// Задание №8 =============================================================================================================
const password = prompt('Введите пароль');
const errorMessage = 'Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.';
const successMessage = 'Пароль валидный. Добро пожаловать в аккаунт!';

if (password.length < 3 || password.length > 30) { /* Длина больше 3х и меньше 30*/
  alert(errorMessage); 
    } else {
  let hasBigSymbol = false;
  let hasNumbers = false;
    for (let i = 0; i < password.length; i += 1) { /* Переменная для прохода по символам, условие ограничить кол-во перебора символов длиной пароля, шаг прохода 1*/
        const symbol = password[i]; /* Каждый символ в цикле будет помещен в константу symbol*/
        const isNumberSymbol = !isNaN(parseInt(symbol)); /* Присвоение в переменную isNumberSymbol проверенной константы symbol на ЧИСЛО (isNaN() - проверка на NaN, соотв. !isNaN() - ЧИСЛО) использован метод parseInt() удобный для преобразования строк начинающихся с цифер и по факту отсекает символы после впереди идущих символов, и в этом коткретном случае для преобразования символа либо в число либо в NaN, и дальнейшей проверки результата на НЕ NaN */
        if (symbol === symbol.toUpperCase() && !isNumberSymbol) { /* Условие является ли символ апперкейсом И НЕ числом, то есть большой буквой */
        hasBigSymbol = true; /* если ДА то переменной hasBigSymbol присваивается true */
        }
        if (isNumberSymbol) { /* Условие является ли символ числом, то есть isNumberSymbol = true */
        hasNumbers = true; /* если ДА то переменной hasNumbers присваивается true */
        }
    }

    if (!hasBigSymbol || !hasNumbers) { /* Условие НЕ содержит ли переменная большую букву ИЛИ НЕ содержит ли переменная числа  */
        alert(errorMessage); /*Если НЕ содержит того и того, то вывести errorMessage */
    } else {
        alert(successMessage); 
    }
}