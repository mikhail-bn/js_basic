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



//* Задание #2

// Вы вместе с командой разработки создаете приложение для контроля задач. Сейчас команда сделала только макет, чтобы приложение было красивым. Вам поручили задачу отрисовать все данные о задачах при помощи JavaScript кода (способ выберите самостоятельно). У вас имеется массив tasks и HTML-шаблон, по которому вам необходимо создать элементы для каждой задачи.

// Добавьте все HTML-элементы с задачами в тег с классом “tasks-list”.

// HTML-шаблон для задачи:
    // <div class="task-item" data-task-id="1">
    //     <div class="task-item__main-container">
    //         <div class="task-item__main-content">
    //             <form class="checkbox-form">
    //                 <input class="checkbox-form__checkbox" type="checkbox" id="task-1"/>
    //                 <label for="task-1"></label>
    //             </form>
    //             <span class="task-item__text">Посмотреть новый урок по JavaScript</span>
    //         </div>
    //         <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">Удалить</button>
    //     </div>
    // </div>

//* Массив задач: 

// const tasks = [
//     {
//     id: '1138465078061',
//     completed: false,
//     text: 'Посмотреть новый урок по JavaScript',
//     },
//     {
//     id: '1138465078062',
//     completed: false,
//     text: 'Выполнить тест после урока',
//     },
//     {
//     id: '1138465078063',
//     completed: false,
//     text: 'Выполнить ДЗ после урока',
//     },
// ]

//* Данные об id должны использоваться в data-task-id, в id у input и в for у label. Значение свойства text должно добавляться в тег span с классом “task-item__text”. Примечание: атрибут for в JavaScript коде пишется как htmlFor. У вас имеются начальные файлы. Используйте их для разработки логики приложения.

// const tasks = [
//     {
//     id: '1138465078061',
//     completed: false,
//     text: 'Посмотреть новый урок по JavaScript',
//     },
//     {
//     id: '1138465078062',
//     completed: false,
//     text: 'Выполнить тест после урока',
//     },
//     {
//     id: '1138465078063',
//     completed: false,
//     text: 'Выполнить ДЗ после урока',
//     },
// ]

// const createTaskItem = (taskId, textOfTheTask) => {

//     const blockItem = document.createElement('div');
//     blockItem.className = 'task-item';
//     blockItem.dataset.taskId = taskId;    

//     const blockItemContainer = document.createElement('div');
//     blockItemContainer.className = 'task-item__main-container';
//     blockItem.append(blockItemContainer);

//     const itemContent = document.createElement('div');
//     itemContent.className = 'task-item__main-content';
//     blockItemContainer.append(itemContent);

//     const formItem = document.createElement('form');
//     formItem.className = 'checkbox-form';
//     itemContent.append(formItem);

//     const inputItem = document.createElement('input');
//     inputItem.className = 'checkbox-form__checkbox';
//     inputItem.type = 'checkbox';
//     inputItem.id = taskId;
//     formItem.append(inputItem);

//     const labelItem = document.createElement('label');
//     labelItem.htmlFor = taskId;
//     formItem.append(labelItem);

//     const spanItem = document.createElement('span');
//     spanItem.className = 'task-item__text';
//     spanItem.innerText = textOfTheTask;
//     itemContent.append(spanItem);

//     const buttonItem = document.createElement('button');
//     buttonItem.className = 'task-item__delete-button default-button delete-button';
//     buttonItem.dataset.deleteTaskid = '5';
//     buttonItem.innerText = 'Удалить';
//     blockItemContainer.append(buttonItem);

//     return blockItem
// }

// const tasksListItem = document.querySelector('.tasks-list')

// tasks.forEach((task) => {
//     const taskItem = createTaskItem(task.id, task.text);
//     tasksListItem.append(taskItem);
// })




//* Задание #3 

// Вы отлично справились с поставленной задачей и теперь все элементы отрисовываются правильно. Теперь вам хотят предоставить дело посложнее. Вам необходимо реализовать логику создания новых задач при помощи формы с классом “create-task-block”. 

// Используйте предыдущий код и повесьте обработчик событий submit на форму с классом “create-task-block”. При отправке формы создавайте новую задачу в массиве tasks и в DOM-дереве (внутри тега с классом “tasks-list”). id должен быть для каждой задачи уникальным. Текст для задачи берется из текстового поля с классом “create-task-block__input”. Подсказка: для получения уникального id можно воспользоваться Date.now() У вас имеются начальные файлы. Используйте их для разработки логики приложения.

// const tasks = [
//     {
//     id: '1138465078061',
//     completed: false,
//     text: 'Посмотреть новый урок по JavaScript',
//     },
//     {
//     id: '1138465078062',
//     completed: false,
//     text: 'Выполнить тест после урока',
//     },
//     {
//     id: '1138465078063',
//     completed: false,
//     text: 'Выполнить ДЗ после урока',
//     },
// ]

// const createTaskItem = (taskId, textOfTheTask) => {

//     const blockItem = document.createElement('div');
//     blockItem.className = 'task-item';
//     blockItem.dataset.taskId = taskId;    

//     const blockItemContainer = document.createElement('div');
//     blockItemContainer.className = 'task-item__main-container';
//     blockItem.append(blockItemContainer);

//     const itemContent = document.createElement('div');
//     itemContent.className = 'task-item__main-content';
//     blockItemContainer.append(itemContent);

//     const formItem = document.createElement('form');
//     formItem.className = 'checkbox-form';
//     itemContent.append(formItem);

//     const inputItem = document.createElement('input');
//     inputItem.className = 'checkbox-form__checkbox';
//     inputItem.type = 'checkbox';
//     inputItem.id = taskId;
//     formItem.append(inputItem);

//     const labelItem = document.createElement('label');
//     labelItem.htmlFor = taskId;
//     formItem.append(labelItem);

//     const spanItem = document.createElement('span');
//     spanItem.className = 'task-item__text';
//     spanItem.innerText = textOfTheTask;
//     itemContent.append(spanItem);

