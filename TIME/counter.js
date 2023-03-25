const inputYear = prompt('Введите год'),
      inputMonth = prompt('Введите месяц'),
      inputDate = prompt('Введите день'),
      inputTime = new Date(inputYear, inputMonth - 1, inputDate),
      date = Date.now();
console.log('inputTime: ', inputTime);
const difference = date - inputTime;
let differenceToShow = difference / 1000 / 60 / 60 / 24;
    differenceToShow = Math.ceil(differenceToShow);
console.log('difference: ', difference);
alert(`Эта херня уже ${differenceToShow} дней`);