// Абстракция

class Footballer {
    constructor(name, club) {
        this.name = name;
        this.club = club;
    }
    shoot() {}
    celebrate() {}
    pass() {}
}
class Forward extends Footballer {
    constructor(name, club) {
        super(name, club)
    }
    shoot() {
        console.log('Очень сильный удар');
    }
    celebrate() {
        console.log('Goal!!!');
    }
    pass() {
        console.log('Mid');
    }
}