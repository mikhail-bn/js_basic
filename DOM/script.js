const tasksBlock = document.getElementById('tasks');
console.log('tasksBlock: ', tasksBlock);

const allNavButtons = document.getElementsByClassName('main-navigation__button-item')
console.log('allNavButtons: ', allNavButtons);

const allButtons = document.getElementsByTagName('button');
console.log('allButtons: ', allButtons);




// guerySelector

const taskBlock2 = document.querySelector('#tasks');
console.log('taskBlock2: ', taskBlock2);

const mainNavigation = document.querySelector('.main-navigation');
console.log('mainNavigation: ', mainNavigation);

const firstButton = document.querySelector('button');
console.log('firstButton: ', firstButton);

const thirdNavigationButton = document.querySelector('[data-button-id="3"]');
console.log('thirdNavigationButton: ', thirdNavigationButton);




// querySelectorAll

const allNavigationButtons = document.querySelectorAll('.main-navigation__button-item');
console.log('allNavigationButtons: ', allNavigationButtons);

allNavigationButtons.forEach((b, i) => {
    console.log(i, b);
})

const createTaskBlock = document.querySelector('.create-task-block');
console.log('createTaskBlock: ', createTaskBlock);

const submitButton = createTaskBlock.querySelector('[type="submit"]');
console.log('submitButton: ', submitButton);