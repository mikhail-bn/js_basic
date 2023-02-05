                    //* Date() выводит текущую дату, присваивая новую переменную с датой необходимо писать new
                    //* В Date() можно передавать параметры - Date (year, month, day, hour, minute, second, ms)
                    //* 0 - January 11 - Desember

const date = new Date()
console.log('date: ', date);

const newDate = new Date(2000, 1, 10, 11, 55, 5, 5000);
console.log('newDate: ', newDate);


                    //* Методы для даты    .getFullYear()  .getMonth()  .getDate()  .getHours() .getMinutes() 
                    //* .getSeconds()  .getMilliseconds()


console.log('newDate year: ', newDate.getFullYear());
console.log('newDate month: ', newDate.getMonth());
console.log('newDate date: ', newDate.getDate());
console.log('newDate Hours: ', newDate.getHours());
console.log('newDate Minutes: ', newDate.getMinutes());
console.log('newDate Seconds: ', newDate.getSeconds());
console.log('newDate Milliseconds: ', newDate.getMilliseconds());

                    
                    //*  День недели   0 - Monday    6 - Saturday метод .getDay


console.log('newDate Day: ', newDate.getDay());
if (newDate.getDay() === 4) {
    console.log('Сегодня четверг');
}

                    //* Изменить атрибут Year  .setFullYear(2001) - поменяет полностью переменную
                    //* Аналогично .setMonth() .setDate()  .setHours() .setMinutes() 
                    //* .setSeconds()  .setMilliseconds()


newDate.setFullYear(2001);
newDate.setMonth(2);
newDate.setDate(20);
newDate.setHours(15);
newDate.setMinutes(20);
newDate.setSeconds(20);
console.log('newDate: ', newDate);