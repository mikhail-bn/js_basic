//* Задание #1
//* Вам дана функция-конструктор, с помощью которой можно создавать экземпляры объектов. Ваша задача состоит в том, чтобы переписать данную функцию на класс (class).

// function student(name, age) {
//     this.name = name;
//     this.age = age;
//     this.technologies = [];
//     this.status = 'Junior';
//     this.setTechnologies = function(technologies) {
//         this.technologies = [
//         ...this.technologies,
//         ...technologies,
//         ];
//     }
//     this.setNewStatus = function(newStatus) {
//         this.status = newStatus;
//     }
// } 

// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.technologies = [];
//         this.status = 'Junior';
//     }
//     setTechnologies(technologies) {
//         this.technologies = [
//             ...this.technologies,
//             ...technologies,
//         ];
//     }
//     setNewStatus(newStatus) {
//         this.status = newStatus;
//     }
// }

// const student = new student ('Maxim', 20);
// student.setTechnologies([ 'HTML', 'CSS', 'JavaScript' ]);
// student.setNewStatus('Middle');
// console.log(student);



//* Задание #2
//* Вам необходимо создать класс Person, от него мы сможем создавать экземпляры людей. Конструктор класса будет принимать 2 параметра:

// 1. name - имя человека
// 2. age - количество полных лет

//* Также вам необходимо реализовать метод compareAge в классе Person. Он принимает в себя экземпляр класса Person и сравнивает значения полных лет.
//* Данный метод должен возвращать результат в следующем формате: Если у одного Person количество лет больше либо равно, чем у другого, то выводите сообщение через alert “name1 старше, чем name2”. Иначе же “name1 младше, чем name2”. Запускайте данный код для теста работы вашего класса Person

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     compareAge(person) {
//         if(this.age > person.age) {
//             return alert(`${person.name} младше, чем ${this.name}`);
//         } return alert(`${this.name} младше, чем ${person.name}`);
//     }
// }

// const person1 = new Person('Максим', 24);
// const person2 = new Person('Светлана', 36);
// const person3 = new Person('Ирина', 23);
// person1.compareAge(person2); // Максим младше, чем Светлана
// person2.compareAge(person3); // Светлана старше, чем Ирина
// person3.compareAge(person1); // Ирина младше, чем Максим




//* Задание #3

//* Вам поручили задачу на проекте. Необходимо разработать словарь, в который можно добавлять слова с их описанием, удалять слова и получать их. Для начала создайте класс Dictionary. Его конструктор принимает 1 параметр name. Инициализируйте данное значение при помощи this. Также в конструкторе должно объявляться поле words, которое по умолчанию должно быть пустым объектом. Вам необходимо в класс Dictionary добавить 4 метода:

//* 1. add. Данный метод добавляет новое слово в словарь. Он принимает в себя 2 параметра: word - слово (тип данных строка) description - описание слова (тип данных строка) Присвойте объекту words по ключу word (этот параметр передали в метод add) значение объекта, в котором будут храниться данные о слове и его описание. Пример объекта words после добавления слова "js":

// words
// {
//     js: {
//         word: 'js',
//         description: 'язык программирования',
//     }
// }

//* 2. Если слово уже существует в объекте words, то не нужно перезаписывать слово, которое уже было сохранено ранее. remove. Данный метод удаляет слово из словаря. Он принимает в себя ключ по которому нужно удалить объект слова из объекта words 

//* 3. get. Данный метод получает слово из словаря. Он принимает в себя ключ из объекта words. Из метода необходимо возвратить найденный  объект слова по переданному параметру ключа 

//* 4. showAllWords. Данный метод не принимает в себя никаких параметров. Его задача состоит в том, чтобы вывести все слова, которые есть в объекте words, в консоль в формате “word - description” (word - само слово, description - описание слова) Для тестирования написанного класса используйте данный код:

// class Dictionary {
//     constructor(name) {
//         this.name = name;
//         this.words = {}
//     }
//     add(word, description) {
//         if (!this.words[word]) {
//             this.words[word] = {
//                 word,
//                 description,
//             }
//         }
//     }
//     remove(word) {
//         delete this.words[word];
//     }
//     get(word) {
//         return this.words[word];
//     }
//     showAllWords() {
//         Object.values(this.words).forEach((wordItem) => {
//             console.log(`${this.words[word]} - ${this.words[description]}`)
//         });
//     }
// }

// const dictionary = new Dictionary('Толковый словарь');
// dictionary.add('JavaScript', 'популярный язык программирования');
// dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
// dictionary.remove('JavaScript');
// dictionary.showAllWords();


// Веб-разработчик - Человек, который создает новые
// сервисы и сайты или поддерживает и дополняет существующие


//* Задание #4

//* В прошлом задании вы создали словарь. Заказчик доволен проделанной работой и команда разработки тоже. Так как вы уже хорошо разобрались с технологией словаря, то вас попросили реализовать еще один словарь. Заказчик хочет создать новую категорию слов “Сложные слова”. 
//* Используйте код, написанный в прошлом задании. Вам необходимо создать дочерний класс HardWordsDictionary от класса Dictionary.  Конструктор у HardWordsDictionary принимает в себя также параметр name и вызывает конструктор родительского класса. 
//*Все методы, которые есть в Dictionary, должны остаться без изменений в HardWordsDictionary, кроме одного. Вам необходимо переопределить метод add, который должен работать по той же логике, что и add у Dictionary, только объект слова должен выглядеть следующим образом:

// {
// word: 'word',
// description: 'description',
// isDifficult: true,
// }

//* Для теста класса HardWordsDictionary используйте данный код:

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');
hardWordsDictionary.remove('неологизм');
hardWordsDictionary.showAllWords();

// дилетант - Тот, кто занимается наукой или искусством
// без специальной подготовки, обладая только поверхностными знаниями.
// квант - Неделимая часть какой-либо величины в физике.