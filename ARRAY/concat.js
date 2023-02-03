
// concat  и ...


const currantDevelopers = ['Mikhail', 'Andrew', 'Vasya', 'Ivan'];
const newDevelopers = ['Olga', 'Sveta'];

// const allDevelopers = currantDevelopers.concat(newDevelopers);
// console.log('allDevelopers:', allDevelopers);

const allDevelopers = [
    ...currantDevelopers,
    ...newDevelopers,
];
console.log('allDevelopers:', allDevelopers);

