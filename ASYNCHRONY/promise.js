const developer = {
    name: "Mikhail",
    isDev: false,
};


// setTimeout(() => {
//     console.log('setTimeout');
// }, 3000);

// console.log(developer);

// setInterval(() => {
//     console.log('setInterval');
// }, 1000);

const promise = new Promise((resolve, reject) => {
    if(developer.isDev) {
        setTimeout(() => {
            resolve(`${developer.name} является JavaScript разработчиком`)
        }, 3000)
    } else {
        reject(`${developer.name} не является JavaScript разработчиком`)
    }
})
console.log(promise);


//* Методы then catch finally

promise
    .then((successMessage) => {
        console.log('successMessage: ', successMessage);    
    })
    .catch((error) => {
        console.log('error:', error); 
    })
    .finally(() => {
        console.log('finally');
    })