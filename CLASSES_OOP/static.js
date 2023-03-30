class Car {
    static isCar(car) {
        return car instanceof Car;
    }
    static #initialParams = {
        name: 'Audi',
        maxSpeed: 150
    }
    constructor(name, maxSpeed) {
        this.name = name || Car.#initialParams.name;
        this.maxSpeed = maxSpeed || Car.#initialParams.maxSpeed;
    }
    drive() {
        console.log(`Машина ${this.name} сейчас в пути`);
    }
}
const animal = {};
const car = new Car();
const isCar = Car.isCar(animal);

console.log('isCar: ', isCar);
console.log('car: ', car);


