const allElements = document.querySelectorAll('*');
allElements.forEach((elem) => {
    elem.addEventListener('click', (event) => {
        if(event.currentTarget.tagName === 'FORM') {
            event.stopPropagation();
        }        
        alert(`Всплытие: ${elem.tagName}`)
    }, true)
    // elem.addEventListener('click', () => {
    //     alert(`Всплытие: ${elem.tagName}`)
    // }, true)
})