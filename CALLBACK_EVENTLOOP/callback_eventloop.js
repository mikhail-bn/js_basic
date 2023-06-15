// Callback

// const promise = new Promise(() => {});
// setTimeout(() => {}, 3000);

const FIRST_TODO_URL = 'https://jsonplaceholder.typicode.com/todos/1';
const getCallback = (callback) => {
    fetch(FIRST_TODO_URL)
        .then((response) => response.json())
        .then((todo) => {
            callback(todo);
        })
        .catch(error => {
            console.log('Error');
        })        
}
getCallback((todoItem) => {
    console.log('todoItem: ', todoItem);    
})