//     const buttonItem = document.createElement('button');
//     buttonItem.className = 'task-item__delete-button default-button delete-button';
//     buttonItem.dataset.deleteTaskid = '5';
//     buttonItem.innerText = 'Удалить';
//     blockItemContainer.append(buttonItem);

//     return blockItem
// }

// const createTaskBlock = document.querySelector('.create-task-block');
// createTaskBlock.addEventListener('submit', (event) => {
//     event.preventDefault()
//     const newTaskText = event.target.taskName.value || ''    
//     if(newTaskText) {
//         const newTask = {
//             id: Date.now().toString(),            
//             text: newTaskText,
//         }
//         tasks.push(newTask);
//         const taskItem = createTaskItem(newTask.id, newTask.text);
//         const tasksListItem = document.querySelector('.tasks-list');
//         tasksListItem.append(taskItem)
//     }     
// })
// const tasksListItem = document.querySelector('.tasks-list');
// tasks.forEach((task) => {
//   const taskItem = createTaskItem(task.id, task.text)
//   tasksListItem.append(taskItem)
// })


//===============================================================================================

// const tasks = [
//     {
//       id: '1138465078061',
//       completed: false,
//       text: 'Посмотреть новый урок по JavaScript',
//     },
//     {
//       id: '1138465078062',
//       completed: false,
//       text: 'Выполнить тест после урока',
//     },
//     {
//       id: '1138465078063',
//       completed: false,
//       text: 'Выполнить ДЗ после урока',
//     },
//   ]
  
//   const createTaskItem = (taskId, taskText) => {
//     const taskItem = document.createElement('div')
//     taskItem.className = 'task-item'
//     taskItem.dataset.taskId = taskId
  
//     const taskItemMainContainer = document.createElement('div')
//     taskItemMainContainer.className = 'task-item__main-container'
  
//     const taskItemMainContent = document.createElement('div')
//     taskItemMainContent.className = 'task-item__main-content'
  
//     taskItem.append(taskItemMainContainer)
//     taskItemMainContainer.append(taskItemMainContent)
  
//     const checkboxForm = document.createElement('form')
//     checkboxForm.className = 'checkbox-form'
  
//     const inputCheckbox = document.createElement('input')
//     inputCheckbox.type = 'checkbox'
//     inputCheckbox.className = 'checkbox-form__checkbox'
//     const inputId = `task-${taskId}`
//     inputCheckbox.id = inputId
  
//     const labelCheckbox = document.createElement('label')
//     labelCheckbox.htmlFor = inputId
  
//     const taskItemText = document.createElement('span')
//     taskItemText.className = 'task-item__text'
//     taskItemText.innerText = taskText
  
//     const deleteButton = document.createElement('button')
//     deleteButton.className =
//       'task-item__delete-button default-button delete-button'
//     deleteButton.innerText = 'Удалить'
  
//     taskItemMainContent.append(checkboxForm, taskItemText)
//     checkboxForm.append(inputCheckbox, labelCheckbox)
//     taskItemMainContainer.append(deleteButton)
  
//     return taskItem
//   }
  
//   const createTaskForm = document.querySelector('.create-task-block')
//   createTaskForm.addEventListener('submit', event => {
//     event.preventDefault()
  
//     const newTaskText = event.target.taskName.value || ''
//     if (newTaskText) {
//       const newTask = {
//         id: Date.now().toString(),
//         text: newTaskText,
//       }
//       tasks.push(newTask)
//       const taskItem = createTaskItem(newTask.id, newTask.text)
//       tasksListContainer.append(taskItem)
//     }
//   })
  
//   const tasksListContainer = document.querySelector('.tasks-list')
//   tasks.forEach(task => {
//     const taskItem = createTaskItem(task.id, task.text)
//     tasksListContainer.append(taskItem)
//   })


//* Задание #4

// Вы молодец! Вы справились с задачей и отдали ее на код-ревью старшему разработчику. Но старший разработчик обнаружил, что не нужно отправлять форму, если значение пустое либо задача с таким же названием уже существует. Поэтому вас просят добавить валидацию в ваш код.

// Для блока с ошибкой создавайте тег span с классом “error-message-block”. Внутрь данного тега будет помещаться текст с ошибкой. Если форма была отправлена с пустым полем, то отобразите ошибку “Название задачи не должно быть пустым”, добавив блок с ошибкой в форму с классом “create-task-block”. Если же задача с введенным в поле названием уже существует, то отображайте ошибку “Задача с таким названием уже существует.” Если при отправке формы ошибок не было найдено, то удалите блок с ошибкой, если он существует в DOM, и создайте новую задачу в списке. У вас имеются начальные файлы. Используйте их для разработки логики приложения.

// const tasks = [
//     {
//     id: '1138465078061',
//     completed: false,
//     text: 'Посмотреть новый урок по JavaScript',
//     },
//     {
//     id: '1138465078062',
//     completed: false,
//     text: 'Выполнить тест после урока',
//     },
//     {
//     id: '1138465078063',
//     completed: false,
//     text: 'Выполнить ДЗ после урока',
//     },
// ]


// // Создание структуры
// const createTaskItem = (taskId, textOfTheTask) => {

//     const blockItem = document.createElement('div');
//     blockItem.className = 'task-item';
//     blockItem.dataset.taskId = taskId;    

//     const blockItemContainer = document.createElement('div');
//     blockItemContainer.className = 'task-item__main-container';
//     blockItem.append(blockItemContainer);

//     const itemContent = document.createElement('div');
//     itemContent.className = 'task-item__main-content';
//     blockItemContainer.append(itemContent);

//     const formItem = document.createElement('form');
//     formItem.className = 'checkbox-form';
//     itemContent.append(formItem);

//     const inputItem = document.createElement('input');
//     inputItem.className = 'checkbox-form__checkbox';
//     inputItem.type = 'checkbox';
//     inputItem.id = taskId;
//     formItem.append(inputItem);

