//* Задание #1

// setTimeout(() => {
//     console.log('setTimeout'); // callback queue 4
// }, 0);
// const promise = new Promise((resolve) => {
//     console.log('Promise'); // 1
//     resolve(); // microtask
// });
// promise.then(() => {
//     console.log('Promise resolve'); // 3
// });
// console.log('End'); // 2

// 'Promise'
// 'End'
// 'Promise resolve'
// 'setTimeout'


//* Задание #2

// function runCode() {
//     console.log('before promise')

//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Zero Promise')   // callback queue 2
//             resolve()
//         }, 0)
//     })
// }
// setTimeout(() => {
//     console.log('Zero') // callback queue 1
// }, 0)
// runCode()
//     .then(() => console.log('Zero Promise Invoked'))
// console.log('One')


// 'before promise' // при вызове runCode()
// 'One'// следующая после runCode() в макрокоде
// 'Zero' // первый callback из стека
// 'Zero Promise' // второй callback из стека
// 'Zero Promise Invoked' // ?


//* Задание #3

// const getData = (callback) => {
//     fetch('https://jsonplaceholder.typicode.com/users/1')
//         .then((response) => response.json())
//         .then((user) => {
//             console.log('Success');
//             callback(user);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }
// getData(() => {
//     console.log('user received');
//     const promise = new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('promise resolved');
//         }, 500);
//         console.log('in promise');
//         setTimeout(() => {
//             console.log('last set timeout');
//         }, 400);
//     });
//     promise.then((result) => {
//         console.log(result);
//     })
// });
// console.log('End')

// 'End'
// 'Success'
// 'user received'
// 'in promise'
// 'last set timeout'
// 'promise resolved'
