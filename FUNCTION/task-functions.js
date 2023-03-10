// Задание №1 ===========================================================================================




// function getName1(name) {
//     return `Имя равно ${name}`;
// };
// getName1();
// console.log(getName1('Vsya'));

// const getName2 = function(name) {
//     return `Имя равно ${name}`;
// }
// getName2();
// console.log(getName1('Ivan'));

// const getName3 = (name) => `Имя равно ${name}`;
// getName3();
// console.log(getName3('Mikhail'));




// Задание №2 =============================================================================================




// Необходимо создать функцию getSumOfNumbers. Она будет считать сумму от 0 до переданного числа. Выберите любой из 3 типов при создании функции. getSumOfNumbers принимает в себя 2 параметра: number и type. Параметр number - это число, до которого будет считаться сумма. То есть, если было передано число 10, то функция должна посчитать сумму от 0 до 10 (0 + 1 + 2 + … + 10). Параметр type отвечает за выбор чисел для подсчета суммы. Он может быть 3-мя значениями: “odd”, “even” и “”. Если type равняется “odd”, то в сумму должны входить только нечетные числа, “even” - четные числа, пустая строка “” - все числа. По умолчанию параметр type должен быть равен odd. Функция getSumOfNumbers должна возвращать итоговую сумму с помощью return. Возможные результаты функции getSumOfNumbers:

// 1. number = 10, type = ‘odd’. Возвращает 25.
// 2. number = 10, type = ‘even’. Возвращает 30.
// 3. number = 10, type = ‘’. Возвращает 55.

// План выполнения:
// 1. Объявить number и создать её запрос у пользователя
// 2. Объявить type и создать её запрос у пользователя
// 3. Определить функцию getSumOfNumbers и передать ей number и type, передать в type значение по умолчанию odd
// 4. Объявить sum и присвоить ей обязательно нулевое значение  чтобы потом не складывать с undefined
// 5. Определить цикл for  в кот будет начальной цифрой перебора 0, условие до которго перебирать числа включая последнее, шаг
// 6. Определить переменные isEven и isOdd в которых указать условия соответствия числа "чет-нечет"
// 7. ОСНОВНОЕ условие функции внутри цикла из трех критериев с одинаковым функционалом но разными условиями соответствия
// 8. Возврат sum
// 9. Объявление функции путем помещения её в переменную result с передаванием её параметров запрошенных у пользователя
// 10. Вывод переиенной result в консоль и alert

// const number = prompt('Введите число до которого слаживать ряд чисел');
// const type = prompt('Введите тип числа чет - even сложатся только четные, или нечет - odd сложатся все нечетные, если вы ничего не введете будут сложены все числа ряда');
// function getSumOfNumbers(number, type = 'odd') {
//     let sum = 0;
//     for (let i = 0; i <= number; i += 1) { /* Цикл перебора всех чисел до введенного значения */
//         const isEven = i % 2 === 0; /* Четное - остаток от деления на 2 равен нулю */
//         const isOdd = !isEven; /* Нечет. */
//         if (!type) {
//             sum += i; /* Функция сложения всех чисел при "" отсутствии условия odd или even */
//         } else if (isEven && type === 'even') { /* Условие соответствия числа из ряда до введенного значения и переменной isEven, то есть проверка числа входящего в ряд чисел до введенного значения на чет нечет  */
//             sum += i; /* Функция сложения всех чисел при "even" */
//         } else if (isOdd && type === 'odd') {
//             sum += i;
//         }
//     }
//     return sum;
// }
// const result = getSumOfNumbers(number, type);
// console.log('result', result);
// alert(`Сумма предыдущих чисел для числа ${number} при условии ${type} равно ${result}`)




// Задание #3 =============================================================================================




// Вам необходимо создать функцию getDivisorsCount, которая будет высчитывать количество делителей для  переданного числа. Она принимает в себя единственный параметр number. По умолчанию он должен быть равен 1. Если number меньше нуля либо является не целым (можно проверить при помощи функции Number.isInteger(number)), то выводите в модальное окно при помощи alert сообщение “number должен быть целым числом и больше нуля!”.

// Примеры:
// getDivisorsCount(4) // Вернет 3 (делители - 1, 2, 4)
// getDivisorsCount(5) // Вернет 2 (делители - 1, 5)
// getDivisorsCount(12) // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
// getDivisorsCount(30) // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)

