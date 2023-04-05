// Делигирование событий
const allNavigationButtons = document.querySelectorAll('.main-navigation__button-item'); 
const mainNavigation = document.querySelector('.main-navigation');
mainNavigation.addEventListener("click", (event) => {
    console.log('target ', event.target); 
    const isNavButton =  event.target.closest('.main-navigation__button-item');
    console.log('isNavButton: ', isNavButton);
    if(isNavButton) {
        allNavigationButtons.forEach((navButton) => {
            navButton.classList.remove('main-navigation__button-item_selected');
        });
        event.target.classList.add('main-navigation__button-item_selected');
    }
})