//     const labelItem = document.createElement('label');
//     labelItem.htmlFor = taskId;
//     formItem.append(labelItem);

//     const spanItem = document.createElement('span');
//     spanItem.className = 'task-item__text';
//     spanItem.innerText = textOfTheTask;
//     itemContent.append(spanItem);

//     const buttonItem = document.createElement('button');
//     buttonItem.className = 'task-item__delete-button default-button delete-button';
//     buttonItem.dataset.deleteTaskid = '5';
//     buttonItem.innerText = 'Удалить';
//     blockItemContainer.append(buttonItem);

//     return blockItem
// }


// // Фуекция создания спана error и присвоение ему класса, принимает error message, возвращает структуру с переменной errorMessage
// const createErrorBlock = (errorMessage) => {
//     const errorBlock = document.createElement('span');
//     errorBlock.innerText = errorMessage;
//     errorBlock.className = 'error-message-block';
//     return errorBlock;
// }

// // Создание события на form. Событие на основе "submit" - c отменой дефолтного
// const createTaskForm = document.querySelector('.create-task-block');
// createTaskForm.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const newTaskText = (event.target.taskName.value || '').trim(); // Переменная нового таска - помещает введенный текст в переменную при "нажатие на кнопку формы" или присваивает пустую строку, обрезаны пробелы "по краям"

//     const isTaskExists = tasks.some((task) => task.text === newTaskText); // Проверка на существование объявленной ранее переменной в массиве tasks перебором соответствия значения хотя бы одного ключа text значению newTaskText. 
    
//     const errorMessageBlockFromDOM = createTaskForm.querySelector('.error-message-block'); 

//     // Условие существование newTaskText СЕЙЧАС (то есть оно введено в форму но не добавлено в tasks). А именно его отсутствие в этом условии
//     if (!newTaskText) {
//         const errorBlock = createErrorBlock('Название задачи не должно быть пустым');
//         createTaskForm.append(errorBlock);
//     } else if (isTaskExists) {
//         const errorBlock = createErrorBlock('Задача с таким названием уже существует.');
//         createTaskForm.append(errorBlock); 
//     } else if (newTaskText && !isTaskExists) {
//         const newTask = {
//             id: Date.now().toString(),
//             text: newTaskText,
//         };
//         tasks.push(newTask);
//         const taskItem = createTaskItem(newTask.id, newTask.text);
//         tasksListContainer.append(taskItem);
//     }
//     if (errorMessageBlockFromDOM) {
//         errorMessageBlockFromDOM.remove();
//     }
// });


//* =================================================

// const createErrorBlockMessage = (errorMessage) => {
//     const errorBlock = document.createElement('span');
//     errorBlock.className = 'error-message-block';
//     errorBlock.innerText = errorMessage;

//     return errorBlock
// }

// const blockForm = document.querySelector('.create-task-block') 

// blockForm.addEventListener('submit', (event) => {
//     event.preventDefault();

//    const newTask = (event.target.taskName.value || '').trim();
//    const isAlreadyExist = tasks.some((task) => task.text === newTask);
//    const errorBlockMessage = document.querySelector('.error-message-block');

//    if(!newTask) {
//     const errorBlockToWright = createErrorBlockMessage('Это поле не должно быть пустым');
//     blockForm.append(errorBlockToWright);
//    } else if(isAlreadyExist) {
//     errorBlockToWright = createErrorBlockMessage('Такая задача уже существует');
//     blockForm.append(errorBlockToWright);
//    } else if(newTask && !isAlreadyExist) {
//     const newInTasks = {
//         id: Date.now().toString(),
//         text: newTask,
//     }
//     tasks.push(newInTasks);
//     const taskItem = createTaskItem(newInTasks.id, newInTasks.text); 
//     tasksListContainer.append(taskItem);  
//    }
   
   
//    if(errorBlockMessage) {
//     errorBlockMessage.remove()
//    }
// })

// const tasksListContainer = document.querySelector('.tasks-list');
// tasks.forEach((task) => {
//     const taskItem = createTaskItem(task.id, task.text);
//     tasksListContainer.append(taskItem);
// });
//* =======================================================================



//* Задание #5

// Чтобы успешно завершить все ваши задачи на проекте, осталось выполнить только удаление задач. Для этого имеется кнопка “Удалить”. Но иногда пользователи могут случайно нажать на кнопку и из-за этого удалится задача. Для этого обычно создаются модальные окна, которые спрашивают пользователя, действительно ли он хочет удалить задачу. Сейчас вам необходимо будет реализовать такое модальное окно. Стили для модального окна и HTML-шаблон у вас уже имеются. Создайте HTML-элемент модального окна с помощью JavaScript и добавьте его внутри тега body. Шаблон модального окна:

//  <div class="modal-overlay modal-overlay_hidden">
//     <div class="delete-modal">
//         <h3 class="delete-modal__question">Вы действительно хотите удалить эту задачу?</h3>
//         <div class="delete-modal__buttons">
//             <button class="delete-modal__button delete-modal__cancel-button">Отмена</button>
//             <button class="delete-modal__button delete-modal__confirm-button">Удалить</button>
//         </div>
//     </div>
// </div> 

// Класс “modal-overlay_hidden” отвечает за открытие и закрытие модального окна. Если оно открыто, то класса “modal-overlay_hidden” нету, если закрыто, то класс “modal-overlay_hidden” присутствует. Вам необходимо открывать модальное окно после нажатия на любую кнопку “Удалить” около каждой задачи. Повесьте обработчик события “click” на элемент с классом “tasks-list”. Используйте делегирование событий для того, чтобы отлавливать клики на кнопки для удаления задач.В модальном окне есть 2 кнопки: “Отмена” и “Удалить”. “Отмена” закрывает модальное окно, а “Удалить” - удаляет задачу из массива tasks и из DOM-дерева и закрывает модальное окно.

