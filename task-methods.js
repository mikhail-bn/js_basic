// const myName = 'Mikhail';
// const programmingLanguage = 'Javascript';
// const courseCreatorName = 'Minin';
// const reasonText = 'My reason';
// const numberOfMonth = 7;
// let myInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен, что пройду данный курс до конца!`;

// console.log(`Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен, что пройду данный курс до конца!`);

// Задание #3 =========================================================================================

// console.log(myInfoText.replace('Javascript', 'JAVASCRIPT'));
// myInfoText = myInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase());
// console.log(myInfoText);
// console.log(myInfoText.length);
// console.log(myInfoText[0], myInfoText[250]);

// Задание #4 =========================================================================================

// userName = prompt('Как вас зовут?');
// console.log(userName);
// userAge = prompt('Сколько вам лет?');
// console.log('без Number', userAge.trim());
// console.log('c Number', Number(userAge));
// userAge = userAge.trim();
// userName = userName.trim();
// alert(`Вас зовут ${userName} вам ${userAge} лет`);

// Задание #5 =========================================================================================

// userString = prompt('Введите текст для обрезки.');
// stringTrim = userString.trim();
// console.log(stringTrim);
// startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки.');
// endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки.');
// string = stringTrim.slice(startSliceIndex, endSliceIndex);
// console.log(string);
// alert(`Результат: ${string}`);


// Задание #6 =========================================================================================

// startText = prompt('Введите текст.');
// startText = startText.trim();
// wordFromText = prompt('Введите стоп-слово из текста.');
// wordFromText = wordFromText.trim();
// indexOfWord = startText.indexOf(wordFromText);
// console.log(indexOfWord); //12
// string = startText.slice(0, indexOfWord);
// alert(`Результат: ${string}`);

// Задание #7 =========================================================================================

// javaScriptDescription = 'JavaScript — мультипарадигменныйязык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.';

// indexOfDivision = Math.floor(javaScriptDescription.length / 2);
// console.log(indexOfDivision);
// slisedText = javaScriptDescription.slice(0, indexOfDivision);
// console.log(slisedText);
// modifiedText = slisedText
//     .replaceAll('а', 'А')
//     .replaceAll(' ', '')
//     .repeat(3)
// console.log(modifiedText);
// indexOfDivisionNew = Math.floor(modifiedText.length / 2);
// console.log(indexOfDivisionNew);
// textSymbol = modifiedText[indexOfDivisionNew];
// console.log(`Этот символ: ${textSymbol}`);