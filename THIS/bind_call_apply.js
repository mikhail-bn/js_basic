const mainHero = {
    name: 'Mikhail',
    health: 65,
    strength: 100
}

const badHero = {
    name: 'Joker',
    health: 55,
    strength: 150
}

function printHeroInfo(extraInfo = '') {    
    console.log(`Имя: ${this.name}, Здоровье: ${this.health}, Сила: ${this.strength}, ${extraInfo}`);
}
printHeroInfo.call(badHero, 'Роль - злодей!') // Параметр (extraInfo) передаётся через запятую
printHeroInfo.apply(badHero, ['Роль - злодей!']) // Параметр (extraInfo) передаётся в массиве
// console.log('someResult: ', someResult);

const bindedPrintHeroInfo = printHeroInfo.bind(mainHero, 'Роль - Незлодей!')
bindedPrintHeroInfo();