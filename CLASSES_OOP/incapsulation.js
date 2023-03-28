// Инкапсуляция - скрытие данных от доступа вне класса и  при наследовании

// public
// private # 

class Developer {
    #salary
    constructor(name, programmingLanguage) {
        this.name = name;
        this.programmingLanguage = programmingLanguage;
        this.#salary = 3000;
    }
    get devSalary() {
        return this.#salary
    }
    set setSalary(salary) {
        this.#salary = salary;
    }
    startCoding() {
        //console.log(`${this.name} is starting to wright code`);
        console.log(this.#salary);
    }
    #printProgrammingLanguage() {
        console.log(`Programming language - ${this.programmingLanguage}`);
    }
}

const developer = new Developer('Mikhail', 'javaScript');
// console.log('developer.salary: ', developer.#salary);

// console.log('developer salary: ', developer.#salary); 
console.log('developer programming language: ', developer.programmingLanguage); 
console.log(developer.startCoding());

class JuniorDeveloper extends Developer {
    constructor(name, printProgrammingLanguage) {
        super(name, printProgrammingLanguage)
    }
}

const juniorDeveloper = new JuniorDeveloper('Vasiliy', 'Java');
console.log('juniorDeveloper: ', juniorDeveloper);
console.log(juniorDeveloper.devSalary);
developer.setSalary = 5000;
console.log(developer.devSalary);