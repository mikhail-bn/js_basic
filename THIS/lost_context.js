const user = {
    name: 'Mikhail',
    programmingLanguage: 'JavaScript',
    getName() {
        return this.name
    },
    // getPprogrammingLanguage: () => {
    //     return this.programmingLanguage
    // }
    getPprogrammingLanguage() {
        return this.programmingLanguage
    }
}

user.getName()
console.log('getName', user.getName()); 

const newGetName = user.getName;
console.log('newGetName: ', newGetName.call(user));
console.log('programmingLanguage: ', user.getPprogrammingLanguage.call(user)); // контекст теряется при использовании стрелочной функции