// Для удаления задачи используйте атрибут data-task-id, который содержит информацию о свойстве id объекта задачи из массива tasks. По данному id вы сможете найти нужную задачу и удалить ее. У вас имеются начальные файлы. Используйте их для разработки логики приложения.


//* =========================================================================================
// const tasks = [
//     {
//     id: '1138465078061',
//     completed: false,
//     text: 'Посмотреть новый урок по JavaScript',
//     },
//     {
//     id: '1138465078062',
//     completed: false,
//     text: 'Выполнить тест после урока',
//     },
//     {
//     id: '1138465078063',
//     completed: false,
//     text: 'Выполнить ДЗ после урока',
//     },
// ]


// //Создание структуры добавления task ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const createTaskItem = (taskId, textOfTheTask) => {

//     const blockItem = document.createElement('div');
//     blockItem.className = 'task-item';
//     blockItem.dataset.taskId = taskId;    

//     const blockItemContainer = document.createElement('div');
//     blockItemContainer.className = 'task-item__main-container';
//     blockItem.append(blockItemContainer);

//     const itemContent = document.createElement('div');
//     itemContent.className = 'task-item__main-content';
//     blockItemContainer.append(itemContent);

//     const formItem = document.createElement('form');
//     formItem.className = 'checkbox-form';
//     itemContent.append(formItem);

//     const inputItem = document.createElement('input');
//     inputItem.className = 'checkbox-form__checkbox';
//     inputItem.type = 'checkbox';
//     inputItem.id = `task-${taskId}`;
//     formItem.append(inputItem);

//     const labelItem = document.createElement('label');
//     labelItem.htmlFor = taskId;
//     formItem.append(labelItem);

//     const spanItem = document.createElement('span');
//     spanItem.className = 'task-item__text';
//     spanItem.innerText = textOfTheTask;
//     itemContent.append(spanItem);

//     const buttonItem = document.createElement('button');
//     buttonItem.className = 'task-item__delete-button default-button delete-button';
//     buttonItem.dataset.deleteTaskid = '5';
//     buttonItem.innerText = 'Удалить';
//     blockItemContainer.append(buttonItem);

//     return blockItem
// }

// // Error +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const createErrorBlockMessage = (errorMessage) => {
//     const errorBlock = document.createElement('span');
//     errorBlock.className = 'error-message-block';
//     errorBlock.innerText = errorMessage;

//     return errorBlock
// }

// // Проверка таска добавление нового от пользователя +++++++++++++++++++++++++++++++++++++
// const blockForm = document.querySelector('.create-task-block') 

// blockForm.addEventListener('submit', (event) => {
//     event.preventDefault();

//    const newTask = (event.target.taskName.value || '').trim();
//    const isAlreadyExist = tasks.some((task) => task.text === newTask);
//    const errorBlockMessage = document.querySelector('.error-message-block');

//    if(!newTask) {
//     const errorBlockToWright = createErrorBlockMessage('Это поле не должно быть пустым');
//     blockForm.append(errorBlockToWright);
//    } else if(isAlreadyExist) {
//     errorBlockToWright = createErrorBlockMessage('Такая задача уже существует');
//     blockForm.append(errorBlockToWright);
//    } else if(newTask && !isAlreadyExist) {
//     const newInTasks = {
//         id: Date.now().toString(),
//         text: newTask,
//     }
//     tasks.push(newInTasks);
//     const taskItem = createTaskItem(newInTasks.id, newInTasks.text); 
//     tasksListContainer.append(taskItem);  
//    }  
//    if(errorBlockMessage) {
//     errorBlockMessage.remove()
//    }
// })

// // Добавление task +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const tasksListContainer = document.querySelector('.tasks-list');
// tasks.forEach((task) => {
//     const taskItem = createTaskItem(task.id, task.text);
//     tasksListContainer.append(taskItem);
// });

// // Блок модального окна +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // стркутура
// const modalWindow = document.createElement('div');
// modalWindow.className = 'modal-overlay modal-overlay_hidden';

// const modalContent = document.createElement('div');
// modalContent.className = 'delete-modal';
// modalWindow.append(modalContent);

// const modalQuestion = document.createElement('h3');
// modalQuestion.className = 'delete-modal__question';
// modalQuestion.innerText = 'Вы действительно хотите удалить эту задачу?';
// modalContent.append(modalQuestion);

// const modalButtons = document.createElement('div');
// modalButtons.className = 'delete-modal__buttons';
// modalContent.append(modalButtons);

// const buttonCancel = document.createElement('button')
// buttonCancel.className = 'delete-modal__button delete-modal__cancel-button';
// buttonCancel.innerText = 'Отмена';
// const buttonConfirm = document.createElement('button')
// buttonConfirm.className = 'delete-modal__button delete-modal__confirm-button';
// buttonConfirm.innerText = 'Удалить';
// modalButtons.append(buttonCancel);
// modalButtons.append(buttonConfirm);

// const mainDoc = document.querySelector('body');
// mainDoc.append(modalWindow)

// // Обработчик события +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let taskIdToDelete = null;
// tasksListContainer.addEventListener('click', (event) => {
//     const buttonToDelete = event.target.closest('.task-item__delete-button');
//     if (buttonToDelete) {
//         const targetingTaskToDelete = buttonToDelete.closest('.task-item');
//         if (targetingTaskToDelete) {
//             taskIdToDelete = targetingTaskToDelete.dataset.taskId;
//             modalWindow.classList.remove('modal-overlay_hidden');
//         }
//     }    
//     modalWindow.addEventListener('click', event => {
//         modalWindow.classList.add('modal-overlay_hidden');
//         const toDeleteOrNot = event.target.closest('.delete-modal__button');
//         if (toDeleteOrNot.innerText === 'Удалить') {
//             const itemToDelete = tasksListContainer.querySelector(`[data-task-id="${taskIdToDelete}"]`);
//             itemToDelete.remove();
//             const deleteFromTasksFindId = tasks.findIndex(item => item.id === taskIdToDelete);
//             if (deleteFromTasksFindId >=0 ) {
//                 tasks.splice(deleteFromTasksFindId, 1);                
//             }
//         }         
//     }) 
    
