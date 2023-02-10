
//* Определение объекта, ключ и значение, способы обращения к элементам объекта

const developer = {
    //key: value,
    name: 'Mikhail',
    job: 'Front-End developer',
    experience: 24,
    jobAllInfo: {
        type: 'Front-End',

        framework: 'ReactJS',
    }
}

// // 1.
// console.log('developer : ', developer);
// console.log('name: ', developer.name);
// console.log('jobAllInfo: ', developer.jobAllInfo);

// // 2.

const key = 'name';
console.log('name: ', developer[key]);


// 1
// console.log('type: ', developer.jobAllInfo.type);
// 2
// console.log('framework: ', developer['jobAllInfo']['type']);


//* Опциональная цепочка ?.

// console.log(developer.jobAllInfo.framework);

// if (developer.jobAllInfo.framework)

// if (developer && developer.jobAllInfo && developer.jobAllInfo.framework) {
//     console.log('Разработчик уже знает фреймворк');
// } else {
//     console.log('Разработчик ещё не знает фреймворк');
// }


// if (developer?.jobAllInfo?.framework) {
//     console.log('Разработчик уже знает фреймворк');
// } else {
//     console.log('Разработчик ещё не знает фреймворк');
// }








