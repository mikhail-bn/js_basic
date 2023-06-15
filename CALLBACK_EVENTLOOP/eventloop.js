// event loop
// Call Stack
// Callback queue

function sayHello(name) {
    console.log(`Hello ${name}!`);
}
console.log('start');
sayHello(`Misha`);
setTimeout(() => {
    sayHello(`Vasya`)}, 0);
sayHello(`Petya`);
console.log('the End.'); 