//* fetch()

//* fetch(url)

//* GET POST DELETE

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'; // Помещаем url в переменную 


// Создаем функцию которая принимает текст и создает html элемент с атрибутами с этим текстом 
const createTodoElement = (text) => {
    const todoElement = document.createElement('li');
    const todoElementAnchor = document.createElement('a');
    todoElementAnchor.href = '#';
    todoElementAnchor.textContent = text;
    todoElement.append(todoElementAnchor);

    return todoElement;
}

// Функция для отображения анимации при ожидании ответа от сервера
const toggleLoader = () => {
    const loaderHTML = document.querySelector('#loader');
    const isHidden = loaderHTML.hasAttribute('hidden');
    if (isHidden) {
        loaderHTML.removeAttribute('hidden');
    } else {
        loaderHTML.setAttribute('hidden', '');
    }
}

// Помещаем элемент с id  data-container в переменную
const dataContainer = document.querySelector('#data-container');

// Получаем данные с сайта методом fetch
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
                const todoHTML = createTodoElement(element.title);
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
