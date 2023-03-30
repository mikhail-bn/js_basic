// Полиморфизм - одно действие, несколько реализаций

class Animal {
    constructor (name) {
        this.name = name;
    }
    makeSound() {}
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log('Гав');
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log('Мяу');
    }
}

const cat = new Cat('Кошара');
console.log('cat: ', cat.name);

const dog = new Dog('Собакен');
console.log('дог: ', dog.name);

dog.name = 'Собакен-Собакен';
console.log('дог: ', dog.name);