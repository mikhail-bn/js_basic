
// addEventListener("название события", функция)

const firstNavButton = document.querySelector('.main-navigation__button-item');
firstNavButton.addEventListener('click', (event) => {
    console.log(event.target);
    // const target = event.target;
    const {target} = event;
    target.classList.toggle('main-navigation__button-item_selected')
})

const allNavButton = document.querySelectorAll('.main-navigation__button-item');
allNavButton.forEach((button) => {
    button.addEventListener('click', (event) => {
        const {target} = event;
        allNavButton.forEach((someButton) => {
            someButton.classList.remove('main-navigation__button-item_selected');
        })
        target.classList.add('main-navigation__button-item_selected');
    })
})


// submit =========================================================

const createTaskForm = document.querySelector('.create-task-block');
createTaskForm.addEventListener('submit', (event) => {
    console.log(event);
    // event.preventDefault();
    const {target} = event;    
    const taskNameInput = target.taskName;
    const inputValue = taskNameInput.value;
    console.log('inputValue: ', inputValue);
    if(!inputValue || inputValue === 'Посмотреть урок по JavaScript') {
        alert('Введите правильные данные')
    } else alert(`Вы создали задачу ${inputValue}`);
    console.log('taskNameInput: ', taskNameInput);
})

// keyup keydown =========================================================

// document.addEventListener('keydown', (event) => {
//     //console.log(event);
//     const { key } = event;
//     console.log(key);
//     const taskToDelete = document.querySelector(`[data-task-id="${key}"]`);
//     if(taskToDelete) {
//         const deleteConfirmed = confirm(`Вы действительно хотите удалить задачу?`);
//         if(deleteConfirmed) {
//             taskToDelete.remove()
//         }
//     }
// })

// document.addEventListener('keyup', (event) => {
//     const {key} = event;
//     console.log('keyup: ', key);
//     const taskToDelete = document.querySelector(`[data-task-id="${key}"]`);
//     if(taskToDelete) {
//         const deleteConfirmed = confirm(`Вы действительно хотите удалить задачу?`);
//         if(deleteConfirmed) {
//             taskToDelete.remove()
//         }
//     }
// })


// mouseover =========================================================

// const createTooltip = (text) => {
//     const tooltip = document.createElement('span');
//     tooltip.textContent = text;
//     tooltip.className = 'tooltip';
    
//     return tooltip;
// }

// document.addEventListener('mouseover', (event) => {
//     // console.log(event );
//     const { target } = event;
//     // console.log(target);
//     const isOverDeleteButton = target.className.includes('task-item__delete-button');
//     if(isOverDeleteButton) {
//         console.log('success');
//         const taskItemHTML = target.closest('.task-item');
//         const taskId = taskItemHTML?.dataset.taskId;
//         if(taskId) {
//             const tooltipHTML = createTooltip(`Удалить задачу под номером ${taskId}?`);
//             target.append(tooltipHTML);
//         }
//     }
// })


 
// mouseout =========================================================

// document.addEventListener('mouseout', (event) => {
//     // console.log(event );
//     const { target } = event;
//     // console.log(target);
//     const isOutFromDeleteButton = target.className.includes('task-item__delete-button');
//     if(isOutFromDeleteButton) {
//         //console.log('success');
//         const tooltip = document.querySelector('.tooltip')
//         if(tooltip) {
//             tooltip.remove();
//         }
//     }
// })



// mousemove =========================================================

// document.addEventListener('mousemove', (event) => {
//     console.log(event);
// })


// contextmenu =========================================================

document.addEventListener('contextmenu', (event) => {
    console.log(event);
    event.preventDefault();
}); 



// change input =========================================================

const checkTaskNameInputOnValidation = (value) => {
    if(!value || value.includes('@')) {
        return false;
    }
    return true;
}


const createTaskBlock = document.querySelector('.create-task-block');
const taskNameInput = createTaskBlock.querySelector('.create-task-block__input');

taskNameInput.addEventListener('input', (event) => {
    const {target} = event;
    console.log('target: ', target); 
    const {value} = target;
    console.log('value: ', value);
    const isValid = checkTaskNameInputOnValidation(value);
    const messageBlockFromDom = document.querySelector('.error-message-block')
    if(!isValid) {
        const newMessageBlock = document.createElement('span');
        newMessageBlock.className = 'error-message-block';
        newMessageBlock.textContent = 'Ошибка! Текст не должен быть пустым и не может содержать "@"';
        createTaskBlock.append(newMessageBlock);
    }else if (isValid && messageBlockFromDom) {
        messageBlockFromDom.remove();
    }
})