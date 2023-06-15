// microtasks queue - then catch finally в приоритете перед callback queue

// Очередность:
// 1.Обрабатывается весь МАКРОКОД до конца
// 2.Обрабатываются microtasks
// 3.Обрабатываются callback queue

// то есть сначала пройдет код до конца выполняя макрозадачи, потом обработает then catch finally промисов, и только в конце колбеки таймаутов 


console.log('So, lets begin!'); // 1

setTimeout(() => {
    console.log('Hello, I am Timeout'); // 5
}, 1000);

const promise = new Promise((resolve) => {
    console.log('I am already in Promise'); // 2
    resolve('...and I am giving you back this thing'); // 4
});
setTimeout(() => {
    console.log('I am in Promise too, but need to wait way too long then you...'); // 6
}, 2000);
promise.then(result => {    
    console.log('result: ', result);
})
console.log('And next we are gonna end up with this.'); // 3