// })

//* ++++++++++ Решение 

// const tasks = [
//     {
//         id: '1138465078061',
//         completed: false,
//         text: 'Посмотреть новый урок по JavaScript',
//     },
//     {
//         id: '1138465078062',
//         completed: false,
//         text: 'Выполнить тест после урока',
//     },
//     {
//         id: '1138465078063',
//         completed: false,
//         text: 'Выполнить ДЗ после урока',
//     },
// ]

// const createTaskItem = (taskId, taskText) => {
//     const taskItem = document.createElement('div');
//     taskItem.className = 'task-item';
//     taskItem.dataset.taskId = taskId;

//     const taskItemMainContainer = document.createElement('div');
//     taskItemMainContainer.className = 'task-item__main-container';

//     const taskItemMainContent = document.createElement('div');
//     taskItemMainContent.className = 'task-item__main-content';

//     taskItem.append(taskItemMainContainer);
//     taskItemMainContainer.append(taskItemMainContent);

//     const checkboxForm = document.createElement('form');
//     checkboxForm.className = 'checkbox-form';

//     const inputCheckbox = document.createElement('input');
//     inputCheckbox.type = 'checkbox';
//     inputCheckbox.className = 'checkbox-form__checkbox';
//     const inputId = `task-${taskId}`;
//     inputCheckbox.id = inputId;

//     const labelCheckbox = document.createElement('label');
//     labelCheckbox.htmlFor = inputId;

//     const taskItemText = document.createElement('span');
//     taskItemText.className = 'task-item__text';
//     taskItemText.innerText = taskText;

//     const deleteButton = document.createElement('button');
//     deleteButton.className = 'task-item__delete-button default-button delete-button';
//     deleteButton.innerText = 'Удалить';

//     taskItemMainContent.append(checkboxForm, taskItemText);
//     checkboxForm.append(inputCheckbox, labelCheckbox);
//     taskItemMainContainer.append(deleteButton);

//     return taskItem;
// }

// const createErrorBlock = (errorMessage) => {
//     const errorBlock = document.createElement('span');
//     errorBlock.innerText = errorMessage;
//     errorBlock.className = 'error-message-block';
//     return errorBlock;
// }

// const createTaskForm = document.querySelector('.create-task-block');
// createTaskForm.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const newTaskText = (event.target.taskName.value || '').trim();
//     const isTaskExists = tasks.some((task) => task.text === newTaskText);
//     const errorMessageBlockFromDOM = createTaskForm.querySelector('.error-message-block');

//     if (!newTaskText) {
//         const errorBlock = createErrorBlock('Название задачи не должно быть пустым');
//         createTaskForm.append(errorBlock);
//     } else if (isTaskExists) {
//         const errorBlock = createErrorBlock('Задача с таким названием уже существует.');
//         createTaskForm.append(errorBlock); 
//     } else if (newTaskText && !isTaskExists) {
//         const newTask = {
//             id: Date.now().toString(),
//             text: newTaskText,
//         };
//         tasks.push(newTask);
//         const taskItem = createTaskItem(newTask.id, newTask.text);
//         tasksListContainer.append(taskItem);
//     }
//     if (errorMessageBlockFromDOM) {
//         errorMessageBlockFromDOM.remove();
//     }
// });

// const tasksListContainer = document.querySelector('.tasks-list');
// tasks.forEach((task) => {
//     const taskItem = createTaskItem(task.id, task.text);
//     tasksListContainer.append(taskItem);
// });

// const createDeleteModal = (text) => {
//     const modalOverlay = document.createElement('div');
//     modalOverlay.className = 'modal-overlay modal-overlay_hidden';

//     const deleteModal = document.createElement('div');
//     deleteModal.className = 'delete-modal';

//     modalOverlay.append(deleteModal);

//     const modalTitle = document.createElement('h3');
//     modalTitle.className = 'delete-modal__question';
//     modalTitle.innerText = text;
//     const modalButtons = document.createElement('div');
//     modalButtons.className = 'delete-modal__buttons';
    
//     const cancelButton = document.createElement('button');
//     cancelButton.className = 'delete-modal__button delete-modal__cancel-button';
//     cancelButton.innerText = 'Отмена'
//     const confirmButton = document.createElement('button');
//     confirmButton.className = 'delete-modal__button delete-modal__confirm-button';
//     confirmButton.innerText = 'Удалить';

//     deleteModal.append(modalTitle, modalButtons); 
//     modalButtons.append(cancelButton, confirmButton);

//     return {
//         deleteModal,
//         cancelButton,
//         confirmButton,
//         modalOverlay,
//     };
// }


// let targetTaskIdToDelete = null;
// const {
//     deleteModal, cancelButton, confirmButton, modalOverlay,
// } = createDeleteModal('Вы действительно хотите удалить эту задачу?');
// document.body.prepend(modalOverlay);
// cancelButton.addEventListener('click', () => {
//     modalOverlay.classList.add('modal-overlay_hidden');
// });
// confirmButton.addEventListener('click', () => {
//     const deleteIndex = tasks.findIndex((task) => task.id === targetTaskIdToDelete);
//     if (deleteIndex >= 0) {
//         tasks.splice(deleteIndex, 1);
//         const taskItemHTML = document.querySelector(`[data-task-id="${targetTaskIdToDelete}"]`);
//         taskItemHTML.remove();
//         modalOverlay.classList.add('modal-overlay_hidden');
//     }
// });

// const tasksList = document.querySelector('.tasks-list');
// tasksList.addEventListener('click', (event) => {
//     const { target } = event;
//     const closestTarget = target.closest('.task-item__delete-button');
//     if (closestTarget) {
//         const closestTask = closestTarget.closest('.task-item');
//         if (closestTask) {
//             const taskId = closestTask.dataset.taskId;
//             targetTaskIdToDelete = taskId;
//             modalOverlay.classList.remove('modal-overlay_hidden');
//         }
//     }
// });