// План выполнения:
// 1. Объявить number и создать её запрос у пользователя
// 2. Определить функцию getDivisorsCount и передать ей number значение по умолчанию 1
// 3. Объявить countOfDivisors и присвоить ей обязательно нулевое значение  чтобы потом не складывать с undefined
// 5. Определить цикл for  в кот будет начальной цифрой перебора 1, условие до которго перебирать числа включая последнее, шаг
// 6. Определить переменные divider  в котором указать условия соответствия числа делению без остатка как делителя целого числа
// 7. ОСНОВНОЕ условие функции внутри цикла - добавить countOfDivisors 1 в каждом этапе цикла при удовлетворяющих условиях
// 8. Возврат countOfDivisors (определение того ЧТО функция будет ВОЗВРАЩАТЬ)
// 9. Объявление функции путем помещения её в переменную result с передаванием её параметров запрошенных у пользователя
// 10. Вывод переиенной result в консоль и alert

// let number = prompt('Введите число для которого следует высчитать кол-во делителей');
// number = Number(number);
// console.log('Число целое:', Number.isInteger(number));
// if (!Number.isInteger(number) || number < 0) {
//     alert('number должен быть целым числом и больше нуля!');
// } else {
//     function getDivisorsCount(number = 1) {
//         let countOfDivisors = 0;
//         for(let i = 1; i <= number; i += 1) {
//             const divider = Number.isInteger(number / i);
//             if (divider) {
//                 countOfDivisors += 1;
//             }
//         }
//         return countOfDivisors;
//     }
// const result = getDivisorsCount(number);
// alert(`Для числа ${number} высчитано  ${result} делителей`)
// };



// Задание #4 ============================================================================================




// Помните, как в теме со строками, мы форматировали значения, которые вводит пользователь в текстовое поле? Так вот, представьте, что у нас есть 10 текстовых полей, для которых нам нужно сделать одно и то же форматирование. Это что же, придется писать 10 раз один и тот же код? Конечно же нет, ведь у нас существуют функции. Часто функции нужны для того, чтобы реализовать какую либо логику (например, форматирование строки) и не копировать и вставлять ее несколько раз. Рассмотрите примеры ниже.

// Без функции:

// console.log('Привет, Максим!');
// console.log('Вам 20 лет!');
// console.log('Привет, Игорь!');
// console.log('Вам 25 лет!');
// console.log('Привет, Анастасия!');
// console.log('Вам 28 лет!');

// С функцией:

// const getInfo = (name, age) => {
// console.log(`Привет, ${name}!`);
// console.log(`Вам ${age} лет!`);
// }

// getInfo('Максим', 20);
// getInfo('Игорь', 25);
// getInfo('Анастасия', 28);

// Я думаю, вам понятно, что пример с функцией более удобен в использовании и уменьшает количество  овторяющегося кода. Сейчас ваша задача состоит в том, чтобы создать функцию checkQuestionAnswer, которая будет задавать пользователю вопрос и автоматически проверять полученный ответ. Она принимает в себя 2 параметра: question и correctAnswer Параметр question - это вопрос, который будет задаваться пользователю и будет передан, как параметр в функцию prompt. Параметр correctAnswer - это правильный ответ на вопрос. Вам необходимо получить значение, которое введет пользователь в текстовое поле, и сверить его с параметром correctAnswer. Если пользователь дал верный ответ, то выведите в модальном окне через alert сообщение “Ответ верный”, иначе - “Ответ неверный”. Также в коде нам нужно учесть, если пользователь введет данную строку “яБлОко“, а параметр correctAnswer будет равен “Яблоко”, то ответ всё равно должен быть засчитан как правильный. То есть, ответ не должен зависеть от регистра символов и от количества пробелов в начале и в конце ответа. Когда создадите функцию, вызовите данный код для ее проверки:

// const checkQuestionAnswer = (question, correctAnswer) => {
//     let userAnswer = prompt(question);
//     userAnswer = userAnswer.trim().toLowerCase();
//     if (correctAnswer.toLowerCase() === userAnswer) {
//         alert('Ответ верный');
//     } else {
//         alert('Ответ не верный');
//     }
// }
// checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
// checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
// checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');




// Задание #5 CALLBACK ======================================================================================



// Поиск символа

// const text = prompt('Введите текст для анализа.')

// function showSuccessMessage(message) {
//     //alert(message);
//     console.log(message);
// };
// function showErrorMessage(message) {
//     //alert(message);
//     console.log(message);
// };
// function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback) {
//     let countErrors = 0;
//     for(let i = 0; i <= text.length; i += 1){
//         const currantSymbol = text[i];
//         if (currantSymbol === errorSymbol && errorCallback) {
//             errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`);
//             countErrors += 1;
//         }
//     }
//     if (successCallback && countErrors === 0) {
//         successCallback('В данном тексте нет запрещенных символов');
//     }
// };
// checkTextOnErrorSymbol(text, 'и', showSuccessMessage, showErrorMessage);