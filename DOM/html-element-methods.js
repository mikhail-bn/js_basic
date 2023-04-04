
//createElement

const newNavButton = document.createElement('a');
newNavButton.className = "main-navigation__button-item";
newNavButton.href = "#tasks_expired";
newNavButton.dataset.buttonId = "4";
newNavButton.textContent = "Просроченные задачи";

console.log('newNavButton: ', newNavButton);



// append  prepend

const mainNavigation = document.querySelector('.main-navigation__container');
// mainNavigation.prepend(newNavButton);



// element.insertAjacentElement(position, element) - element перед методом это элемент к или в  котором нужно вставить новый элемент

// position - beforebegin afterbegin beforeend afterend

mainNavigation.insertAdjacentElement("beforeend", newNavButton);



// remove

//newNavButton.remove();



// closest

const taskItemText = document.querySelector('.task-item__text');
console.log('taskItemText: ', taskItemText);

const taskItem = taskItemText.closest('.task-item');
console.log('taskItem: ', taskItem);



// classList:  add remove toggle

const firstNavigationButton = document.querySelector('.main-navigation__button-item');
firstNavigationButton.classList.add('main-navigation__button-item_selected');
firstNavigationButton.classList.toggle('main-navigation__button-item_selected');
firstNavigationButton.classList.add('main-navigation__button-item_selected');
firstNavigationButton.classList.toggle('main-navigation__button-item_selected');
firstNavigationButton.classList.add('main-navigation__button-item_selected');
firstNavigationButton.classList.toggle('main-navigation__button-item_selected');
firstNavigationButton.classList.add('main-navigation__button-item_selected'); 
firstNavigationButton.classList.toggle('main-navigation__button-item_selected');


// hasAttribute()   setAttribute(куда, что)    removeAttribute()     getAttribute()

const createTaskBlockInput = document.querySelector('.create-task-block__input');
console.log(createTaskBlockInput.hasAttribute('type_1'));
console.log(createTaskBlockInput.getAttribute('value'));
// createTaskBlockInput.removeAttribute('placeholder');
createTaskBlockInput.setAttribute("value", "Новая задача");