//* ++++++++++ 


//* =========================================================================================



//* Задание #6

// Вас поздравляет заказчик и команда разработки с успешной работой на проекте. Вы молодец! Хорошо себя показали. Но тут один из разработчиков заболел и больше некому выполнить его задачу. Поэтому попросили вас подменить коллегу. Вам необходимо реализовать смену темы с темной на светлую и наоборот. Тема должна переключаться при нажатии на кнопку “Tab”. Изначально тема светлая.

// При смене темы вам необходимо изменить стили для следующих элементов:

// 1. элемент с тегом body. Если тема темная, то свойство background должно быть
// значением “#24292E”, иначе - “initial”.
// 2. Все элементы с классом “task-item”. Если тема темная, то свойство color должно
// быть “#ffffff”, иначе - “initial”.
// 3. Ко всем элементам с тегом button необходимо добавить значение “1px solid #ffffff”,
// если тема темная, иначе - “none”.

// Для решения данной задачи используйте свойства style у html-элементов. У вас имеются начальные файлы. Используйте их для разработки логики приложения.



//* Решение =======================================================================

// let isDarkTheme = false;
// const changeColorTheme = ({changeBackground, changeTextColor, changeBorderColor}) => {
//   document.body.style.backgroundColor = changeBackground;
//   document.querySelectorAll('.task-item').forEach(item => {
//    item.style.color = changeTextColor;
//   })
//   document.querySelectorAll('button').forEach(item => {
//    item.style.border = changeBorderColor;
//   })
// }
// window.addEventListener('keyup', event => {
//     event.preventDefault();
//     const { key } = event;
//     if (key === 'Tab') {
//        isDarkTheme = !isDarkTheme;
//        if (isDarkTheme) {
//             changeColorTheme({
//                 changeBackground: '#24292E',
//                 changeTextColor: '#ffffff',
//                 changeBorderColor: '1px solid #ffffff',
//             })
//         } else {
//             changeColorTheme({
//                 changeBackground: 'initial',
//                 changeTextColor: 'initial',
//                 changeBorderColor: 'none',
//             })
//         }
//     }
// })

// const colorChangeItems = ({changeBackgroundColor, changeTextColor, changeBorderColor}) => {
//     document.body.style.backgroundColor = changeBackgroundColor;
//     document.querySelectorAll('.task-item').forEach(item => {
//         item.style.color = changeTextColor;
//     })
//     document.querySelectorAll('button').forEach(item => { 
//         item.style.border = changeBorderColor;
//     }) 
// }

// let darkTheme = false;
// window.addEventListener('keydown', event => {
//     const { key } = event;
//     if (key === 'Tab') {
//         event.preventDefault();
//         darkTheme = !darkTheme;
//         if (darkTheme) {
//             colorChangeItems({
//                 changeBackgroundColor: '#24292E',
//                 changeTextColor: '#ffffff',
//                 changeBorderColor: '1px solid #ffffff',
//             })
//         } else {
//             colorChangeItems({
//                 changeBackgroundColor: 'initial',
//                 changeTextColor: 'initial',
//                 changeBorderColor: 'none',
//             })
//         }
//     }
// })



//* Задание #7 (дополнительное)

//Выпадающий список - популярный элемент на современном веб-сайте. Вы когда-нибудь задумывались как создается такой элемент? Сейчас вашей задачей будет реализация выпадающего списка на чистом JavaScript. Стили и HTML-шаблон для выпадающего списка у вас уже есть. Вам нужно добавить логику. Шаблон для выпадающего списка вам необходимо создать через JavaScript, используя document.createElement.

// Шаблон выпадающего списка:

//*  <div class="select-dropdown select-dropdown--123">

//*     <button class="select-dropdown__button select-dropdown__button--123">
//*         <span class="select-dropdown select-dropdown--123">Выберите элемент</span>
//*     </button>

//*     <ul class="select-dropdown__list select-dropdown__list--123">
//*         <li class="select-dropdown__list-item" data-value="1">JavaScript</li>
//*         <li class="select-dropdown__list-item" data-value="2">NodeJS</li>
//*         <li class="select-dropdown__list-item" data-value="3">ReactJS</li>
//*         <li class="select-dropdown__list-item" data-value="4">HTML</li>
//*         <li class="select-dropdown__list-item" data-value="5">CSS</li>
//*     </ul>

//*  </div> 

// Для реализации выпадающего списка создайте класс CustomSelect. Конструктор данного класса принимает 2 параметра:

// 1. id - уникальный идентификатор списка. В HTML шаблоне вместо id подставили как текст “123”. (Например, "select-dropdown__button--123"). Переданный параметр id должен быть подставлен вместо данного текста. (Например, если вы передадите в конструктор id как "my-select", то класс станет "select-dropdown__button--my-select")

// 2. options - массив вариантов выбора для выпадающего списка. Массив состоит из объектов с ключами:

// a. value - значение атрибута data-value у элемента списка (тега li)
// b. text - контент, переданный в тег элемента списка li. Его видит пользователь В классе CustomSelect все методы и поля кроме render должны быть обязательно приватными.

//Публичный метод render принимает в себя параметр container (он является DOM узлом, полученным через document.querySelector). В этот container нужно будет добавлять всю верстку выпадающего списка Чтобы реализовать открытие и закрытие списка, вам необходимо повесить обработчик событий “click” на элемент с классом “select-dropdown__button”. Список открыт, когда у элемента с тегом ul есть класс “active”.

// Чтобы реализовать выбор определенного элемента из выпадающего списка, также необходимо повесить обработчик событий "click". Сделать это можно двумя способами (выберите, что вам более удобно):

// 1. Повесить обработчик на каждый элемент списка с тегом li
// 2. Использовать делегирование событий

