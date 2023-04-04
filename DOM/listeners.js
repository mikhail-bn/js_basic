
// addEventListener("название события", функция)

// const firstNavButton = document.querySelector('.main-navigation__button-item');
// firstNavButton.addEventListener('click', (event) => {
//     console.log(event.target);
//     // const target = event.target;
//     const {target} = event;
//     target.classList.toggle('main-navigation__button-item_selected')
// })

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


// submit

const createTaskForm = document.querySelector('.create-task-block');

