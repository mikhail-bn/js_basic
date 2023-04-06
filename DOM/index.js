//* Задание #1

// Вам дан HTML код.

//       <form class="create-user-form">

//            <label>Имя 
//              <input type="text" name="userName" placeholder="Введите ваше имя"/> 
//            </label>

//            <label>Пароль 
//              <input type="password" name="password" placeholder="Придумайте Пароль"/>
//            </label>

//            <button type="submit">Подтвердить</button>
//        </form>


// Необходимо создать такую же структуру HTML-элемента через JavaScript и добавить итоговый элементы внутрь тега body. Решите задачу 2-мя способами:

//* 1. через innerHTML;

//   const newBody = document.querySelector('body');
  
//   newBody.innerHTML = '<form class="create-user-form"><label>Имя<input type="text" name="userName" placeholder="Введите ваше имя"/>          </label><label>Пароль<input type="password" name="password" placeholder="Придумайте Пароль"/></label><button type="submit">Подтвердить</button></form>';


//* 2. через document.createElement.

// const createElementLabel = (labelText, inputName, inputType, placeholder, value) => {
//     const labelElement = document.createElement('label');
//     labelElement.textContent = labelText;
//     const inputElement = document.createElement('input');   
//     inputElement.className = 'create-task-block__input default-text-input';
//     inputElement.type = inputType;
//     inputElement.name = inputName;
//     inputElement.placeholder = placeholder;
//     inputElement.value = value;
    
//     labelElement.append(inputElement)
//     return labelElement
// }
// const userLabel = createElementLabel('Имя', 'userName', 'text', 'Введите ваше имя', 'Какое-то имя');
// const userLabelTwo = createElementLabel('Пароль', 'userName', 'text', 'Введите пароль', 'Какой-то пароль');

// const buttonElement = document.createElement('button');
// buttonElement.type = 'submit';
// buttonElement.className = 'create-task-block__button default-button';
// buttonElement.textContent = 'Ok';

// const formElement = document.createElement('form');
// formElement.className = 'create-task-block';
// formElement.append(userLabel);
// formElement.append(userLabelTwo);
// formElement.append(buttonElement);

// const baseElement = document.querySelector('#tasks')
// baseElement.append(formElement)




// const createInputWithLabel = (
//     label, inputType, inputName, placeholder,
// ) => {
//     const labelContainer = document.createElement('label');
//     labelContainer.innerText = label;

//     const inputElement = document.createElement('input');
//     inputElement.type = inputType;
//     inputElement.name = inputName;
//     inputElement.placeholder = placeholder;

//     labelContainer.append(inputElement);

//     return labelContainer;
// };

// const formContainer = document.createElement('form');
// formContainer.className = 'create-user-form';
// const userNameLabel = createInputWithLabel(
//     'Имя', 'text', 'userName', 'Введите ваше имя',
// );
// const passwordLabel = createInputWithLabel(
//     'Пароль', 'password', 'password', 'Придумайте Пароль',
// );
// const confirmButton = document.createElement('button');
// confirmButton.type = 'submit';
// confirmButton.innerText = 'Подтвердить';

// formContainer.append(userNameLabel, passwordLabel, confirmButton);
// document.body.prepend(formContainer);