// При клике нам нужно сохранить выбранный элемент в приватное поле currentSelectedOption. С помощью него мы в дальнейшем сможем получать выбранное значение. Чтобы получить значение для этого поля, ****необходимо у выбранного li получить значение атрибута "data-value". С помощью него мы можем найти нужный объект в массиве options, ****и уже этот объект сохранить в currentSelectedOption. Это поле будем обновлять каждый раз при выборе нового элемента меню Текст выбранного значения подставляйте в элемент с классом “select-dropdown” (ключ text у объекта выбранного элемента)

// Кроме этого к элементу li, по которому произошел клик, добавляйте класс “selected”, чтобы он становился активным и подсвечивался другим цветом. Класс “selected” может быть только у одного элемента с тегом li. Чтобы получать текущее выбранное значение создайте геттер для приватного поля currentSelectedOption, который будет называться selectedValue. Геттер selectedValue должен возвращать currentSelectedOption - объект выбранного элемента из выпадающего списка (объект из массива options)

// Для теста написанного класса используйте данный код:



class CustomSelect {



    #id; // приватный id индентификатор списка;
    #options; // приватный массив данных выпадающего списка;
    #selectContainer; // приватная переменная для контейнера списка;
    #button; // приватная переменна кнопка;
    #ulBlock; // приватная переменная блока списка;
    #selectedItem; // приватная переменная для выбранного элемента списка



    // static приватная переменная объект с ключем selectItems у которого значение "Выберите Элемент"
    static #defaultText = {
        selectItems: "Выберите Элемент"
    };



    //* Конструктор полей для создания блока выпадающего списка ======================================================================



    constructor(id, options = []) {

        this.#button = document.createElement('button');
        this.#selectContainer = document.createElement('select');
        this.#ulBlock = document.createElement('ul');
        this.#selectContainer.id = id;
        this.#selectContainer.style.display = 'none';

        
        this.#options = options;
        this.#id = id;      
        this.#selectedItem = null; // null для выбранного элемента
        
    }



    // Геттер для выбранного элемента

    get selectedValue() {
        return this.#selectedItem
    } 



    //* RENDER кнопки ===============================================================================================================    
    
    #renderSelectButton(container) {

        // Присваиваем класс select-dropdown__button select-dropdown__button--${this.#id} кнопки 'button' 
        // Создаем внутри спан с классом select-dropdown__text select-dropdown__text--${this.#id} и добавляем дефолтный текст
        // В скрытую переменную #button -'button' помещаем созданный спан
        // В контейнер container он же selectDropdownContainer помещаем саму #button
        // Добавляем listener на #button по клику вызываем #handleDropdownToggle

        this.#button.className = `select-dropdown__button select-dropdown__button--${this.#id}`;
        const buttonTextItem = document.createElement("span");
        buttonTextItem.className = `select-dropdown__text select-dropdown__text--${this.#id}`;
        buttonTextItem.textContent = CustomSelect.#defaultText.selectItems;
        this.#button.append(buttonTextItem);
        container.append(this.#button);

        // Выходим и заходим из главноко класса вызываем #handleDropdownToggle байндом с параметрами customSelect в этом случае
        // В итоге это присвоит или удалит класс active ulBlock

        this.#button.addEventListener(
            "click",
            this.#handleDropdownToggle.bind(this)
        );
    }


    // toggle для класса active блоку ulBlock ============================================================================================

    #handleDropdownToggle() {
        this.#ulBlock.classList.toggle('active');
    }



    //* RENDER LI списка  ==========================================================================================================

    #renderVisibleSelect(container) {


        // В containerId записываем название класса тега Ul и добавляем в запись класса select-dropdown__list

        const containerId = `select-dropdown__list--${this.#id}`;
        this.#ulBlock.className = `select-dropdown__list ${containerId}`;

        // Создать элементы списка путем перебора массива options
        // При каждой итерации произойдет создание li записи присвоится класс select-dropdown__list-item и в тег добавится:
        // 1. дата-атрибут data-value со значением из объекта ключа value
        // 2. Текст из объекта ключа text
        // То есть при первой итерации добавится:
        // <li class="select-dropdown__list-item" data-value='1'>JavaScript</li>
        // На каждый элемент LI вешаем listener вызывающий #handleDropdownItemSelect
        // При каждой итерации добавляем пункт LI в блок UL
        
        this.#options.forEach((option) => {
            const liItem = document.createElement("li");
            liItem.className = "select-dropdown__list-item";
            liItem.dataset.value = option.value;
            liItem.textContent = option.text;
           
           
            liItem.addEventListener(
                "click",
                this.#handleDropdownItemSelect.bind(this)
            );

            this.#ulBlock.append(liItem);
        });

        // Проверяем существование контейнера и вставляем UL блок

        if (container) {
            container.append(this.#ulBlock);
        }
    }



    //* Основной функционал скрипта ==================================================================================================
    // Метод вызывается событием click в ранее вызванном методе #renderVisibleSelect()

    #handleDropdownItemSelect(event) {

        const { target } = event;
        const dataValue = target.getAttribute("data-value");

        // В переменную targetOption поместить значение дата-атрибута value у li (и перевести в число) путем поиска среди значений ключа value одного из объектов массива options соответствующего дата-атрибутк нажатому пункту 

        const targetOption = this.#options.find((option) => option.value === Number(dataValue));


        // selectButtonText помещает в себя элемент спан (А ГЛАВНОЕ ЕГО ТЕКСТ) и если все три переменные существуют,
        // а именно - selectButtonText, вытянутый номер data-value у li - dataValue, и targetOption - то есть data-value есть в массиве options, ТО 
        // 1. в #selectedItem поместить targetOption
        // 2. Все пункты LI вставить в allLiOptions
        // 3. Перебрать allLiOptions и поудалять класс selected (если ранее он был присвоен)
        // 4. Добавить target класс selected
        // 5. Текст выбранного пункта LI  вставить в кнопку (selectButtonText), то есть основной текст кнопки
        // 6. У списка UL убрать класс active, что скроет его через opacity: 1;

        const selectButtonText = this.#button.querySelector('.select-dropdown__text');
        if (selectButtonText && dataValue && targetOption) {
            this.#selectedItem = targetOption;
            const allLiOptions = this.#ulBlock.querySelectorAll('.select-dropdown__list-item');

            // удалить класс selected у всех li и добавить этот класc target
            allLiOptions.forEach((liOption) => {
                liOption.classList.remove("selected");
            });

            target.classList.add("selected");

            // Поместить текст выбранного пункта в кнопку (его спан)  
            selectButtonText.textContent = targetOption.text;
            this.#ulBlock.classList.remove("active");
        }
    }


    



    //* RENDER метод =================================================================================================================

    // Метод для создания кнопки и блока с выпадающим меню ГЛАВНОЕ СОЗДАНИЕ!
    // В метод помещёна переменная container которой соответствует значение при вызове метода переменная mainContainer
    // Переменной mainContainer присвоен div c id container

    render(container) {

        // Создаем div с классом select-dropdown select-dropdown--${this.id} - уникальный номер в данном случае 123

        const selectDropdownContainer = document.createElement("div");
        selectDropdownContainer.className = `select-dropdown select-dropdown--${this.id}`;

        // Если контейнер создался обращаемся к методам:
        // #renderSelectButton - создает кнопку
        // и #renderVisibleSelect - создает вертикальный список
        // В методы помещена selectDropdownContainer, это нужно для помещения в этот блок кнопки и списка
        // select-dropdown select-dropdown--${this.id}`
        // В конце добавляем одну заготовку div..select-dropdown select-dropdown--${this.id} в div с id container

        if (container) {
            this.#renderSelectButton(selectDropdownContainer);
            this.#renderVisibleSelect(selectDropdownContainer);
            container.append(selectDropdownContainer);
        }
    }
}

