// ООП
// function и class

// function Animal(name) {
//     this.name = name;
//     this.getName = function() {
//         return this.name;
//     }
// }

// new
// const cat = new Animal('Cat');
// console.log('cat: ', cat); 
// console.log(cat.name);
// console.log(cat.getName());

class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name
    }
}
const dog = new Animal("Собака");
const cat = new Animal("Кошка");
console.log(cat, dog);
