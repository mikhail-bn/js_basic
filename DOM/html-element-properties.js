const taskWrapper = document.querySelector('.tasks__wrapper');
console.log(taskWrapper.className);

//taskWrapper.className = "tasks__wrapper_sth";
//console.log(taskWrapper.className);

const tasksBlock = document.querySelector('#tasks')
console.log(tasksBlock.id);

//tasksBlock.id = 'new_tasks';
//console.log(tasksBlock.id);

const submitButton = document.querySelector('.create-task-block__button');
console.log('submitButton: ', submitButton.innerText); 
console.log('submitButton: ', submitButton.textContent); 

submitButton.innerHTML = '<b>Создать новую задачу</b>';


// innerHTML


// tasksBlock.innerHTML = "tasksBlock";
// console.log(tasksBlock.innerHTML);


// children

const createTaskForm = document.querySelector('.create-task-block');
console.log('createTaskForm: ', createTaskForm.children);


// data-атрибуты

const firstNavButton = document.querySelector('.main-navigation__button-item')
console.log('firstNavButton: ', firstNavButton.dataset.buttonId);

firstNavButton.dataset.buttonId = '10';

// style

console.log('firstNavButton STYLE: ', firstNavButton.style);

firstNavButton.style.fontWeight = "800";
firstNavButton.style.boxShadow = "inset 0 0 0 3px rgb(68, 68, 68)"