//  &&  (И) 
//  ||  (ИЛИ)
//  !   (НЕ)

const userAge = 55;
// message = '';
// if(userAge > 5 && userAge <= 18) {
//     message ='Ты ходишь в школу';
// } else {
//    message ='Ты не ходишь в школу';     
// }
// console.log(message);

// const message = userAge > 5 && userAge <= 18
//     ? 'Ты ходишь в школу'
//     : 'Ты не ходишь в школу';

// console.log(message);

// const progLanguage = 'JavaScript';
// const experienceYear = 0;

// if (progLanguage === 'JavaScript' &&  experienceYear >= 1) {
//     console.log('Добро пожаловать к нам в компанию');
// } else {
//     console.log('See you next time...');
// }

// const currentOurs = 7;
// if(currentOurs < 8 || currentOurs > 20) {
//     console.log('Приходите завтра');
// } else {
//     console.log('Welcome!'); 
// }

// const userNickname = 'Mikhail';
// const defaultNickname = '';
// const nickname = userNickname || defaultNickname || 'noname'; // При логическом ИЛИ || получая значение false идет к следующей переменной, получая true - присваивает значение
// console.log('nickname', nickname);

// const finalNickname = userNickname && 'user exists'; // При логическом И && всё наоборот. Получая false - присваивает значение, получая true переходит к следующей переменной.

// console.log('finalNickname', finalNickname);

// ! логическое НЕ

// const hasAccess = true;
// if(!hasAccess) {
//     console.log('Access denied!');
// } else {
//     console.log('Access allowed');
// };

// const answer = prompt('How old are you?');
// if(!answer){
//     alert('Please, write your age.');
// } else {
//     alert(`You are ${answer} years old`)
// }

// Оператор объединения с null   ??

// При операторе || ложными будут значения false 0 '' undefined null NaN
console.log(false || 'Hello world');
// При операторе ?? ложными будут значения только undefined null, то есть получив запись false считает его как true и выводит в консоль
console.log(false ?? 'Hello world');








