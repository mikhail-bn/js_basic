// this - object

console.log(this);

// for browsers - Window
// for Node.js - global


const user = {
    name: 'Mikhail',
    dateOfBirth: 1981,
    getName() {
        // return user.name
        return this.name
    },
    calculateAge() {        
        const currantDate = new Date().getFullYear();
        return currantDate - this.dateOfBirth
    },
    getAllInfo: function() {
        const age = this.calculateAge();
        console.log(`Имя: ${this.name}, Возраст: ${age}`);
    }
}

console.log(user.getName());
console.log(user.calculateAge());
user.getAllInfo()

// bind  call  apply

// call

const userTwo = {
    name: 'Vasya'
}

const userTwoName = user.getName.call(userTwo)
console.log('userTwoName: ', userTwoName);