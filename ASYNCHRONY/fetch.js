//* fetch()

//* fetch(url)

//* GET POST DELETE

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

const createElement = (text) => {
    const todoElement = document.createElement('li');
    const todoElementAnchor = document.createElement('a');
    todoElementAnchor.href = '#';
    todoElementAnchor.textContent = text;
    todoElement.append(todoElementAnchor);
    return todoElement;
}
const toggleLoader = () => {
    const loaderHTML = document.querySelector('#loader');
    const isHidden = loaderHTML.hasAttribute('hidden');
    if (isHidden) {
        loaderHTML.removeAttribute('hidden');
    } else {
        loaderHTML.setAttribute('hidden', '');
    }
}
const dataContainer = document.querySelector('#data-container');


const getAllToDos = () => {
    toggleLoader();
    const result = fetch(TODOS_URL, {    
        method: 'GET',        
    })
    
    console.log('result: ', result);
    
    result
        .then((response) => {
            console.log('response ', response);
            if(!response.ok) {
                throw new Error('Ошибка запроса');
            }
            return response.json();
        })
        .then((todos) => {
            console.log('todos: ', todos);
            todos.forEach(element => {
                const todoHTML = createElement(element.title);
                dataContainer.append(todoHTML); 
            });
        })
        .catch((error) => {
            console.log('error: ', error);
        })
        .finally(() => {
            toggleLoader();
        })
}
getAllToDos();