// Набор тестовых значений
const options = [
    { value: 1, text: 'JavaScript' },
    { value: 2, text: 'NodeJS' },
    { value: 3, text: 'ReactJS' },
    { value: 4, text: 'HTML' },
    { value: 5, text: 'CSS' }
    ];
    
const customSelect = new CustomSelect('123', options);
const mainContainer = document.querySelector('#container');
customSelect.render(mainContainer);



//* Решение=======================================================================

// class CustomSelect {
//     #options;
//     #id;
//     #selectButton;
//     #select;
//     #ulContainer;
//     #currentSelectedOption;

//     static #defaultText = {
//         selectItems: "Выберите Элемент"
//     };

//     constructor(id, options = []) {
//         this.#selectButton = document.createElement("button");
//         this.#select = document.createElement("select");
//         this.#ulContainer = document.createElement("ul");
//         this.#select.id = id;
//         this.#select.style.display = "none";

//         this.#options = options;
//         this.#id = id;
//         this.#currentSelectedOption = null;
//     }

//     get selectedValue() {
//         return this.#currentSelectedOption;
//     }

//     #renderVisibleSelect(container) {
//         const containerId = `select-dropdown__list--${this.#id}`;
//         this.#ulContainer.className = `select-dropdown__list ${containerId}`;

//         this.#options.forEach((option) => {
//             const liItem = document.createElement("li");
//             liItem.className = "select-dropdown__list-item";
//             liItem.dataset.value = option.value;
//             liItem.textContent = option.text;
//             liItem.addEventListener(
//                 "click",
//                 this.#handleDropdownItemSelect.bind(this)
//             );
//             this.#ulContainer.append(liItem);
//         });

//         if (container) {
//             container.append(this.#ulContainer);
//         }
// }

//     #renderSelectButton(container) {
//         this.#selectButton.className = `select-dropdown__button select-dropdown__button--${this.#id}`;
//         const buttonTextItem = document.createElement("span");
//         buttonTextItem.className = `select-dropdown__text select-dropdown__text--${this.#id}`;
//         buttonTextItem.textContent = CustomSelect.#defaultText.selectItems;
//         this.#selectButton.append(buttonTextItem);
//         container.append(this.#selectButton);

//         this.#selectButton.addEventListener(
//             "click",
//             this.#handleDropdownToggle.bind(this)
//         );
//     }

//     #handleDropdownToggle() {
//         this.#ulContainer.classList.toggle("active");
//     }

//     #handleDropdownItemSelect(event) {
//         const { target } = event;
//         const dataValue = target.getAttribute("data-value");
//         const targetOption = this.#options.find(
//             (option) => option.value === Number(dataValue)
//         );

//         const selectButtonText = this.#selectButton.querySelector(
//             ".select-dropdown__text"
//         );
//         if (selectButtonText && dataValue && targetOption) {
//             this.#currentSelectedOption = targetOption;
//             const allLiOptions = this.#ulContainer.querySelectorAll(
//                 ".select-dropdown__list-item"
//             );
//             allLiOptions.forEach((liOption) => {
//                 liOption.classList.remove("selected");
//             });
//             target.classList.add("selected");

//             selectButtonText.textContent = targetOption.text;
//             this.#ulContainer.classList.remove("active");
//         }
//     }

//     render(container) {
//         const selectDropdownContainer = document.createElement("div");
//         selectDropdownContainer.className = `select-dropdown select-dropdown--${this.#id}`;
//         if (container) {
//             this.#renderSelectButton(selectDropdownContainer);
//             this.#renderVisibleSelect(selectDropdownContainer);
//             container.append(selectDropdownContainer);
//         }
//     }
// }

// const options = [
//     { value: 1, text: "JavaScript" },
//     { value: 2, text: "NodeJS" },
//     { value: 3, text: "ReactJS" },
//     { value: 4, text: "HTML" },
//     { value: 5, text: "CSS" }
// ];
// const customSelect = new CustomSelect("123", options);
// const mainContainer = document.querySelector("#container");
// customSelect.render(mainContainer);
