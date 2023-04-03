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

submitButton.textContent = 'Создать новую задачу';


// innerHTML

