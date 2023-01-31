// Задание №1 ===========================================================================================

function getName1(name) {
    return `Имя равно ${name}`;
};
getName1();
console.log(getName1('Vsya'));

const getName2 = function(name) {
    return `Имя равно ${name}`;
}
getName2();
console.log(getName1('Ivan'));

const getName3 = (name) => `Имя равно ${name}`;
getName3();
console.log(getName3('Mikhail'));
