// Наследование

class Plane {
    constructor(type, numberOfPassengers) {
        this.type = type;
        this.numberOfPassengers = numberOfPassengers;
    }
    startFlight() {
        console.log('Полетели!');
    }
    // setNumberOfGuns() {

    // }
}

class MilitaryPlane extends Plane {
    constructor (type) {
        super(type, 0);
        this.numberOfGuns = 0;
    }
    startFlight() {
        console.log('Поехали!');
    }
    setNumberOfGuns(numberOfGuns) {
        this.numberOfGuns = numberOfGuns;
    }
    shoot() {
        console.log('Shoot!');
    }
}

const plane = new Plane('Пассажирский', 320);
console.log('plane: ', plane);
plane.startFlight()
const militaryPlane = new MilitaryPlane('military');
console.log('militaryPlane: ', militaryPlane);
militaryPlane.startFlight();
militaryPlane.setNumberOfGuns(4);
militaryPlane.shoot();


// instanceof

console.log(militaryPlane instanceof MilitaryPlane);
