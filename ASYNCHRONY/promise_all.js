// Promise.all([ 
//     new Promise(),
//     new Promise(),
//     new Promise(),
//     new Promise(),
//     new Promise(),
//     new Promise(),
//     new Promise(),
//     new Promise(),
// ])

// fulfilled
// rejected


const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const todosIds = [80, 41, 64, 146, 23];

const createElement = (text) => {
    const todoElement = document.createElement('li');
    const todoElementAnchor = document.createElement('a');
    todoElementAnchor.href = '#';
    todoElementAnchor.textContent = text;
    todoElement.append(todoElementAnchor);

    return todoElement;
}

const getTodosByIds =  (ids) => {
    const requests = ids.map((id) => {
        fetch(`${TODOS_URL}/${id}`)
    });
    Promise.all(requests)
        .then((responses) => {
            
        })
};

getTodosByIds(todosIds);
