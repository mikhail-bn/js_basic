// if if else switch case

// const isFrontEndDeveloper = true;
// if(isFrontEndDeveloper) {
//     console.log('Вы фронтэнд разработчик. Добро пожаловать в команду!');
// } else {
//     console.log('Вы не фронтэнд разработчик');
// };


// const closingTime = 8;
// const currentTime = 9;

// if (currentTime > closingTime) {
//     console.log('Магазин закрыт');
// } else {
//     console.log('Магазин открыт');
// };

const developerJobType = 'Front-End';

// if (developerJobType === 'Front-End') {
//     console.log('Ваша зарплата 2000$');
// } else if (developerJobType === 'Back-End') {
//     console.log('Ваша зарплата 1500$');
// } else if (developerJobType === 'Full-Stack') {
//     console.log('Ваша зарплата 3000$');
// } else {
//     console.log('Ваша зарплата не определена.');
// };

//==========================================================================================================================

// Switch case

// switch(developerJobType) {
//     case 'Front-End':
//         console.log('2000$');
//         break;
//     case 'Back-End':
//         console.log('1500$');
//         break;
//     case 'Full-Stack':
//         console.log('3000$');
//         break;
//     default:
//         console.log('Зарплата не определена');
// };

 //========================================================================================================================================================
 
 // Сокращение if else  ? :

const favoriteDrink = '';
// let message = '';

// if(favoriteDrink === 'Кофе') {
//     message = 'Ваш любимый напиток кофе';
// } else {
//     message = 'Вы не сильно любите кофе';
// }
// console.log(message);

const message = favoriteDrink === 'Кофе' 
    ? 'Ваш любимый напиток кофе' 
    : 'Вы не сильно любите кофе';

    // ? if
    // : else

console.log(message);