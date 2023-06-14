// then catch finally
// async await

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const TODO_URL = 'https://jsonplaceholder.typicode.com/todos';


//* Вариант fetch

// fetch(USERS_URL, {})
//     .then(response => response.json())
//     .then(users => {
//         console.log('users :', users);
//         const firstUserId = users[0]?.id;
//         console.log('firstUserId: ', firstUserId);
//         fetch(`${TODO_URL}?userId=${firstUserId}`)
//             .then(response => response.json())
//             .then(todos => {
//                 console.log('todos: ', todos);
//             })
//             .catch(error => {
//                 console.log('error ', error);
//             })
//     })
//     .catch(error => {
//         console.log('error ', error);
//     })

    //* Async await

    //* try {} catch {} finally {}

    const getTodosWithId = async() => {
        try {
            const response = await fetch(USERS_URL);
            if (!response.ok) {
                throw new Error('There is a mistake with response((')
            }
            console.log('response: ', response);
            const users = await response.json();
            console.log('users: ', users);
            const firstUserId = users[0]?.id;
            const dataTodos = await fetch(`${TODO_URL}?userId=${firstUserId}`);
            if (!dataTodos.ok) {
                throw new Error('There is a mistake with dataTodos((')
            }
            const todos = await dataTodos.json()
            console.log('todos: ', todos);
        } catch(error) {
            console.log('error ', error); 
        } finally {
            console.log('finally');
        }       
    }

    const promise = getTodosWithId();
    console.log('promise: ', promise);

